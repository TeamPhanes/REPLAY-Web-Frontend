'use client';

import Image from 'next/image';
import ValueDropdown from '@/components/@shared/dropdown/ValueDropdown';
import { useOpen } from '@/hooks/useOpen';
import GrayChevronDown from '@/public/icons/arrow/chevron_gray_down.svg';

interface SortDropdownProps {
  sort: string;
  sortList: string[];
  sortChange: (value: string) => void;
}

export default function SortDropdown({
  sort,
  sortList,
  sortChange,
}: SortDropdownProps) {
  const { isOpen, toggleOpen } = useOpen();
  return (
    <ValueDropdown
      list={sortList}
      isOpen={isOpen}
      onOpenChange={toggleOpen}
      onClickHandler={sortChange}
      className="min-w-28"
      marginTop={14}
    >
      <button
        type="button"
        className="flex gap-1 items-center border-b-[1px] border-line-secondLightGray py-[6px] px-1"
      >
        <p className="text-sm font-normal text-font-thirdWhite">{sort}</p>
        <Image
          src={GrayChevronDown}
          alt="정렬 더보기"
          width={18}
          height={18}
          className={`h-[18px] w-[18px] transition-transform transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
    </ValueDropdown>
  );
}
