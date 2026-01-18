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
      } grid grid-cols-4 mt-3 z-40`}
    >
      {genreFilterList.map((value, index) => {
        return (
          <button
            key={index}
            type="button"
            className={`py-2 text-base text-font-baseBlack font-normal hover:bg-brand-sub500 hover:font-semibold duration-500 border-line-secondLightGray 
                    ${genreList.includes(value) ? 'bg-brand-sub500 font-semibold' : ''} 
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
