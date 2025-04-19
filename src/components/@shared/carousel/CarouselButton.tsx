import { MutableRefObject } from 'react';
import Image from 'next/image';
import { SwiperClass } from 'swiper/react';
import ChevronLeft from '@/public/icons/home/chevron_left.svg';
import ChevronRight from '@/public/icons/home/chevron_right.svg';

interface CarouselButtonProps {
  buttonSize: number;
  activeSwiper: number;
  listLength: number;
  perView: number;
  swiperRef: MutableRefObject<SwiperClass | undefined>;
}

export default function CarouselButton({
  buttonSize,
  activeSwiper,
  listLength,
  perView,
  swiperRef,
}: CarouselButtonProps) {
  return (
    <>
      <button
        type="button"
        style={{ left: `-${buttonSize}px` }}
        className={`absolute top-1/2 z-10 -translate-y-1/2 transition-opacity duration-500 active:scale-75 ${
          activeSwiper === 0 ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <Image
          src={ChevronLeft}
          alt="왼쪽 버튼"
          width={buttonSize}
          height={buttonSize}
          style={{
            width: `${buttonSize}px`,
            height: `${buttonSize}px`,
          }}
        />
      </button>
      <button
        type="button"
        style={{ right: `-${buttonSize}px` }}
        className={`absolute top-1/2 z-10 -translate-y-1/2 transition-opacity duration-500 active:scale-75 ${
          activeSwiper === listLength - perView
            ? 'pointer-events-none opacity-0'
            : 'opacity-100'
        }`}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Image
          src={ChevronRight}
          alt="오른쪽 버튼"
          width={buttonSize}
          height={buttonSize}
          style={{
            width: `${buttonSize}px`,
            height: `${buttonSize}px`,
          }}
        />
      </button>
    </>
  );
}
