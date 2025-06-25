import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import AddGatheringButton from '@/components/@shared/modal/AddGathering/AddGatheringButton';
import AddGatheringCapacity from '@/components/@shared/modal/AddGathering/AddGatheringCapacity';
import AddGatheringNameInput from '@/components/@shared/modal/AddGathering/AddGatheringNameInput';
import AddGatheringPrice from '@/components/@shared/modal/AddGathering/AddGatheringPrice';
import AddGatheringRecruitmentPeriod from '@/components/@shared/modal/AddGathering/AddGatheringRecruitmentPeriod';
import AddGatheringSchedule from '@/components/@shared/modal/AddGathering/AddGatheringSchedule';
import AddGatheringWrite from '@/components/@shared/modal/AddGathering/AddGatheringWrite';
import Modal from '@/components/@shared/modal/Modal';
import usePatchGatheringForm from '@/hooks/form/usePatchGatheringForm';
import { usePatchGathering } from '@/hooks/reactQuery/usePatchGathering';

interface PatchGatheringModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultValues: {
    name: string;
    themeId: number;
    content: string;
    isIndividual: string;
    price: number;
    dateTime: Date;
    registrationStart: Date;
    registrationEnd: Date;
    capacity: number;
  };
}

export default function PatchGatheringModal({
  isOpen,
  onClose,
  defaultValues,
}: PatchGatheringModalProps) {
  const { id } = useParams();
  const { mutate } = usePatchGathering(Number(id));
  const {
    register,
    handleSubmit,
    onSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = usePatchGatheringForm({
    mutate,
    onClose,
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-white rounded-[30px] py-10 px-[72px] w-[726px]"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddGatheringNameInput
          name={watch('name')}
          nameChange={(name) =>
            setValue('name', name, { shouldValidate: true })
          }
          register={register}
          errors={errors}
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
            priceChange={(price) =>
              setValue('price', price, { shouldValidate: true })
            }
            register={register}
            errors={errors}
          />
        </div>
        <AddGatheringWrite
          content={watch('content')}
          contentChange={(content) =>
            setValue('content', content, { shouldValidate: true })
          }
          register={register}
          errors={errors}
        />
        <AddGatheringButton onClose={onClose} />
      </form>
    </Modal>
  );
}
