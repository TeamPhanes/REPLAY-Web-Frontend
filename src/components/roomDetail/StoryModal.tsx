import Modal from '@/components/@shared/modal/Modal';

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
      className="bg-card rounded-[30px]"
    >
      <div className="m-5 md:w-[655px]">
        <div className="relative my-6 flex items-center justify-center">
          <div className="w-[169px] border-t border-black" />
          <p className="min-w-[90px] text-center text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
            스토리
          </p>
          <div className="w-[169px] border-t border-black" />
        </div>
        <p className="text-base font-normal tracking-[-2.5%] text-basefont">
          {story}
        </p>
      </div>
    </Modal>
  );
}
