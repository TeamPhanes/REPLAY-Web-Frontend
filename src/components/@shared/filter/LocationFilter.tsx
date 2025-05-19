import { useState } from 'react';
import LargeDistrictDropdown from '@/components/@shared/filter/LargeDistrictDropdown';
import MiddleDistrictDropdown from '@/components/@shared/filter/MiddleDistrictDropdown';
import { locationDetailList } from '@/constants/filter/locationList';

export default function LocationFilter() {
  const [largeDistrict, setLargeDistrict] = useState('시.도');
  const [middleDistrict, setMiddleDistrict] = useState('시.군.구');
  const largeDistrictList = Object.keys(locationDetailList);
  const middleDistrictList = locationDetailList[largeDistrict] ?? [];

  return (
    <div className="flex gap-2">
      <LargeDistrictDropdown
        largeDistrict={largeDistrict}
        setLargeDistrict={setLargeDistrict}
        list={largeDistrictList}
      />
      <MiddleDistrictDropdown
        middleDistrict={middleDistrict}
        setMiddleDistrict={setMiddleDistrict}
        list={middleDistrictList}
      />
    </div>
  );
}
