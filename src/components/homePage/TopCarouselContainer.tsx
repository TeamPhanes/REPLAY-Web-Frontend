import { homeTopCarouselList } from '@/data/home/homeTopCarouselList';
import Carousel from '@/components/@shared/carousel/Carousel';

export default function TopCarouselContainer() {
  return (
    <div className="absolute hidden right-0 top-36 md:flex h-[512px] w-[356px] md:flex-col items-center rounded-[28px] bg-homeCard p-7 text-center">
      <h2 className="text-2xl/[34px] font-semibold tracking-[-2.5%]">
        한국 방탈출 협회 어워즈 수상작
      </h2>
      <div className="w-[260px]">
        <Carousel
          carouselList={homeTopCarouselList}
          width={260}
          imageWidth={260}
          imageHeight={353}
          buttonSize={24}
          type="top"
        />
      </div>
    </div>
  );
}
