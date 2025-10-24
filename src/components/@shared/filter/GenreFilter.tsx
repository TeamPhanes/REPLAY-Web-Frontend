'use client';

import { useQueryStringStore } from '@/store/useQueryStringStore';
import { genreFilterList } from '@/constants/filter/genreList';

interface GenreFilterProps {
  selectedType: string;
}

export default function GenreFilter({ selectedType }: GenreFilterProps) {
  const { genreList, addGenre, removeGenre } = useQueryStringStore();
  return (
    <div
      className={`${
        selectedType === 'genre' ? 'animate-dropdownIn' : 'hidden'
      } bg-card-white grid grid-cols-12 rounded-[10px] mt-3 z-40`}
    >
      {genreFilterList.map((value, index) => {
        const isFirstRow = index < 12;
        const isLastRow = index >= 12;
        const isFirstCol = index % 12 === 0;
        const isLastCol = index % 12 === 11;

        let roundedClass = '';

        if (isFirstRow) {
          if (isFirstCol) roundedClass = 'rounded-tl-[10px]';
          else if (isLastCol) roundedClass = 'rounded-tr-[10px]';
        }

        if (isLastRow) {
          if (isFirstCol) roundedClass = 'rounded-bl-[10px]';
          else if (isLastCol) roundedClass = 'rounded-br-[10px]';
        }

        return (
          <button
            key={index}
            type="button"
            className={`py-2 text-lg text-font-baseBlack font-normal hover:bg-brand-sub500 hover:font-semibold duration-500 border-line-secondLightGray 
                    ${isLastCol ? 'border-r-0' : 'border-r-[1px]'} ${isLastRow ? 'border-b-0' : 'border-b-[1px]'} 
                    ${genreList.includes(value) ? 'bg-brand-sub500 font-semibold' : ''} 
                    ${roundedClass}
                  `}
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
  );
}
