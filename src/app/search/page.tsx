'use client';

import { Suspense, useState } from 'react';
import Image from 'next/image';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import MainWhiteButton from '@/components/@shared/button/MainWhiteButton';
import GenreFilter from '@/components/@shared/filter/GenreFilter';
import LocationFilter from '@/components/@shared/filter/LocationFilter';
import FilterContainer from '@/components/@shared/layout/FilterContainer';
import PageContainer from '@/components/@shared/layout/PageContainer';
import SearchResults from '@/components/search/SearchResults';
import BlackDelete from '@/public/icons/delete/black_delete.svg';

export default function SearchPage() {
  const [selectedType, setSelectedType] = useState('locate');
  const { genreList, removeGenre, clearGenre } = useQueryStringStore();

  return (
    <PageContainer>
      <FilterContainer>
        <MainWhiteButton onClick={() => setSelectedType('locate')}>
          지역
        </MainWhiteButton>
        <MainWhiteButton onClick={() => setSelectedType('genre')}>
          테마
        </MainWhiteButton>
      </FilterContainer>
      <GenreFilter selectedType={selectedType} />
      <div className="flex items-center gap-2 mt-4">
        {genreList.map((value, index) => {
          return (
            <div
              key={index}
              className="px-3 py-[6px] bg-brand-sub300 text-base tracking-[-2.5%] text-font-baseBlack rounded-[4px] font-semibold flex items-center gap-[6px]"
            >
              {value}
              <button type="button" onClick={() => removeGenre(value)}>
                <Image
                  src={BlackDelete}
                  alt="장르 삭제하기"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          );
        })}
        {genreList.length !== 0 && (
          <MainWhiteButton
            onClick={() => clearGenre()}
            className="absolute right-0"
          >
            초기화
          </MainWhiteButton>
        )}
      </div>
      <Suspense>
        <SearchResults />
      </Suspense>
    </PageContainer>
  );
}
