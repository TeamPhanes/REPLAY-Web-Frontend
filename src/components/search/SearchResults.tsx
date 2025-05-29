'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import { Autoplay, Grid } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import GatheringCard from '@/components/@shared/cardList/GatheringCard';
import RoomCard from '@/components/@shared/cardList/RoomCard';
import { useGetGathering } from '@/hooks/reactQuery/useGetGathering';
import { useGetTheme } from '@/hooks/reactQuery/useGetTheme';
import { GatheringDTO } from '@/types/gathering/gathering.type';
import { RoomDTO } from '@/types/room/room.types';
import SearchNotFound from '@/public/images/error/search.png';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const swiperRef = useRef<SwiperClass>();

  const [page, setPage] = useState(0);
  const { largeDistrict, middleDistrict } = useQueryStringStore();

  const { theme } = useGetTheme(
    keyword,
    page,
    4,
    'likes',
    largeDistrict,
    middleDistrict
  );
  const { gathering } = useGetGathering();
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
          theme.map((room: RoomDTO['get']) => (
            <SwiperSlide key={room.themeId}>
              <RoomCard room={room} />
            </SwiperSlide>
          ))}
        {theme && theme.length === 0 && (
          <div className="flex justify-center items-center flex-col">
            <p className="font-normal text-[64px] tracking-[0.31em] mb-5">
              NOT FOUND
            </p>
            <Image
              src={SearchNotFound}
              alt="검색 결과 없음"
              width={200}
              height={200}
              priority
              quality={100}
            />
            <p className="font-normal text-2xl/[34px] tracking-[-2.5%]">
              열쇠를 찾지 못했어요.
            </p>
          </div>
        )}
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
          gathering.map((data: GatheringDTO['get']) => (
            <SwiperSlide key={data.gatheringId}>
              <GatheringCard gathering={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
