import { CarouselDTO } from '@/types/home/home.type';
import Carousel from '../@shared/carousel/Carousel';
import Modal from '../@shared/modal/Modal';

interface ImageCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  list: CarouselDTO[];
}

export default function ImageCardModal({
  isOpen,
  onClose,
  list,
}: ImageCardModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="!max-h-[280px] !max-w-[280px] md:!max-h-[700px] md:!max-w-[700px] xl:!max-h-[780px] xl:!max-w-[780px]"
    >
      <Carousel
        carouselList={list}
        imageWidth={780}
        imageHeight={780}
        buttonSize={24}
        className="!max-h-[280px] !max-w-[280px] md:!max-h-[700px] md:!max-w-[700px] xl:!max-h-[780px] xl:!max-w-[780px]"
        buttonPosition={20}
        delayTime={100000}
        loop={false}
        center
      />
    </Modal>
  );
}
