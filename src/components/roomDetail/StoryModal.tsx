import Image from 'next/image';
import Modal from '@/components/@shared/modal/Modal';
import chevron_black_down from '@/public/icons/arrow/chevron_black_down.svg';

interface StroyModalProps {
  isOpen: boolean;
  closeModal: () => void;
  story: string;
}

export default function StroyModal({
  isOpen,
  closeModal,
  story,
}: StroyModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      className="bg-card-white rounded-[4px] px-6 py-3 md:w-[453px]"
    >
      <div className="relative flex flex-col items-center justify-center gap-3">
        <p className="text-xl text-font-baseBlack font-normal">스토리</p>
        <p className="text-sm text-font-baseBlack font-normal">{story}</p>
        <button
          type="button"
          onClick={closeModal}
          className="flex items-center"
        >
          <p className="text-sm text-font-baseBlack font-normal">닫기</p>
          <Image
            src={chevron_black_down}
            alt="닫기 아이콘"
            width={18}
            height={18}
            className="rotate-180"
          />
        </button>
      </div>
    </Modal>
  );
}
