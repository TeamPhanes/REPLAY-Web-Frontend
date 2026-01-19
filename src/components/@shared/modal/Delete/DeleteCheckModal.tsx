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
      className="rounded-[30px] bg-white px-10 py-5"
    >
      <p className="text-2xl font-semibold text-basefont">{children}</p>
      <div className="mt-5 flex justify-between gap-2">
        <button
          type="button"
          className="w-full rounded-2xl bg-mainBlue px-[10px] py-3 hover:bg-mainBlueHover"
          onClick={() => mutate()}
        >
          확인
        </button>
        <button
          type="button"
          className="w-full rounded-2xl bg-mainPurple px-[10px] py-3 hover:bg-mainPurpleHover"
          onClick={closeModal}
        >
          취소
        </button>
      </div>
    </Modal>
  );
}
