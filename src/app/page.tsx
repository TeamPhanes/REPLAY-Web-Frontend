'use client';

import { useState } from 'react';
import { popularList } from '@/data/home/homeBottomCarouselList';
import { useGenreStore } from '@/store/useGenreStore';
import Carousel from '@/components/@shared/carousel/Carousel';
import PageContainer from '@/components/@shared/layout/PageContainer';
import CarouselSkeleton from '@/components/@shared/skeleton/CarouselSkeleton';
import BottomCarousel from '@/components/homePage/BottomCarousel';
import TypeButtonChanger from '@/components/homePage/typeChanger/TypeButtonChanger';
import TypeChanger from '@/components/myPage/favorite/TypeChanger';
import { defaultLocationList } from '@/constants/homepage/list';
import { useGetPreviewTheme } from '@/hooks/reactQuery/useGetPreviewTheme';

export default function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState('전체');
  const [selectedLocation, setSelectedLocation] = useState('전체');
  const { previewTheme: likePreviewTheme } = useGetPreviewTheme(
    0,
    12,
    selectedGenre,
    ['like', 'desc']
  );
  const { previewTheme: newPreviewTheme } = useGetPreviewTheme(
    0,
    12,
    selectedGenre,
    ['new', 'desc']
  );

  const { genreList } = useGenreStore();
  return (
    <PageContainer>
      <TypeChanger
        gap="gap-6 md:gap-12"
        list={genreList}
        selectedType={selectedGenre}
        setSelectedType={setSelectedGenre}
      />
      <Carousel
        carouselList={popularList}
        imageWidth={1000}
        imageHeight={520}
        buttonSize={36}
        delayTime={15000}
        className="rounded-lg md:!w-[1000px]"
        buttonPosition={80}
        loop
        center
      />
      {!likePreviewTheme ? (
        <CarouselSkeleton />
      ) : (
        <BottomCarousel
          title="추천순"
          list={likePreviewTheme.content}
          delayTime={9000}
        />
      )}

      {!newPreviewTheme ? (
        <CarouselSkeleton />
      ) : (
        <BottomCarousel
          title="새로 추가된 방탈출"
          list={newPreviewTheme.content}
          delayTime={11000}
        />
      )}

      <div className="relative">
        <TypeButtonChanger
          className="absolute top-12 gap-3"
          options={defaultLocationList}
          selectedType={selectedLocation}
          setSelectedType={setSelectedLocation}
        />
        <BottomCarousel
          gap="gap-[68px]"
          title="플레이어가 가장 많이 찾는 지역"
          list={popularList}
          delayTime={10000}
        />
      </div>

      {/* <div className="relative mt-10 md:mt-24 flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-[-2.5%] text-white">
          HOT 매장 둘러보기
        </h2>
        <Carousel
          carouselList={popularList}
          imageWidth={525}
          imageHeight={260}
          buttonSize={24}
          delayTime={12000}
          className="!w-[525px] rounded-lg"
          buttonPosition={-6}
        />
      </div> */}
    </PageContainer>
  );
}
