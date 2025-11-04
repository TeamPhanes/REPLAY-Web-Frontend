import Image from 'next/image';
import ValueDropdown from '@/components/@shared/dropdown/ValueDropdown';
import { useOpen } from '@/hooks/useOpen';
import BlackChevronDown from '@/public/icons/filter/black_chevron_down.svg';
import BlackExit from '@/public/icons/filter/black_exit.svg';

interface MiddleDistrictDropdownProps {
  middleDistrict: string;
  setMiddleDistrict: (value: string) => void;
  list: string[];
  align?: 'start' | 'center' | 'end';
}

export default function MiddleDistrictDropdown({
  middleDistrict,
  setMiddleDistrict,
  list,
  align = 'center',
}: MiddleDistrictDropdownProps) {
  const { isOpen, toggleOpen } = useOpen();
  if (list.length === 0) return null;
  return (
    <div className="flex items-center justify-center rounded-full bg-card px-4 py-2 gap-1">
      <ValueDropdown
        list={list}
        isOpen={isOpen}
        selected={middleDistrict}
        onOpenChange={toggleOpen}
        onClickHandler={setMiddleDistrict}
        className={`${list.length === 2 ? 'grid-cols-2' : ''} ${list.length === 3 ? 'grid-cols-2 md:grid-cols-3' : ''} ${list.length >= 4 ? 'grid-cols-2 md:grid-cols-4' : ''} max-h-80 overflow-y-scroll md:overflow-hidden rounded-r-md md:rounded-r-[20px] grid p-2`}
        marginTop={14}
        align={align}
      >
        <button
          type="button"
          className="flex items-center justify-center gap-1"
        >
          <p className="text-sm md:text-base font-medium tracking-[-2.5%] text-basefont">
            {middleDistrict}
          </p>
          {middleDistrict === '시.군.구' ? (
            <Image
              src={BlackChevronDown}
              alt="더보기"
              width={20}
              height={20}
              className={`h-5 w-5 transition-transform transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          ) : null}
        </button>
      </ValueDropdown>
      {middleDistrict !== '시.군.구' ? (
        <Image
          src={BlackExit}
          alt="필터 제거"
          width={20}
          height={20}
          className={`h-5 w-5 transition-transform transform duration-300 cursor-pointer ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          onClick={() => setMiddleDistrict('시.군.구')}
        />
      ) : null}
    </div>
  );
}
