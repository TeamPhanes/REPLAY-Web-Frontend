import Image from 'next/image';
import Link from 'next/link';
import AddGatheringModal from '@/components/@shared/modal/AddGathering/AddGatheringModal';
import { useOpen } from '@/hooks/useOpen';
import WhiteMap from '@/public/icons/map/map_white_icon.svg';
import WhitePencil from '@/public/icons/mypage/white_pencil.svg';

export default function FixedAddGatheringButton() {
  const { isOpen, openModal, closeModal } = useOpen();
  return (
    <div className="flex flex-col absolute -right-24">
      <Link
        href="/gathering-map"
        className="rounded-t-full bg-brand-main500 p-6"
      >
        <Image
          src={WhiteMap}
          alt="모임 지도로 보기"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </Link>
      <span className="w-3/4 h-[1px] bg-font-thirdWhite absolute top-1/2 left-1/2 -translate-x-1/2" />
      <button
        type="button"
        className="bg-mainBlue rounded-b-full p-6"
        onClick={openModal}
      >
        <Image
          src={WhitePencil}
          alt="모임 생성"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </button>
      <AddGatheringModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
