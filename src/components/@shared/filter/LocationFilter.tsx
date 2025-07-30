'use client';

import { useQueryStringStore } from '@/store/useQueryStringStore';
import LargeDistrictDropdown from '@/components/@shared/filter/LargeDistrictDropdown';
import MiddleDistrictDropdown from '@/components/@shared/filter/MiddleDistrictDropdown';
import { locationDetailList } from '@/constants/filter/locationList';

export default function LocationFilter() {
  const { largeDistrict, middleDistrict, setLargeDistrict, setMiddleDistrict } =
    useQueryStringStore();
  const largeDistrictList = Object.keys(locationDetailList);
  const middleDistrictList = locationDetailList[largeDistrict] ?? [];

  return (
    <div className="flex gap-2">
      <LargeDistrictDropdown
        largeDistrict={largeDistrict}
        setLargeDistrict={setLargeDistrict}
        list={largeDistrictList}
        align="center"
      />
      <MiddleDistrictDropdown
        middleDistrict={middleDistrict}
        setMiddleDistrict={setMiddleDistrict}
        list={middleDistrictList}
      />
    </div>
  );
}
