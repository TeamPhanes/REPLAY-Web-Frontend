'use client';

import Image from 'next/image';
import ValueDropdown from '@/components/@shared/dropdown/ValueDropdown';
import { useOpen } from '@/hooks/useOpen';
import GrayChevronDown from '@/public/icons/cardList/gray_chevron_down.svg';

interface SortDropdownProps {
  sort: string;
  sortChange: (value: string) => void;
}

export default function SortDropdown({ sort, sortChange }: SortDropdownProps) {
  const sortList = ['인기순', '최신순'];
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
      <button type="button" className="flex gap-1 items-center">
        <p className="text-base font-normal text-setfont">{sort}</p>
        <Image
          src={GrayChevronDown}
          alt="정렬 더보기"
          width={20}
          height={20}
          className={`h-5 w-5 transition-transform transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
    </ValueDropdown>
  );
}
