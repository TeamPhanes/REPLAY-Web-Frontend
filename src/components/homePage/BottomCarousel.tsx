import Carousel from '@/components/@shared/carousel/Carousel';
import { CarouselDTO } from '@/types/home/home.type';

interface BottomCarouselProps {
  gap?: string;
  title: string;
  list: CarouselDTO[];
  delayTime: number;
}

export default function BottomCarousel({
  gap = '',
  title,
  list,
  delayTime,
}: BottomCarouselProps) {
  return (
    <div className={`${gap} relative mt-10 flex flex-col gap-4 md:mt-24`}>
      <h2 className="text-xl font-semibold tracking-[-2.5%] text-white md:text-2xl">
        {title}
      </h2>
      <Carousel
        carouselList={list}
        imageWidth={173}
        imageHeight={260}
        buttonSize={24}
        className="!w-[173px]"
        delayTime={delayTime}
        perView={7}
        buttonPosition={-6}
      />
    </div>
  );
}
