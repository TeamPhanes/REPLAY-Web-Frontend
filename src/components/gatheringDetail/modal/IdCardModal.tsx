import Modal from '@/components/@shared/modal/Modal';
import IdCardBack from '@/components/gatheringDetail/modal/IdCardBack';
import IdCardFront from '@/components/gatheringDetail/modal/IdCardFront';
import IdCardModalContainer from '@/components/gatheringDetail/modal/IdCardModalContainer';
import { OtherUserDTO } from '@/types/user/user.types';

interface IdCardModalProps {
  openModal: boolean;
  closeModal: () => void;
  userData: OtherUserDTO['get'];
}

export default function IdCardModal({
  openModal,
  closeModal,
  userData,
}: IdCardModalProps) {
  return (
    <Modal
      isOpen={openModal}
      onClose={closeModal}
      className="scrollbar-x-hidden cursor-pointer rounded-[30px] perspective-1000"
    >
      <IdCardModalContainer>
        <IdCardFront userData={userData} />
        <IdCardBack userData={userData} />
      </IdCardModalContainer>
    </Modal>
  );
}
