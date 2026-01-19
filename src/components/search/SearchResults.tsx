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
        <h2 className="gap-[2px] text-base font-semibold tracking-[-2.5%] md:text-lg">
          방탈출
        </h2>
        <button
          type="button"
          className="flex items-center p-[2px] text-sm font-normal tracking-[-2.5%] text-font-baseWhite"
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
        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
          {searchTheme.contents.map((room: ThemeListDTO['get']) => (
            <RoomCard room={room} key={room.id} />
          ))}
        </div>
      )}
      {searchTheme && searchTheme.contents.length === 0 && (
        <EmptySearchResult text="방탈출을 찾지 못했어요." />
      )}
      <div className="mt-[52px] flex items-center justify-between">
        <h2 className="text-base font-semibold tracking-[-2.5%] md:text-lg">
          모임
        </h2>
        <button
          type="button"
          className="flex items-center p-[2px] text-sm font-normal tracking-[-2.5%] text-font-baseWhite"
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
        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
          {searchGathering.contents.map(
            (data: GatheringDTO['get'][][number]) => (
              <GatheringCard key={data.id} gathering={data} />
            )
          )}
        </div>
      )}
      {searchGathering && searchGathering.contents.length === 0 && (
        <EmptySearchResult text="모임을 찾지 못했어요." />
      )}
    </>
  );
}
