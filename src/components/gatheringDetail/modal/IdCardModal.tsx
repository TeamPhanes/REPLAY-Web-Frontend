import Modal from '@/components/@shared/modal/Modal';
import IdCardBack from '@/components/gatheringDetail/modal/IdCardBack';
import IdCardFront from '@/components/gatheringDetail/modal/IdCardFront';
import IdCardModalContainer from '@/components/gatheringDetail/modal/IdCardModalContainer';
import { UserDTO } from '@/types/user/user.types';

interface IdCardModalProps {
  openModal: boolean;
  closeModal: () => void;
  userData: UserDTO['get'];
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
      customDimStyle="perspective-1000 rounded-[30px] cursor-pointer"
    >
      <IdCardModalContainer>
        <IdCardFront userData={userData} />
        <IdCardBack userData={userData} />
      </IdCardModalContainer>
    </Modal>
  );
}
