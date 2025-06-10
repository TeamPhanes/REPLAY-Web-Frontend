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
        className="bg-mainBlue rounded-full w-20 h-20 flex justify-center items-center fixed right-4 bottom-4"
        onClick={openModal}
      >
        <Image
          src={WhitePencil}
          alt="모임 생성"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </button>
      <AddGatheringModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
