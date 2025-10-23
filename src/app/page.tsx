'use client';

import { useState } from 'react';
import Image from 'next/image';
import { popularList } from '@/data/home/homeBottomCarouselList';
import Carousel from '@/components/@shared/carousel/Carousel';
import PageContainer from '@/components/@shared/layout/PageContainer';
import BottomCarousel from '@/components/homePage/BottomCarousel';
import TypeButtonChanger from '@/components/homePage/typeChanger/TypeButtonChanger';
import TypeChanger from '@/components/myPage/favorite/TypeChanger';
import {
  defaultGenreList,
  defaultLocationList,
  defaultNewList,
} from '@/constants/mypage/typeList';
import { useOpen } from '@/hooks/useOpen';
import offHeart from '@/public/icons/heart/off_annotation_heart.svg';
import onHeart from '@/public/icons/heart/on_annotation_heart.svg';

export default function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState('전체');
  const [selectedLocation, setSelectedLocation] = useState('전체');
  const { isOpen, toggleOpen } = useOpen();
  return (
    <PageContainer>
      <div className="flex justify-center my-12 items-center">
        <TypeChanger
          gap="gap-12"
          options={defaultGenreList}
          selectedType={selectedGenre}
          setSelectedType={setSelectedGenre}
        />
        <button
          type="button"
          onClick={toggleOpen}
          className="absolute flex items-center gap-2 right-0"
        >
          <p
            className={`${isOpen ? '' : 'hidden'} text-sm text-font-baseWhite font-semibold`}
          >
            선호장르 다섯개를 선택해 주세요.
          </p>
          <Image
            src={isOpen ? onHeart : offHeart}
            alt="선호 장르 선택하기"
            width={32}
            height={32}
          />
        </button>
      </div>
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
    </PageContainer>
  );
}
