'use client';

import { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import { Autoplay, Grid } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
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
  const swiperRef = useRef<SwiperClass>();
  const { accessToken } = useAuthStore();

  const [page, setPage] = useState(0);
  const { largeDistrict, middleDistrict } = useQueryStringStore();

  const { theme } = useGetTheme(
    accessToken,
    keyword,
    page,
    4,
    'likes',
    largeDistrict,
    middleDistrict
  );
  const { gathering } = useGetGathering(
    accessToken,
    keyword,
    page,
    4,
    'dateTime',
    largeDistrict,
    middleDistrict
  );
  return (
    <>
      <h2 className="font-semibold text-[32px]/[42px] tracking-[-2.5%] mt-[52px]">
        방탈출
      </h2>
      <Swiper
        modules={[Autoplay, Grid]}
        slidesPerView={2}
        slidesPerGroup={2}
        grid={{ rows: 2, fill: 'row' }}
        autoplay={{ delay: 5000 }}
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        className="mt-6"
      >
        {theme &&
          theme.data.map((room: RoomDTO['get']) => (
            <SwiperSlide key={room.themeId}>
              <RoomCard room={room} />
            </SwiperSlide>
          ))}
        {theme && theme.data.length === 0 && <EmptySearchResult />}
      </Swiper>
      <h2 className="font-semibold text-[32px]/[42px] tracking-[-2.5%] mt-[52px]">
        모임
      </h2>
      <Swiper
        modules={[Autoplay, Grid]}
        slidesPerView={2}
        slidesPerGroup={2}
        grid={{ rows: 2, fill: 'row' }}
        autoplay={{ delay: 5000 }}
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        className="mt-6"
      >
        {gathering &&
          gathering.data.map((data: GatheringDTO['get']) => (
            <SwiperSlide key={data.gatheringId}>
              <GatheringCard gathering={data} />
            </SwiperSlide>
          ))}
        {gathering && gathering.data.length === 0 && <EmptySearchResult />}
      </Swiper>
    </>
  );
}
