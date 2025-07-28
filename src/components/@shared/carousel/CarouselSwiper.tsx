import { MutableRefObject } from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import DetailLinkButton from '@/components/homePage/DetailLinkButton';
import { CarouselDTO } from '@/types/home/home.type';

interface CarouselSwiperProps {
  carouselList: CarouselDTO[];
  imageWidth: number;
  imageHeight: number;
  delayTime: number;
  className?: string;
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
  className,
  type,
  setActiveSwiper,
}: CarouselSwiperProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={15}
      autoplay={{ delay: delayTime }}
      onSwiper={(swiper: SwiperType) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper: SwiperType) => {
        setActiveSwiper(swiper.activeIndex);
      }}
      className="overflow-hidden rounded-[30px]"
    >
      {carouselList.map((list, index) => (
        <SwiperSlide key={index} className={className}>
          {type === 'top' ? (
            <div className="mt-3 flex flex-col gap-3">
              <p className="text-base font-normal tracking-[-2.5%] text-white">
                {list.name}
              </p>
              <DetailLinkButton
                list={list}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
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
              unoptimized
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
