import Image from 'next/image';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import ValueDropdown from '@/components/@shared/dropdown/ValueDropdown';
import { useOpen } from '@/hooks/useOpen';
import BlackChevronDown from '@/public/icons/filter/black_chevron_down.svg';
import BlackExit from '@/public/icons/filter/black_exit.svg';

interface LargeDistrictDropdownProps {
  largeDistrict: string;
  setLargeDistrict: (value: string) => void;
  list: string[];
  align?: 'start' | 'center' | 'end';
}

export default function LargeDistrictDropdown({
  largeDistrict,
  setLargeDistrict,
  list,
  align = 'start',
}: LargeDistrictDropdownProps) {
  const { clearDistrict } = useQueryStringStore();
  const { isOpen, toggleOpen } = useOpen();
  return (
    <div className="bg-card flex items-center justify-center gap-1 rounded-full px-4 py-2">
      <ValueDropdown
        list={list}
        isOpen={isOpen}
        onOpenChange={toggleOpen}
        selected={largeDistrict}
        onClickHandler={setLargeDistrict}
        className="grid grid-cols-3 p-2 md:min-w-[412px] md:grid-cols-4"
        marginTop={14}
        align={align}
      >
        <button
          type="button"
          className="flex items-center justify-center gap-1"
        >
          <p className="text-sm font-medium tracking-[-2.5%] text-basefont md:text-base">
            {largeDistrict}
          </p>
          {largeDistrict === '시.도' ? (
            <Image
              src={BlackChevronDown}
              alt="더보기"
              width={20}
              height={20}
              className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          ) : null}
        </button>
      </ValueDropdown>
      {largeDistrict !== '시.도' ? (
        <Image
          src={BlackExit}
          alt="필터 제거"
          width={20}
          height={20}
          className={`h-5 w-5 transform cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          onClick={clearDistrict}
        />
      ) : null}
    </div>
  );
}
