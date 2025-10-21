import Carousel from '@/components/@shared/carousel/Carousel';
import { CarouselDTO } from '@/types/home/home.type';

interface BottomCarouselProps {
  margin?: string;
  title: string;
  list: CarouselDTO[];
  delayTime: number;
}

export default function BottomCarousel({
  margin = '',
  title,
  list,
  delayTime,
}: BottomCarouselProps) {
  return (
    <div className="relative mt-10 md:mt-24 flex flex-col gap-4">
      <h2 className="text-xl md:text-2xl font-semibold tracking-[-2.5%] text-white">
        {title}
      </h2>
      <Carousel
        carouselList={list}
        imageWidth={173}
        imageHeight={260}
        buttonSize={24}
        className={`${margin} !w-[173px]`}
        delayTime={delayTime}
        perView={7}
        buttonPosition={-6}
      />
    </div>
  );
}
