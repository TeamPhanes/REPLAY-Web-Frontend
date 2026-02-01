import { useEffect, useState } from 'react';
import AddGatheringButton from '@/components/@shared/modal/AddGathering/AddGatheringButton';
import AddGatheringCapacity from '@/components/@shared/modal/AddGathering/AddGatheringCapacity';
import AddGatheringNameInput from '@/components/@shared/modal/AddGathering/AddGatheringNameInput';
import AddGatheringPrice from '@/components/@shared/modal/AddGathering/AddGatheringPrice';
import AddGatheringRecruitmentPeriod from '@/components/@shared/modal/AddGathering/AddGatheringRecruitmentPeriod';
import AddGatheringSchedule from '@/components/@shared/modal/AddGathering/AddGatheringSchedule';
import AddGatheringSearchBar from '@/components/@shared/modal/AddGathering/AddGatheringSearchBar';
import AddGatheringWrite from '@/components/@shared/modal/AddGathering/AddGatheringWrite';
import Modal from '@/components/@shared/modal/Modal';
import usePostGatheringForm from '@/hooks/form/usePostGatheringForm';
import { usePostGathering } from '@/hooks/reactQuery/usePostGathering';
import MainBlueButton from '../../button/MainBlueButton';
import MainWhiteButton from '../../button/MainWhiteButton';

interface AddGatheringModalProps {
  isOpen: boolean;
  onClose: () => void;
  themeNameProps?: string;
  themeIdProps?: number;
}

export default function AddGatheringModal({
  isOpen,
  onClose,
  themeNameProps,
  themeIdProps,
}: AddGatheringModalProps) {
  const [search, setSearch] = useState(themeNameProps ?? '');
  const [mobilePage, setMobilePage] = useState(0);
  const { mutate } = usePostGathering();
  const {
    register,
    handleSubmit,
    onSubmit,
    watch,
    setValue,
    formState: { errors },
  } = usePostGatheringForm(mutate, onClose);

  useEffect(() => {
    if (isOpen && themeIdProps) {
      setValue('themeId', themeIdProps, { shouldValidate: true });
    }
  }, [isOpen, themeIdProps, setValue]);

  useEffect(() => {
    if (isOpen) {
      setMobilePage(0);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="relative w-[1064px] rounded-lg bg-[#F7F7FB] p-4 xl:p-8"
    >
      <h2 className="mb-[60px] mt-7 text-center text-[28px]/[38px] font-semibold tracking-[-2.5%] text-font-baseBlack">
        모임 생성
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center gap-5 md:justify-between">
          <div
            className={`${mobilePage !== 0 ? 'hidden' : ''} flex w-full flex-col justify-between gap-2 md:w-[454px]`}
          >
            <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-font-baseBlack">
              모임 정보
            </p>
            <AddGatheringSearchBar
              search={search}
              searchChange={setSearch}
              themeId={themeIdProps ?? watch('themeId')}
              themeIdChange={(themeId) =>
                setValue('themeId', themeId, {
                  shouldValidate: true,
                })
              }
              register={register}
              errors={errors}
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

          <div
            className={`${mobilePage !== 1 ? 'hidden md:flex' : ''} flex-col gap-5 md:w-[480px]`}
          >
            <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-font-baseBlack">
              모임 상세
            </p>
            <div className="mt-6 flex flex-col items-start justify-between gap-5 md:mt-0 xl:flex-row xl:gap-2">
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

        <div className="flex justify-center gap-5 md:mt-20 md:justify-between">
          <div
            className={`${mobilePage !== 1 ? 'hidden md:flex' : ''} mt-10 shrink-0 flex-col gap-5 md:mt-0 md:w-full md:shrink`}
          >
            <p className="mb-6 text-2xl/[34px] font-normal tracking-[-2.5%] text-font-baseBlack md:mb-0">
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
          <div
            className={`${mobilePage !== 2 ? 'hidden md:flex' : ''} w-full flex-col gap-5 xl:w-[480px]`}
          >
            <AddGatheringWrite
              content={watch('content')}
              contentChange={(content) =>
                setValue('content', content, { shouldValidate: true })
              }
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="my-7 flex justify-center gap-2 md:hidden">
          <MainWhiteButton
            className={`${mobilePage === 0 ? 'hidden' : ''} min-w-40 !text-base`}
            onClick={() => setMobilePage((prev) => prev - 1)}
          >
            이전으로
          </MainWhiteButton>
          <MainBlueButton
            className={`${mobilePage === 2 ? 'hidden' : ''} min-w-40 !text-base`}
            onClick={() => setMobilePage((prev) => prev + 1)}
          >
            다음으로
          </MainBlueButton>
          <MainBlueButton
            className={`${mobilePage !== 2 ? 'hidden' : ''} min-w-40 !text-base`}
            type="submit"
          >
            등록하기
          </MainBlueButton>
        </div>
        <div className="mt-14 hidden justify-center gap-2 md:flex">
          <AddGatheringButton onClose={onClose} />
        </div>
      </form>
    </Modal>
  );
}
