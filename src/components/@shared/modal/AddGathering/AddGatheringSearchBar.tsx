'use client';

import { useEffect } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import Image from 'next/image';
import { useGetSearchTheme } from '@/hooks/reactQuery/useGetSearchTheme';
import { useDebounce } from '@/hooks/useDebounce';
import { useOpen } from '@/hooks/useOpen';
import { SearchThemeListDTO } from '@/types/theme/theme.types';

interface FormValues {
  name: string;
  themeId: number;
  content: string;
  isIndividual: string;
  price: number;
  dateTime: Date;
  registrationStart: Date;
  registrationEnd: Date;
  capacity: number;
}

interface AddGatheringSearchBarProps {
  search: string;
  searchChange: (value: string) => void;
  themeId: number;
  themeIdChange: (value: number) => void;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  disabled?: boolean;
}

export default function AddGatheringSearchBar({
  search,
  searchChange,
  themeId,
  themeIdChange,
  register,
  errors,
  disabled,
}: AddGatheringSearchBarProps) {
  const { debouncedValue } = useDebounce(search, 500);
  const { isOpen, openModal, closeModal } = useOpen();

  const { searchTheme } = useGetSearchTheme(debouncedValue, 5, {
    enabled: !disabled,
  });

  useEffect(() => {
    if (!disabled && search && themeId === 0 && !isOpen) {
      openModal();
    }
  }, [search, isOpen, themeId, openModal, disabled]);

  useEffect(() => {
    if (search === '' && themeId !== 0) {
      themeIdChange(0);
    }
  }, [search, themeId, themeIdChange]);

  return (
    <div
      className={`w-full relative ${disabled ? 'bg-line-lightGray pointer-events-none' : ''}`}
    >
      <div
        className={`${errors.themeId ? 'border-error' : 'border-line-Gray'} flex h-full items-center border-b-[1px] justify-between p-4 z-20 relative`}
      >
        <input
          {...register('themeId', { required: '테마 검색은 필수입니다.' })}
          type="hidden"
          value={search}
        />
        {search !== '' ? (
          <Image
            src="/icons/search/dark_exit.svg"
            alt="검색제거"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={() => {
              searchChange('');
              themeIdChange(0);
            }}
          />
        ) : (
          <Image
            src="/icons/search/dark_search.svg"
            alt="검색하기"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
        <input
          type="text"
          placeholder="방탈출을 검색해 주세요."
          className={`${disabled ? 'bg-line-lightGray' : 'bg-card-modal'} w-full text-base tracking-[-2.5%] placeholder:text-font-disabled text-font-baseBlack z-20 ml-[6px]`}
          value={search}
          onChange={(e) => searchChange(e.target.value)}
        />
        {errors.themeId && (
          <p className="text-red-500 text-sm mt-1 ml-5 absolute left-0 -bottom-6">
            {errors.themeId.message}
          </p>
        )}
      </div>
      <div
        className={`${isOpen ? '' : 'hidden'} w-full absolute bg-card-white top-16 p-4 z-30 flex flex-col gap-1 shadow-lg`}
      >
        {searchTheme &&
          searchTheme.contents.map((room: SearchThemeListDTO['get']) => (
            <button
              type="button"
              key={room.id}
              className="text-xl text-font-baseBlack flex gap-1 flex-col hover:bg-darkSearch hover:text-font-baseWhite duration-300"
              onClick={() => {
                closeModal();
                searchChange(room.title);
                themeIdChange(room.id);
              }}
            >
              <p className="text-base">[{room.spotName}]</p>
              <p className="text-xl">{room.title}</p>
            </button>
          ))}
        {searchTheme && searchTheme.length === 0 && (
          <p className="text-xl">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
