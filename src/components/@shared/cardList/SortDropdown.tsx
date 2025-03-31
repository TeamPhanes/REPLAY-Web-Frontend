import Image from 'next/image';
import GrayChevronDown from '@/public/icons/cardList/gray_chevron_down.svg';

export default function SortDropdown() {
  return (
    <button type="button" className="flex gap-1">
      <p className="text-base font-normal text-setfont">인기순</p>
      <Image src={GrayChevronDown} alt="정렬 더보기" width={20} height={20} />
    </button>
  );
}
