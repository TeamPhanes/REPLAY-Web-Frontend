import Image from 'next/image';
import Dropdown from '@/components/@shared/dropdown/ValueDropdown';
import { useOpen } from '@/hooks/useOpen';

interface AddGatheringPriceProps {
  priceType: string;
  priceTypeChange: (value: string) => void;
  price: number;
  priceChange: (value: number) => void;
}

export default function AddGatheringPrice({
  priceType,
  priceTypeChange,
  price,
  priceChange,
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
      <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
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
            type="text"
            value={price.toLocaleString()}
            className="rounded-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont mt-3 max-w-[130px]"
            onChange={priceChangeHandler}
          />
          <p className="absolute font-normal text-xl tracking-[-2.5%] text-basefont right-4 top-5">
            원
          </p>
        </div>
      </div>
    </div>
  );
}
