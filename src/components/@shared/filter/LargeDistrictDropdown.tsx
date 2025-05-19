import Image from 'next/image';
import ValueDropdown from '@/components/@shared/dropdown/ValueDropdown';
import { useOpen } from '@/hooks/useOpen';
import BlackChevronDown from '@/public/icons/filter/black_chevron_down.svg';

interface LargeDistrictDropdownProps {
  largeDistrict: string;
  setLargeDistrict: (value: string) => void;
  list: string[];
}

export default function LargeDistrictDropdown({
  largeDistrict,
  setLargeDistrict,
  list,
}: LargeDistrictDropdownProps) {
  const { isOpen, toggleOpen } = useOpen();
  return (
    <ValueDropdown
      list={list}
      isOpen={isOpen}
      onOpenChange={toggleOpen}
      onClickHandler={setLargeDistrict}
      className="min-w-[412px] grid grid-cols-4 p-2"
      marginTop={14}
      align="start"
    >
      <button
        type="button"
        className="flex items-center justify-center gap-1 rounded-full bg-card px-4 py-2"
      >
        <p className="text-base font-medium tracking-[-2.5%] text-basefont">
          {largeDistrict}
        </p>
        <Image
          src={BlackChevronDown}
          alt="더보기"
          width={20}
          height={20}
          className={`h-5 w-5 transition-transform transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
    </ValueDropdown>
  );
}
