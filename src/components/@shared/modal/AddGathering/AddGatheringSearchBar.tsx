'use client';

import { useEffect } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import Image from 'next/image';
import { useGetSuggestTheme } from '@/hooks/reactQuery/useGetSuggestTheme';
import { useDebounce } from '@/hooks/useDebounce';
import { useOpen } from '@/hooks/useOpen';
import { SuggestThemeListDTO } from '@/types/theme/theme.types';

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

  const { suggestTheme } = useGetSuggestTheme(debouncedValue, 5, {
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
      className={`relative w-full ${disabled ? 'pointer-events-none bg-line-lightGray' : ''}`}
    >
      <div
        className={`${errors.themeId ? 'border-error' : 'border-line-Gray'} relative z-20 flex h-full items-center justify-between border-b-[1px] p-4`}
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
          className={`${disabled ? 'bg-line-lightGray' : 'bg-card-modal'} z-20 ml-[6px] w-full text-base tracking-[-2.5%] text-font-baseBlack placeholder:text-font-disabled`}
          value={search}
          onChange={(e) => searchChange(e.target.value)}
        />
        {errors.themeId && (
          <p className="absolute -bottom-6 left-0 ml-5 mt-1 text-sm text-red-500">
            {errors.themeId.message}
          </p>
        )}
      </div>
      <div
        className={`${isOpen ? '' : 'hidden'} absolute top-16 z-30 flex w-full flex-col gap-1 bg-card-white p-4 shadow-lg`}
      >
        {suggestTheme &&
          suggestTheme.contents.map((room: SuggestThemeListDTO['get']) => (
            <button
              type="button"
              key={room.id}
              className="flex flex-col gap-1 text-xl text-font-baseBlack duration-300 hover:bg-darkSearch hover:text-font-baseWhite"
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
        {suggestTheme && suggestTheme.length === 0 && (
          <p className="text-xl">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
