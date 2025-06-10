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
      <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
        모임 인원
      </p>
      <div className="rounded-full bg-card py-2 px-4 mt-3 flex items-center justify-center gap-1">
        <p className="font-normal text-xl tracking-[-2.5%] text-basefont">
          {String(capacity).padStart(2, '0')}
        </p>
        <ValueDropdown
          list={capacityList}
          isOpen={isOpen}
          onOpenChange={toggleOpen}
          onClickHandler={capacityChange}
          className="min-w-[88px] absolute left-[-48px]"
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
              width={20}
              height={20}
              className={`transition-transform transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>
        </ValueDropdown>
      </div>
    </div>
  );
}
