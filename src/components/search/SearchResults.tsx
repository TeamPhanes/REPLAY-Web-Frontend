'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { mockGatherings } from '@/data/mockGatherings';
import { mockRooms } from '@/data/mockRooms';
import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import GatheringCard from '@/components/@shared/cardList/GatheringCard';
import RoomCard from '@/components/@shared/cardList/RoomCard';
import EmptySearchResult from '@/components/search/EmptySearchResult';
import { useGetGathering } from '@/hooks/reactQuery/useGetGathering';
import { useGetTheme } from '@/hooks/reactQuery/useGetTheme';
import { GatheringDTO } from '@/types/gathering/gathering.type';
import { RoomDTO } from '@/types/room/room.types';
import ChevronRight from '@/public/icons/arrow/chevron_right.svg';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const { accessToken } = useAuthStore();

  // const { theme } = useGetTheme(
  //   accessToken,
  //   keyword,
  //   0,
  //   10,
  //   'likes',
  //   '시.도',
  //   '시.군.구',
  //   '전체'
  // );
  // const { gathering } = useGetGathering(
  //   accessToken,
  //   keyword,
  //   0,
  //   10,
  //   'dateTime',
  //   '시.도',
  //   '시.군.구',
  //   '전체'
  // );
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

      {mockRooms && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
          {mockRooms.data.map((room: RoomDTO['get']) => (
            <RoomCard room={room} key={room.themeId} />
          ))}
        </div>
      )}
      {mockRooms && mockRooms.data.length === 0 && <EmptySearchResult />}
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

      {mockGatherings && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
          {mockGatherings.data.map(
            (data: GatheringDTO['get']['data'][number]) => (
              <GatheringCard key={data.gatheringId} gathering={data} />
            )
          )}
        </div>
      )}
      {mockGatherings && mockGatherings.data.length === 0 && (
        <EmptySearchResult />
      )}
    </>
  );
}
