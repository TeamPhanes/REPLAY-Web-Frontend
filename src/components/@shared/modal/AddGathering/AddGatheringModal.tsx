import { useState } from 'react';
import AddGatheringButton from '@/components/@shared/modal/AddGathering/AddGatheringButton';
import AddGatheringCapacity from '@/components/@shared/modal/AddGathering/AddGatheringCapacity';
import AddGatheringLocation from '@/components/@shared/modal/AddGathering/AddGatheringLocation';
import AddGatheringNameInput from '@/components/@shared/modal/AddGathering/AddGatheringNameInput';
import AddGatheringPrice from '@/components/@shared/modal/AddGathering/AddGatheringPrice';
import AddGatheringRecruitmentPeriod from '@/components/@shared/modal/AddGathering/AddGatheringRecruitmentPeriod';
import AddGatheringSchedule from '@/components/@shared/modal/AddGathering/AddGatheringSchedule';
import AddGatheringSearchBar from '@/components/@shared/modal/AddGathering/AddGatheringSearchBar';
import AddGatheringWrite from '@/components/@shared/modal/AddGathering/AddGatheringWrite';
import Modal from '@/components/@shared/modal/Modal';
import usePostGatheringForm from '@/hooks/form/usePostGatheringForm';
import { usePostGathering } from '@/hooks/reactQuery/usePostGathering';

interface AddGatheringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddGatheringModal({
  isOpen,
  onClose,
}: AddGatheringModalProps) {
  const [search, setSearch] = useState('');
  const { mutate } = usePostGathering();
  const {
    register,
    handleSubmit,
    onSubmit,
    watch,
    setValue,
    formState: { errors },
  } = usePostGatheringForm(mutate, onClose);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-white rounded-[30px] py-10 px-[72px] w-[726px]"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddGatheringLocation />
        <AddGatheringSearchBar
          search={search}
          searchChange={setSearch}
          themeId={watch('themeId')}
          themeIdChange={(themeId) => setValue('themeId', themeId)}
        />
        <AddGatheringNameInput
          name={watch('name')}
          nameChange={(name) => setValue('name', name)}
        />
        <AddGatheringRecruitmentPeriod
          registrationStart={watch('registrationStart')}
          registrationStartChange={(registrationStart) =>
            setValue('registrationStart', registrationStart)
          }
          registrationEnd={watch('registrationEnd')}
          registrationEndChange={(registrationEnd) =>
            setValue('registrationEnd', registrationEnd)
          }
        />
        <div className="flex justify-between mt-8">
          <AddGatheringSchedule
            dateTime={watch('dateTime')}
            dateTimeChange={(dateTime) => setValue('dateTime', dateTime)}
          />
          <AddGatheringCapacity
            capacity={watch('capacity')}
            capacityChange={(capacity) => setValue('capacity', capacity)}
          />
          <AddGatheringPrice
            priceType={watch('isIndividual')}
            priceTypeChange={(isIndividual) =>
              setValue('isIndividual', isIndividual)
            }
            price={watch('price')}
            priceChange={(price) => setValue('price', price)}
          />
        </div>
        <AddGatheringWrite
          content={watch('content')}
          contentChange={(content) => setValue('content', content)}
        />
        <AddGatheringButton onClose={onClose} />
      </form>
    </Modal>
  );
}
