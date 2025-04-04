import Image from 'next/image';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { MutableRefObject } from 'react';
import { CarouselDTO } from '@/src/types/home/home.type';
import 'swiper/css';
import 'swiper/css/autoplay';

interface CarouselSwiperProps {
  carouselList: CarouselDTO[];
  imageWidth: number;
  imageHeight: number;
  delayTime: number;
  perView?: number;
  type?: 'top';
  swiperRef: MutableRefObject<SwiperClass | undefined>;
  setActiveSwiper: React.Dispatch<React.SetStateAction<number>>;
}

export default function CarouselSwiper({
  swiperRef,
  carouselList,
  imageWidth,
  imageHeight,
  delayTime,
  perView,
  type,
  setActiveSwiper,
}: CarouselSwiperProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={perView}
      slidesPerGroup={perView}
      autoplay={{ delay: delayTime }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper) => {
        setActiveSwiper(swiper.activeIndex);
      }}
      className="overflow-hidden rounded-[30px]"
    >
      {carouselList.map((list, index) => (
        <SwiperSlide key={index}>
          {type === 'top' ? (
            <div className="mt-3 flex flex-col gap-3">
              <p className="text-base font-normal tracking-[-2.5%] text-white">
                {list.name}
              </p>
              <Image
                src={list.image}
                alt={list.name}
                width={imageWidth}
                height={imageHeight}
                quality={100}
                style={{
                  width: `${imageWidth}px`,
                  height: `${imageHeight}px`,
                }}
              />
              <div className="flex justify-center gap-2">
                {list.genres?.map((genre) => (
                  <p
                    key={genre}
                    className="text-base font-normal tracking-[-2.5%] text-white"
                  >
                    #{genre}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <Image
              src={list.image}
              alt={list.name}
              width={imageWidth}
              height={imageHeight}
              quality={100}
              className="rounded-[30px]"
              style={{
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
              }}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
