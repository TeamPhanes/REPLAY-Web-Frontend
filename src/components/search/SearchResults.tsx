'use client';

import { useSearchParams } from 'next/navigation';
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

export default function SearchResults() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const { accessToken } = useAuthStore();

  const { largeDistrict, middleDistrict } = useQueryStringStore();

  const { theme } = useGetTheme(
    accessToken,
    keyword,
    0,
    10,
    'likes',
    largeDistrict,
    middleDistrict,
    '전체'
  );
  const { gathering } = useGetGathering(
    accessToken,
    keyword,
    0,
    10,
    'dateTime',
    largeDistrict,
    middleDistrict,
    '전체'
  );
  return (
    <>
      <h2 className="font-semibold text-base md:text-lg tracking-[-2.5%] mt-[52px]">
        방탈출
      </h2>
      {theme && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {theme.data.map((room: RoomDTO['get']) => (
            <RoomCard room={room} key={room.themeId} />
          ))}
        </div>
      )}
      {theme && theme.data.length === 0 && <EmptySearchResult />}
      <h2 className="font-semibold text-base md:text-lg tracking-[-2.5%] mt-[52px]">
        모임
      </h2>
      {gathering && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {gathering.data.map((data: GatheringDTO['get']['data'][number]) => (
            <GatheringCard key={data.gatheringId} gathering={data} />
          ))}
        </div>
      )}
      {gathering && gathering.data.length === 0 && <EmptySearchResult />}
    </>
  );
}
