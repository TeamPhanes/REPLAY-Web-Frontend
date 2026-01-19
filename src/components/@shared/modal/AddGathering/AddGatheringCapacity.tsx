import Image from 'next/image';
import ValueDropdown from '@/components/@shared/dropdown/ValueDropdown';
import { useOpen } from '@/hooks/useOpen';

interface AddGatheringCapacityProps {
  capacity: number;
  capacityChange: (value: number) => void;
}

export default function AddGatheringCapacity({
  capacity,
  capacityChange,
}: AddGatheringCapacityProps) {
  const capacityList = [2, 3, 4, 5, 6];
  const { isOpen, toggleOpen } = useOpen();

  return (
    <div className="flex flex-col">
      <p className="text-center text-base font-normal tracking-[-2.5%] text-font-baseBlack">
        모임 인원
      </p>
      <div className="flex items-center justify-center gap-1 border-b-[1px] border-line-secondDarkGray px-1 py-[6px]">
        <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
          {String(capacity).padStart(2, '0')} 명
        </p>
        <ValueDropdown
          list={capacityList}
          isOpen={isOpen}
          selected={capacity}
          onOpenChange={toggleOpen}
          onClickHandler={capacityChange}
          className="absolute left-[-48px] min-w-[70px]"
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
              alt="모임 인원 버튼"
              width={18}
              height={18}
              className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>
        </ValueDropdown>
      </div>
    </div>
  );
}
