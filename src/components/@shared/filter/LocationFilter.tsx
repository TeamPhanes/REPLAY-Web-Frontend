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
              className={`${selectedDistrict === key ? 'bg-brand-main400 text-font-baseWhite font-semibold !block px-10 duration-500' : 'bg-card-white'} ${selectedDistrict === null ? '' : 'hidden'} text-base tracking-[-2.5%] text-font-baseBlack font-normal py-2 xl:hover:bg-brand-main400 xl:hover:text-font-baseWhite xl:hover:font-semibold md:duration-500`}
            >
              {key}
            </button>
          );
        })}
      </div>

      <div
        className={`${selectedDistrict === null ? 'hidden' : 'animate-dropdownIn'} bg-card-white grid grid-cols-4 gap-2 rounded-b-[10px] z-40 mt-3`}
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
                  className={`py-2 text-lg text-font-baseBlack font-normal xl:hover:bg-brand-main200 xl:hover:font-semibold duration-500   
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
