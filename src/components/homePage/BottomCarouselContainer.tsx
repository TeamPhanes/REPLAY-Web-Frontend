import { popularList, newList } from '@/src/data/home/homeBottomCarouselList';
import BottomCarousel from '@/components/homePage/BottomCarousel';

export default function BottomCarouselContainer() {
  return (
    <>
      <BottomCarousel
        title="전국 인기 방탈출"
        list={popularList}
        delayTime={12000}
      />
      <BottomCarousel
        title="전국 신규 방탈출"
        list={newList}
        delayTime={14000}
      />
    </>
  );
}
