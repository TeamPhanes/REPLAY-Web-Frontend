import { useState } from 'react';
import AddGatheringButton from '@/components/@shared/modal/AddGatheringButton';
import AddGatheringLocation from '@/components/@shared/modal/AddGatheringLocation';
import AddGatheringNameInput from '@/components/@shared/modal/AddGatheringNameInput';
import AddGatheringRecruitmentPeriod from '@/components/@shared/modal/AddGatheringRecruitmentPeriod';
import AddGatheringValues from '@/components/@shared/modal/AddGatheringValues';
import AddGatheringWrite from '@/components/@shared/modal/AddGatheringWrite';
import Modal from '@/components/@shared/modal/Modal';
import SearchBar from '@/components/@shared/search/SearchBar';
import { yearMonthDayHourTime } from '@/utils/dateChange';

interface AddGatheringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddGatheringModal({
  isOpen,
  onClose,
}: AddGatheringModalProps) {
  const now = new Date();
  const after23Hours = new Date(now);
  after23Hours.setHours(after23Hours.getHours() + 23);
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState(24000);
  const [dateTime, setDateTime] = useState(
    yearMonthDayHourTime(String(tomorrow))
  );
  const [registrationStart, setRegistrationStart] = useState(
    yearMonthDayHourTime(String(now))
  );
  const [registrationEnd, setRegistrationEnd] = useState(
    yearMonthDayHourTime(String(after23Hours))
  );
  const [capacity, setCapacity] = useState(4);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-white rounded-[30px] py-10 px-[72px] w-[726px]"
    >
      <AddGatheringLocation />
      <SearchBar type="dark" />
      <AddGatheringNameInput name={name} nameChange={setName} />
      <AddGatheringRecruitmentPeriod
        registrationStart={registrationStart}
        registrationEnd={registrationEnd}
      />
      <AddGatheringValues
        dateTime={dateTime}
        capacity={capacity}
        price={price}
      />
      <AddGatheringWrite content={content} contentChange={setContent} />
      <AddGatheringButton onClose={onClose} />
    </Modal>
  );
}
