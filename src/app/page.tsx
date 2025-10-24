'use client';

import { useState } from 'react';
import { popularList } from '@/data/home/homeBottomCarouselList';
import { useGenreStore } from '@/store/useGenreStore';
import Carousel from '@/components/@shared/carousel/Carousel';
import PageContainer from '@/components/@shared/layout/PageContainer';
import BottomCarousel from '@/components/homePage/BottomCarousel';
import TypeButtonChanger from '@/components/homePage/typeChanger/TypeButtonChanger';
import TypeChanger from '@/components/myPage/favorite/TypeChanger';
import { defaultLocationList, defaultNewList } from '@/constants/homepage/list';

export default function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState('전체');
  const [selectedLocation, setSelectedLocation] = useState('전체');

  const { genreList } = useGenreStore();
  return (
    <PageContainer>
      <TypeChanger
        gap="gap-12"
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
        className="!w-[1000px] rounded-lg"
        buttonPosition={80}
        loop
        center
      />
      <BottomCarousel title="추천순" list={popularList} delayTime={9000} />

      <div className="relative">
        <TypeButtonChanger
          className="absolute gap-3 top-12"
          options={defaultLocationList}
          selectedType={selectedLocation}
          setSelectedType={setSelectedLocation}
        />
        <BottomCarousel
          gap="gap-[72px]"
          title="지역별 방탈출"
          list={popularList}
          delayTime={10000}
        />
      </div>

      <div className="relative">
        <TypeButtonChanger
          className="absolute gap-3 top-12"
          options={defaultNewList}
          selectedType={selectedLocation}
          setSelectedType={setSelectedLocation}
        />
        <BottomCarousel
          gap="gap-[72px]"
          title="신규 방탈출 & 출시 예정 방탈출"
          list={popularList}
          delayTime={11000}
        />
      </div>

      <div className="relative mt-10 md:mt-24 flex flex-col gap-4">
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
      </div>
    </PageContainer>
  );
}
