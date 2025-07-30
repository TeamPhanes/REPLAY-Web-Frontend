import Carousel from '@/components/@shared/carousel/Carousel';
import { CarouselDTO } from '@/types/home/home.type';

interface BottomCarouselProps {
  title: string;
  list: CarouselDTO[];
  delayTime: number;
}

export default function BottomCarousel({
  title,
  list,
  delayTime,
}: BottomCarouselProps) {
  return (
    <div className="relative mt-10 md:mt-16 flex flex-col gap-6">
      <h2 className="text-3xl md:text-[32px]/[42px] font-semibold tracking-[-2.5%] text-white">
        {title}
      </h2>
      <Carousel
        carouselList={list}
        width={1280}
        imageWidth={244}
        imageHeight={244}
        buttonSize={24}
        className="!w-[244px]"
        delayTime={delayTime}
        perView={5}
      />
    </div>
  );
}
