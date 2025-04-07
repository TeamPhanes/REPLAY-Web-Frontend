import { CarouselDTO } from '@/src/types/home/home.type';
import Carousel from '../@shared/carousel/Carousel';

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
    <div className="relative mt-16 flex w-xl flex-col gap-6">
      <h2 className="text-[32px]/[42px] font-semibold tracking-[-2.5%] text-white">
        {title}
      </h2>
      <Carousel
        carouselList={list}
        width={1280}
        imageWidth={244}
        imageHeight={244}
        buttonSize={24}
        delayTime={delayTime}
        perView={5}
      />
    </div>
  );
}
