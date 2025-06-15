import { ReactNode } from 'react';
import Modal from '@/components/@shared/modal/Modal';

interface DeleteCheckModalProps {
  isOpen: boolean;
  closeModal: () => void;
  mutate: () => void;
  children: ReactNode;
}

export default function DeleteCheckModal({
  isOpen,
  closeModal,
  mutate,
  children,
}: DeleteCheckModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      className="bg-white rounded-[30px] px-10 py-5"
    >
      <p className="font-semibold text-2xl text-basefont">{children}</p>
      <div className="flex justify-between gap-2 mt-5">
        <button
          type="button"
          className="rounded-2xl bg-mainBlue px-[10px] py-3 hover:bg-mainBlueHover w-full"
          onClick={() => mutate()}
        >
          확인
        </button>
        <button
          type="button"
          className="rounded-2xl bg-mainPurple px-[10px] py-3 hover:bg-mainPurpleHover w-full"
          onClick={closeModal}
        >
          취소
        </button>
      </div>
    </Modal>
  );
}
