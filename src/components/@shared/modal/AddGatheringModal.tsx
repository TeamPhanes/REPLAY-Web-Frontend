import AddGatheringButton from '@/components/@shared/modal/AddGatheringButton';
import AddGatheringLocation from '@/components/@shared/modal/AddGatheringLocation';
import AddGatheringNameInput from '@/components/@shared/modal/AddGatheringNameInput';
import AddGatheringRecruitmentPeriod from '@/components/@shared/modal/AddGatheringRecruitmentPeriod';
import AddGatheringValues from '@/components/@shared/modal/AddGatheringValues';
import AddGatheringWrite from '@/components/@shared/modal/AddGatheringWrite';
import Modal from '@/components/@shared/modal/Modal';
import SearchBar from '@/components/@shared/search/SearchBar';

interface AddGatheringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddGatheringModal({
  isOpen,
  onClose,
}: AddGatheringModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      customDimStyle="bg-white rounded-[30px] py-10 px-[72px] w-[726px]"
    >
      <AddGatheringLocation />
      <SearchBar type="dark" />
      <AddGatheringNameInput />
      <AddGatheringRecruitmentPeriod />
      <AddGatheringValues />
      <AddGatheringWrite />
      <AddGatheringButton onClose={onClose} />
    </Modal>
  );
}
