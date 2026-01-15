import { MutableRefObject } from 'react';
import Image from 'next/image';
import { SwiperClass } from 'swiper/react';
import ChevronLeft from '@/public/icons/arrow/chevron_left.svg';
import ChevronRight from '@/public/icons/arrow/chevron_right.svg';

interface CarouselButtonProps {
  buttonSize: number;
  activeSwiper: number;
  listLength: number;
  perView: number;
  position: number;
  swiperRef: MutableRefObject<SwiperClass | undefined>;
}

export default function CarouselButton({
  buttonSize,
  activeSwiper,
  listLength,
  perView,
  position,
  swiperRef,
}: CarouselButtonProps) {
  return (
    <>
      <button
        type="button"
        style={{ left: `${position}px` }}
        className={`absolute hidden xl:block top-1/2 z-10 -translate-y-1/2 transition-opacity duration-500 active:scale-90 rounded-[4px] p-2 bg-button-carousel/60 ${
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
        style={{ right: `${position}px` }}
        className={`absolute hidden xl:block top-1/2 z-10 -translate-y-1/2 transition-opacity duration-500 active:scale-90 rounded-[4px] p-2 bg-button-carousel/60 ${
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
