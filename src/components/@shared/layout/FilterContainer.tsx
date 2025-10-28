'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import MainWhiteButton from '@/components/@shared/button/MainWhiteButton';
import GenreFilter from '@/components/@shared/filter/GenreFilter';
import LocationFilter from '@/components/@shared/filter/LocationFilter';
import BlackDelete from '@/public/icons/delete/black_delete.svg';

export default function FilterContainer() {
  const [selectedType, setSelectedType] = useState('locate');
  const {
    genreList,
    removeGenre,
    clearGenre,
    districtList,
    removeDistrictList,
    clearDistrict,
  } = useQueryStringStore();

  return (
    <>
      <div className="relative mt-[52px] flex gap-2">
        <MainWhiteButton onClick={() => setSelectedType('locate')}>
          지역
        </MainWhiteButton>
        <MainWhiteButton onClick={() => setSelectedType('genre')}>
          테마
        </MainWhiteButton>
      </div>

      <LocationFilter selectedType={selectedType} />
      <GenreFilter selectedType={selectedType} />

      <div className="flex items-center gap-2 my-4">
        {districtList.map((value, index) => {
          return (
            <div
              key={index}
              className="px-3 py-[6px] bg-brand-main300 text-base tracking-[-2.5%] text-font-baseBlack rounded-[4px] font-semibold flex items-center gap-[6px]"
            >
              {value}
              <button type="button" onClick={() => removeDistrictList(value)}>
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
        {(genreList.length !== 0 || districtList.length !== 0) && (
          <MainWhiteButton
            onClick={() => {
              clearGenre();
              clearDistrict();
            }}
            className="absolute right-0"
          >
            초기화
          </MainWhiteButton>
        )}
      </div>
    </>
  );
}
