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
    <div className="flex flex-col">
      <p className="font-medium text-xl md:text-2xl/[34px] tracking-[-2.5%] text-basefont">
        가격
      </p>
      <div className="flex items-centers gap-2">
        <div className="rounded-full bg-card py-2 px-4 mt-3 flex items-center justify-center gap-1">
          <p className="font-normal text-xl tracking-[-2.5%] text-basefont">
            {priceType}
          </p>
          <Dropdown
            list={priceTypeList}
            isOpen={isOpen}
            selected={priceType}
            onOpenChange={toggleOpen}
            onClickHandler={priceTypeChange}
            className="min-w-[124px]"
            marginTop={14}
            align="center"
          >
            <button
              type="button"
              className="flex items-center"
              onClick={toggleOpen}
            >
              <Image
                src="/icons/modal/black_chevron_down.svg"
                alt="가격 버튼"
                width={20}
                height={20}
                className={`transition-transform transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          </Dropdown>
        </div>
        <div className="relative">
          <input
            type="hidden"
            {...register('price', {
              valueAsNumber: true,
              validate: (value) => value !== 0 || '가격 입력은 필수입니다.',
            })}
            value={price}
          />
          <input
            type="text"
            value={price.toLocaleString()}
            className={`${errors.price ? 'border-error' : 'border-card'} rounded-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont mt-3 max-w-[130px] border-[1px]`}
            onChange={priceChangeHandler}
          />
          <p className="absolute font-normal text-xl tracking-[-2.5%] text-basefont right-4 top-5">
            원
          </p>
          {errors.price && (
            <p className="text-red-500 text-sm mt-1 absolute bottom--5 w-36">
              {errors.price.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
