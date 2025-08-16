import Image from 'next/image';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import ValueDropdown from '@/components/@shared/dropdown/ValueDropdown';
import { useOpen } from '@/hooks/useOpen';
import BlackChevronDown from '@/public/icons/filter/black_chevron_down.svg';
import BlackExit from '@/public/icons/filter/black_exit.svg';

interface GenreDropdownProps {
  genre: string;
  setGenre: (value: string) => void;
  list: string[];
  align?: 'start' | 'center' | 'end';
}

export default function GenreDropdown({
  genre,
  setGenre,
  list,
  align = 'start',
}: GenreDropdownProps) {
  const { clearGenre } = useQueryStringStore();
  const { isOpen, toggleOpen } = useOpen();
  return (
    <div className="flex items-center justify-center rounded-full bg-card px-4 py-2 gap-1">
      <ValueDropdown
        list={list}
        isOpen={isOpen}
        onOpenChange={toggleOpen}
        onClickHandler={setGenre}
        className="grid grid-cols-2 md:grid-cols-4 p-2 max-h-80 overflow-y-scroll md:overflow-hidden rounded-r-md md:rounded-r-[20px]"
        marginTop={14}
        align={align}
      >
        <button
          type="button"
          className="flex items-center justify-center gap-1"
        >
          <p className="text-sm md:text-base font-medium tracking-[-2.5%] text-basefont">
            {genre}
          </p>
          {genre === '전체' ? (
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
      {genre !== '전체' ? (
        <Image
          src={BlackExit}
          alt="필터 제거"
          width={20}
          height={20}
          className={`h-5 w-5 transition-transform transform duration-300 cursor-pointer ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          onClick={clearGenre}
        />
      ) : null}
    </div>
  );
}
