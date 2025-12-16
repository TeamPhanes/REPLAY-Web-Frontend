'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import GatheringCard from '@/components/@shared/cardList/GatheringCard';
import RoomCard from '@/components/@shared/cardList/RoomCard';
import EmptySearchResult from '@/components/search/EmptySearchResult';
import { useGetSearchGathering } from '@/hooks/reactQuery/useGetSearchGathering';
import { useGetSearchTheme } from '@/hooks/reactQuery/useGetSearchTheme';
import { GatheringDTO } from '@/types/gathering/gathering.type';
import { ThemeListDTO } from '@/types/theme/theme.types';
import ChevronRight from '@/public/icons/arrow/chevron_right.svg';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const { accessToken } = useAuthStore();
  const [page, setPage] = useState(0);
  const { genreList, districtList } = useQueryStringStore();
  const { searchTheme } = useGetSearchTheme({
    accessToken,
    locations: districtList,
    genres: genreList,
    size: 2,
    keyword,
  });
  const { searchGathering } = useGetSearchGathering({
    accessToken,
    locations: districtList,
    genres: genreList,
    size: 2,
    keyword,
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-base md:text-lg tracking-[-2.5%] gap-[2px]">
          방탈출
        </h2>
        <button
          type="button"
          className="text-sm tracking-[-2.5%] text-font-baseWhite font-normal flex items-center p-[2px]"
        >
          더 보기
          <Image
            src={ChevronRight}
            alt="더보기 화살표 아이콘"
            width={18}
            height={18}
          />
        </button>
      </div>

      {searchTheme && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
          {searchTheme.contents.map((room: ThemeListDTO['get']) => (
            <RoomCard room={room} key={room.id} />
          ))}
        </div>
      )}
      {searchTheme && searchTheme.contents.length === 0 && (
        <EmptySearchResult />
      )}
      <div className="flex items-center justify-between mt-[52px]">
        <h2 className="font-semibold text-base md:text-lg tracking-[-2.5%]">
          모임
        </h2>
        <button
          type="button"
          className="text-sm tracking-[-2.5%] text-font-baseWhite font-normal flex items-center p-[2px]"
        >
          더 보기
          <Image
            src={ChevronRight}
            alt="더보기 화살표 아이콘"
            width={18}
            height={18}
          />
        </button>
      </div>

      {searchGathering && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
          {searchGathering.contents.map(
            (data: GatheringDTO['get'][][number]) => (
              <GatheringCard key={data.id} gathering={data} />
            )
          )}
        </div>
      )}
      {searchGathering && searchGathering.contents.length === 0 && (
        <EmptySearchResult />
      )}
    </>
  );
}
