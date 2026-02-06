import { FieldErrors, UseFormRegister } from 'react-hook-form';
import Image from 'next/image';
import Dropdown from '@/components/@shared/dropdown/ValueDropdown';
import { useOpen } from '@/hooks/useOpen';

interface FormValues {
  name: string;
  themeId: number;
  content: string;
  isIndividual: string;
  price: number;
  dateTime: Date;
  registrationStart: Date;
  registrationEnd: Date;
  capacity: number;
}

interface AddGatheringPriceProps {
  priceType: string;
  priceTypeChange: (value: string) => void;
  price: number;
  priceChange: (value: number) => void;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export default function AddGatheringPrice({
  priceType,
  priceTypeChange,
  price,
  priceChange,
  register,
  errors,
}: AddGatheringPriceProps) {
  const priceTypeList = ['인당', '총액'];
  const { isOpen, toggleOpen } = useOpen();

  const priceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replaceAll(',', '');
    let numericValue = Number(inputValue);

    if (Number.isNaN(numericValue)) {
      priceChange(0);
    } else {
      if (numericValue > 999999) numericValue = 999999;
      priceChange(numericValue);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
        모임 가격
      </p>
      <div className="items-centers flex justify-between gap-2">
        <div className="flex shrink-0 items-center justify-center gap-1 border-b-[1px] border-line-secondDarkGray px-1 py-[6px]">
          <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
            {priceType}
          </p>
          <Dropdown
            list={priceTypeList}
            isOpen={isOpen}
            selected={priceType}
            onOpenChange={toggleOpen}
            onClickHandler={priceTypeChange}
            className="absolute left-[-40px] min-w-[60px]"
            marginTop={14}
            align="start"
          >
            <button
              type="button"
              className="flex items-center"
              onClick={toggleOpen}
            >
              <Image
                src="/icons/modal/black_chevron_down.svg"
                alt="가격 버튼"
                width={18}
                height={18}
                className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          </Dropdown>
        </div>
        <div
          className={`${errors.price ? 'border-error' : 'border-line-secondDarkGray'} relative flex items-center gap-[6px] border-b-[1px] px-4 py-[6px]`}
        >
          <input
            type="hidden"
            {...register('price', {
              valueAsNumber: true,
              validate: (value) => value !== 0 || '가격 입력은 필수입니다.',
            })}
            value={price}
          />
          <Image
            src="/icons/pencil/dark_pencil.svg"
            alt="연필 아이콘"
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder="가격을 입력해 주세요."
            value={price.toLocaleString() === '0' ? '' : price.toLocaleString()}
            className="bg-[#F7F7FB] text-base font-normal text-font-baseBlack placeholder:text-font-disabled"
            onChange={priceChangeHandler}
          />
          <p className="absolute right-4 top-[6px] text-base font-normal text-font-baseBlack">
            원
          </p>
          {errors.price && (
            <p className="absolute -bottom-6 mt-1 w-36 text-sm text-red-500">
              {errors.price.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
