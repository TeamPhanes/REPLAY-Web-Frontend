import { useEffect, useState } from 'react';
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
import AddGatheringSearchBar from '../AddGathering/AddGatheringSearchBar';

interface PatchGatheringModalProps {
  isOpen: boolean;
  onClose: () => void;
  themeNameProps: string;
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
  themeNameProps,
  defaultValues,
}: PatchGatheringModalProps) {
  const { id } = useParams();
  const [search, setSearch] = useState(themeNameProps ?? '');
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
      className="w-[1064px] rounded-lg bg-[#F7F7FB] p-8"
    >
      <h2 className="mb-[60px] mt-7 text-center text-[28px]/[38px] font-semibold tracking-[-2.5%] text-font-baseBlack">
        모임 수정
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <div className="flex w-[454px] flex-col gap-2">
            <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-font-baseBlack">
              모임 정보
            </p>
            <AddGatheringSearchBar
              search={search}
              searchChange={setSearch}
              themeId={watch('themeId')}
              themeIdChange={(themeId) =>
                setValue('themeId', themeId, {
                  shouldValidate: true,
                })
              }
              register={register}
              errors={errors}
              disabled
            />
            <AddGatheringNameInput
              name={watch('name')}
              nameChange={(name) =>
                setValue('name', name, { shouldValidate: true })
              }
              register={register}
              errors={errors}
            />
          </div>

          <div className="flex w-[480px] flex-col gap-5">
            <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-font-baseBlack">
              모임 상세
            </p>
            <div className="flex justify-between">
              <AddGatheringCapacity
                capacity={watch('capacity')}
                capacityChange={(capacity) => setValue('capacity', capacity)}
              />
              <AddGatheringPrice
                priceType={watch('isIndividual')}
                priceTypeChange={(isIndividual) =>
                  setValue('isIndividual', isIndividual, {
                    shouldValidate: true,
                  })
                }
                price={watch('price')}
                priceChange={(price) =>
                  setValue('price', price, { shouldValidate: true })
                }
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-between">
          <div className="flex w-[454px] flex-col gap-5">
            <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-font-baseBlack">
              일정 선택
            </p>
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
            <AddGatheringSchedule
              dateTime={watch('dateTime')}
              dateTimeChange={(dateTime) => setValue('dateTime', dateTime)}
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
        </div>

        <AddGatheringButton onClose={onClose} />
      </form>
    </Modal>
  );
}
