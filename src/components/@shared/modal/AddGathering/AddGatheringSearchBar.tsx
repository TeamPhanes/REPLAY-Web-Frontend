'use client';

import Image from 'next/image';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import { useGetTheme } from '@/hooks/reactQuery/useGetTheme';
import { useDebounce } from '@/hooks/useDebounce';
import { RoomDTO } from '@/types/room/room.types';

interface AddGatheringSearchBarProps {
  search: string;
  searchChange: (value: string) => void;
  themeId: number;
  themeIdChange: (value: number) => void;
}

export default function AddGatheringSearchBar({
  search,
  searchChange,
  themeId,
  themeIdChange,
}: AddGatheringSearchBarProps) {
  const { debouncedValue } = useDebounce(search, 500);
  const { largeDistrict, middleDistrict } = useQueryStringStore();

  const { theme } = useGetTheme(
    null,
    debouncedValue,
    0,
    5,
    'likes',
    largeDistrict,
    middleDistrict
  );

  return (
    <div className="w-full rounded-full h-[58px] bg-darkSearch relative">
      <div className="flex h-full items-center justify-between py-[5px] px-6">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          className="w-full text-2xl/[34px] tracking-[-2.5%] placeholder:text-white text-white bg-darkSearch"
          value={search}
          onChange={(e) => searchChange(e.target.value)}
        />
        {themeId !== 0 ? (
          <Image
            src="/icons/search/white_exit.svg"
            alt="검색제거"
            width={48}
            height={48}
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
            width={48}
            height={48}
            className="cursor-pointer"
          />
        )}
      </div>
      <div
        className={`${search !== '' && themeId === 0 ? '' : 'hidden'} w-full absolute bg-darkSearch top-16 p-2 z-10 flex flex-col gap-1`}
      >
        {theme &&
          theme.data.map((room: RoomDTO['get']) => (
            <button
              type="button"
              key={room.themeId}
              className="text-xl flex gap-1"
              onClick={() => {
                searchChange(room.themeName);
                themeIdChange(room.themeId);
              }}
            >
              <p>[{room.address}]</p>
              <p>{room.themeName}</p>
            </button>
          ))}
        {theme && theme.data.length === 0 && (
          <p className="text-xl">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
