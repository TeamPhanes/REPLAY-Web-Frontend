import { genreList } from '@/src/constants/filter/genreList';
import Image from 'next/image';
import BlackChevronDown from '@/public/icons/filter/black_chevron_down.svg';

export default function GenreFilter() {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-1 rounded-full bg-card px-4 py-2"
    >
      <p className="text-base font-medium tracking-[-2.5%] text-basefont">
        {genreList.genre.label}
      </p>
      <Image src={BlackChevronDown} alt="더보기" width={20} height={20} />
    </button>
  );
}
