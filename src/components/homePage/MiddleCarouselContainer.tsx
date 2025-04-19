import { homeMiddleCarouselList } from '@/data/home/homeMiddleCarouselList';
import Carousel from '@/components/@shared/carousel/Carousel';

export default function MiddleCarouselContainer() {
  return (
    <div className="mt-16">
      <Carousel
        carouselList={homeMiddleCarouselList}
        width={1280}
        imageWidth={1280}
        imageHeight={480}
        buttonSize={48}
        delayTime={10000}
      />
    </div>
  );
}
