import { MutableRefObject } from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { CarouselDTO } from '@/types/home/home.type';

interface CarouselSwiperProps {
  carouselList: CarouselDTO[];
  imageWidth: number;
  imageHeight: number;
  delayTime: number;
  className?: string;
  loop?: boolean;
  center?: boolean;
  swiperRef: MutableRefObject<SwiperClass | undefined>;
  setActiveSwiper: React.Dispatch<React.SetStateAction<number>>;
}

export default function CarouselSwiper({
  swiperRef,
  carouselList,
  imageWidth,
  imageHeight,
  delayTime,
  className,
  loop = false,
  center = false,
  setActiveSwiper,
}: CarouselSwiperProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={loop}
      centeredSlides={center}
      slidesPerView="auto"
      spaceBetween={15}
      autoplay={{ delay: delayTime }}
      onSwiper={(swiper: SwiperType) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper: SwiperType) => {
        setActiveSwiper(swiper.activeIndex);
      }}
      className="overflow-hidden"
    >
      {carouselList.map((list, index) => (
        <SwiperSlide key={index} className={className}>
          <Image
            src={list.image}
            alt={list.name}
            width={imageWidth}
            height={imageHeight}
            unoptimized
            quality={100}
            className={className}
            style={{
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
