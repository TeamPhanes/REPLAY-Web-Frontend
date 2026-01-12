import Image from 'next/image';
import { useGenreStore } from '@/store/useGenreStore';
import { genreFilterList } from '@/constants/filter/genreList';
import { useOpen } from '@/hooks/useOpen';
import offHeart from '@/public/icons/heart/off_annotation_heart.svg';
import onHeart from '@/public/icons/heart/on_annotation_heart.svg';

interface TypeChangerProps {
  gap?: string;
  list: string[];
  selectedType: string;
  setSelectedType: (key: string) => void;
}

export default function TypeChanger({
  gap,
  list,
  selectedType,
  setSelectedType,
}: TypeChangerProps) {
  const { isOpen, toggleOpen } = useOpen();
  const { genreList, addGenre, removeGenre } = useGenreStore();

  return (
    <div className="flex justify-center my-8 md:my-12 items-center">
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" />}
      <div className={`flex ${gap} grid grid-cols-3 md:grid-cols-6`}>
        <button
          type="button"
          className={`text-xl md:text-2xl font-semibold tracking-[-2.5%] duration-500 ease-in-out hover:text-white ${
            selectedType === '전체' ? 'text-white' : 'text-grayFont'
          }`}
          onClick={() => setSelectedType('전체')}
        >
          전체
        </button>
        {list.map((value, index) => (
          <button
            key={index}
            type="button"
            className={`text-xl md:text-2xl font-semibold tracking-[-2.5%] duration-500 ease-in-out hover:text-white ${
              selectedType === value ? 'text-white' : 'text-grayFont'
            }`}
            onClick={() => setSelectedType(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <p
        className={`${isOpen ? '' : 'hidden'} absolute right-10 text-sm text-font-baseWhite font-semibold z-40`}
      >
        선호장르 다섯개를 선택해 주세요.
      </p>
      <button
        type="button"
        onClick={toggleOpen}
        className="absolute flex items-center gap-2 right-0 z-40"
      >
        <Image
          src={isOpen ? onHeart : offHeart}
          alt="선호 장르 선택하기"
          width={32}
          height={32}
        />
      </button>
      <div
        className={`${
          isOpen ? 'animate-dropdownIn' : 'hidden'
        } bg-card-white grid grid-cols-4 md:grid-cols-12 absolute w-full rounded-[10px] overflow-hidden top-16 md:top-10 z-40 border border-line-secondLightGray`}
      >
        {genreFilterList.map((value, index) => {
          const totalCount = genreFilterList.length;

          const isMobileLastCol = (index + 1) % 4 === 0;
          const isMobileLastRow = index >= totalCount - (totalCount % 4 || 4);

          const isPcLastCol = (index + 1) % 12 === 0;
          const isPcLastRow = index >= totalCount - (totalCount % 12 || 12);

          return (
            <button
              key={index}
              type="button"
              className={`py-2 text-lg text-font-baseBlack font-normal hover:bg-brand-sub500 hover:font-semibold duration-500 ${isMobileLastCol ? 'border-r-0' : 'border-r-[1px]'} ${isPcLastCol ? 'md:border-r-0' : 'md:border-r-[1px]'} ${isMobileLastRow ? 'border-b-0' : 'border-b-[1px]'} ${isPcLastRow ? 'md:border-b-0' : 'md:border-b-[1px]'} border-line-secondLightGray ${genreList.includes(value) ? 'bg-brand-sub500 font-semibold' : ''}`}
              onClick={() => {
                if (genreList.includes(value)) removeGenre(value);
                else addGenre(value);
              }}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
