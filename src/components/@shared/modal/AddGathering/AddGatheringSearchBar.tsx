'use client';

import { useEffect } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import Image from 'next/image';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import { useGetSearchTheme } from '@/hooks/reactQuery/useGetSearchTheme';
import { useDebounce } from '@/hooks/useDebounce';
import { useOpen } from '@/hooks/useOpen';
import { RoomDTO } from '@/types/room/room.types';

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
}

export default function AddGatheringSearchBar({
  search,
  searchChange,
  themeId,
  themeIdChange,
  register,
  errors,
}: AddGatheringSearchBarProps) {
  const { debouncedValue } = useDebounce(search, 500);
  const { isOpen, openModal, closeModal } = useOpen();

  const { searchTheme } = useGetSearchTheme(
    debouncedValue,
    '시.도',
    '시.군.구'
  );

  useEffect(() => {
    if (search === '') openModal();
  }, [themeId, search, openModal]);

  return (
    <div className="w-full h-[58px] relative">
      <div
        className={`${errors.themeId ? 'border-error' : 'border-darkSearch'} flex h-full items-center border-2 justify-between py-[5px] px-6 z-20 relative bg-darkSearch rounded-full`}
      >
        <input
          {...register('themeId', { required: '테마 검색은 필수입니다.' })}
          type="hidden"
          value={search}
        />
        <input
          type="text"
          placeholder="테마명을 검색해주세요."
          className="w-full text-xl md:text-2xl/[34px] tracking-[-2.5%] placeholder:text-white text-white bg-darkSearch z-20"
          value={search}
          onChange={(e) => searchChange(e.target.value)}
        />
        {search !== '' ? (
          <Image
            src="/icons/search/white_exit.svg"
            alt="검색제거"
            width={48}
            height={48}
            className="w-9 h-9 md:w-12 md:h-12 cursor-pointer"
            onClick={() => {
              searchChange('');
              themeIdChange(0);
            }}
          />
        ) : (
          <Image
            src="/icons/search/dark_search.svg"
            alt="검색하기"
            width={48}
            height={48}
            className="w-9 h-9 md:w-12 md:h-12 cursor-pointer"
          />
        )}
      </div>
      <div
        className={`${isOpen ? '' : 'hidden'} w-full absolute bg-grayFont top-8 p-4 z-10 flex flex-col gap-1 pt-8 rounded-b-3xl`}
      >
        {searchTheme &&
          searchTheme.map((room: RoomDTO['get']) => (
            <button
              type="button"
              key={room.themeId}
              className="text-xl flex gap-1 flex-col hover:bg-darkSearch"
              onClick={() => {
                closeModal();
                searchChange(room.themeName);
                themeIdChange(room.themeId);
              }}
            >
              <p className="text-base">
                [{room.cafe} {room.spot}]
              </p>
              <p className="text-xl">{room.themeName}</p>
            </button>
          ))}
        {searchTheme && searchTheme.length === 0 && (
          <p className="text-xl">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
