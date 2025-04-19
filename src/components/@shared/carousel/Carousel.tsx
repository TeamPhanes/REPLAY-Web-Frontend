'use client';

import { useRef, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import CarouselButton from '@/components/@shared/carousel/CarouselButton';
import CarouselSwiper from '@/components/@shared/carousel/CarouselSwiper';
import { CarouselDTO } from '@/types/home/home.type';

export interface CarouselProps {
  carouselList: CarouselDTO[];
  width: number;
  imageWidth: number;
  imageHeight: number;
  buttonSize: number;
  delayTime?: number;
  perView?: number;
  type?: 'top';
}

export default function Carousel({
  carouselList,
  width,
  imageWidth,
  imageHeight,
  buttonSize,
  delayTime = 3000,
  perView = 1,
  type,
}: CarouselProps) {
  const swiperRef = useRef<SwiperClass>();
  const [activeSwiper, setActiveSwiper] = useState(0);
  const listLength = carouselList.length;

  return (
    <div className="relative" style={{ width: `${width}px` }}>
      <CarouselButton
        buttonSize={buttonSize}
        activeSwiper={activeSwiper}
        listLength={listLength}
        perView={perView}
        swiperRef={swiperRef}
      />
      <CarouselSwiper
        carouselList={carouselList}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        delayTime={delayTime}
        perView={perView}
        type={type}
        swiperRef={swiperRef}
        setActiveSwiper={setActiveSwiper}
      />
    </div>
  );
}
