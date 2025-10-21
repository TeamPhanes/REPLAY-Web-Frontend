'use client';

import { useRef, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import CarouselButton from '@/components/@shared/carousel/CarouselButton';
import CarouselSwiper from '@/components/@shared/carousel/CarouselSwiper';
import { CarouselDTO } from '@/types/home/home.type';

export interface CarouselProps {
  carouselList: CarouselDTO[];
  imageWidth: number;
  imageHeight: number;
  buttonSize: number;
  buttonPosition: number;
  className?: string;
  delayTime?: number;
  perView?: number;
  loop?: boolean;
  center?: boolean;
}

export default function Carousel({
  carouselList,
  imageWidth,
  imageHeight,
  buttonSize,
  buttonPosition,
  className,
  delayTime = 3000,
  perView = 1,
  loop = false,
  center = false,
}: CarouselProps) {
  const swiperRef = useRef<SwiperClass>();
  const [activeSwiper, setActiveSwiper] = useState(0);
  const listLength = carouselList.length;

  return (
    <div className="relative">
      <CarouselButton
        buttonSize={buttonSize}
        activeSwiper={activeSwiper}
        listLength={listLength}
        perView={perView}
        swiperRef={swiperRef}
        position={buttonPosition}
      />
      <CarouselSwiper
        carouselList={carouselList}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        delayTime={delayTime}
        className={className}
        swiperRef={swiperRef}
        setActiveSwiper={setActiveSwiper}
        loop={loop}
        center={center}
      />
    </div>
  );
}
