'use client';

import { useQueryStringStore } from '@/store/useQueryStringStore';
import { locationDetailList } from '@/constants/filter/locationList';

interface LocationFilterProps {
  selectedType: string;
  selectedDistrict: string | null;
  setSelectedDistrict: (value: string | null) => void;
}

export default function LocationFilter({
  selectedType,
  selectedDistrict,
  setSelectedDistrict,
}: LocationFilterProps) {
  const { districtList, addDistrictList, removeDistrictList } =
    useQueryStringStore();
  return (
    <div
      className={`${selectedType === 'locate' ? 'animate-dropdownIn' : 'hidden'}`}
    >
      <div
        className={`${selectedDistrict === null ? 'grid grid-cols-4' : 'flex justify-center'}  mt-3 text-center`}
      >
        {Object.entries(locationDetailList).map(([key]) => {
          return (
            <button
              key={key}
              type="button"
              onClick={() => {
                if (selectedDistrict === key) setSelectedDistrict(null);
                else setSelectedDistrict(key);
              }}
              className={`${selectedDistrict === key ? '!block bg-brand-main400 px-10 font-semibold text-font-baseWhite duration-500' : 'bg-card-white'} ${selectedDistrict === null ? '' : 'hidden'} py-2 text-base font-normal tracking-[-2.5%] text-font-baseBlack md:duration-500 xl:hover:bg-brand-main400 xl:hover:font-semibold xl:hover:text-font-baseWhite`}
            >
              {key}
            </button>
          );
        })}
      </div>

      <div
        className={`${selectedDistrict === null ? 'hidden' : 'animate-dropdownIn'} z-40 mt-3 grid grid-cols-4 gap-2 rounded-b-[10px] bg-card-white`}
      >
        {Object.entries(locationDetailList).map(([key, value]) => {
          return (
            selectedDistrict === key &&
            value.map((district, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    if (districtList.includes(`${key} ${district}`))
                      removeDistrictList(`${key} ${district}`);
                    else addDistrictList(`${key} ${district}`);
                  }}
                  className={`py-2 text-lg font-normal text-font-baseBlack duration-500 xl:hover:bg-brand-main200 xl:hover:font-semibold   
                    ${districtList.includes(`${key} ${district}`) ? 'bg-brand-main200 font-semibold' : ''} 
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
