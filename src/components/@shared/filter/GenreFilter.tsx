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
      } z-40 mt-3 grid grid-cols-4`}
    >
      {genreFilterList.map((value, index) => {
        return (
          <button
            key={index}
            type="button"
            className={`border-line-secondLightGray py-2 text-base font-normal text-font-baseBlack duration-500 xl:hover:bg-brand-sub500 xl:hover:font-semibold 
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
