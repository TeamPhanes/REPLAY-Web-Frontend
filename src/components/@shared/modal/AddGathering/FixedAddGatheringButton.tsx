import Image from 'next/image';
import AddGatheringModal from '@/components/@shared/modal/AddGathering/AddGatheringModal';
import { useOpen } from '@/hooks/useOpen';
import WhitePencil from '@/public/icons/mypage/white_pencil.svg';

export default function FixedAddGatheringButton() {
  const { isOpen, openModal, closeModal } = useOpen();
  return (
    <>
      <button
        type="button"
        className="fixed bottom-10 right-10 z-40 rounded-full bg-brand-main500 p-4 shadow-xl"
        onClick={openModal}
      >
        <Image
          src={WhitePencil}
          alt="모임 생성"
          width={32}
          height={32}
          className="h-8 w-8"
        />
      </button>
      <AddGatheringModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
