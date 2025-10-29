'use client';

import { useState } from 'react';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import { locationDetailList } from '@/constants/filter/locationList';

interface LocationFilterProps {
  selectedType: string;
}

export default function LocationFilter({ selectedType }: LocationFilterProps) {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const { districtList, addDistrictList, removeDistrictList } =
    useQueryStringStore();
  return (
    <div
      className={`${selectedType === 'locate' ? 'animate-dropdownIn' : 'hidden'}`}
    >
      <div
        className={`${selectedDistrict === null ? 'rounded-b-[10px]' : 'rounded-b-none'} bg-card-white grid grid-cols-[repeat(16,minmax(0,_1fr))] rounded-t-[10px] mt-3 z-40 text-center`}
      >
        {Object.entries(locationDetailList).map(([key], index) => {
          const isFirstCol = index % 16 === 0;
          const isLastCol = index % 16 === 15;

          let roundedClass = '';

          if (isFirstCol) roundedClass = 'rounded-tl-[8px]';
          if (isFirstCol && selectedDistrict === null)
            roundedClass = 'rounded-l-[8px]';
          if (isLastCol) roundedClass = 'rounded-tr-[8px]';
          if (isLastCol && selectedDistrict === null)
            roundedClass = 'rounded-r-[8px]';

          return (
            <button
              key={key}
              type="button"
              onClick={() => {
                if (selectedDistrict === key) setSelectedDistrict(null);
                else setSelectedDistrict(key);
              }}
              className={`${roundedClass} ${selectedDistrict === key ? 'bg-brand-main400 text-font-baseWhite font-semibold' : ''} text-base tracking-[-2.5%] text-font-baseBlack font-normal py-2 hover:bg-brand-main400 hover:text-font-baseWhite hover:font-semibold duration-500`}
            >
              {key}
            </button>
          );
        })}
      </div>

      <div className="bg-card-white grid grid-cols-12 rounded-b-[10px] z-40">
        {Object.entries(locationDetailList).map(([key, value]) => {
          return (
            selectedDistrict === key &&
            value.map((district, index) => {
              const isLastRow =
                index >= value.length - (value.length % 12 || 12);
              const isFirstCol = index % 12 === 0;
              const isLastCol = index % 12 === 11;

              let roundedClass = '';

              if (isLastRow) {
                if (isFirstCol) roundedClass = 'rounded-bl-[8px]';
                else if (isLastCol) roundedClass = 'rounded-br-[8px]';
              }
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    if (districtList.includes(`${key} ${district}`))
                      removeDistrictList(`${key} ${district}`);
                    else addDistrictList(`${key} ${district}`);
                  }}
                  className={`py-2 text-lg text-font-baseBlack font-normal hover:bg-brand-main200 hover:font-semibold duration-500   
                    ${districtList.includes(`${key} ${district}`) ? 'bg-brand-main200 font-semibold' : ''} 
                    ${roundedClass}
                  `}
                >
                  {district}
                </button>
              );
            })
          );
        })}
      </div>
    </div>
  );
}
