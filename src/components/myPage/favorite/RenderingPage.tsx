'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import GatheringCardSection from '@/components/@shared/cardList/GatheringCardSection';
import RoomCardSection from '@/components/@shared/cardList/RoomCardSection';
import TypeChanger from '@/components/myPage/favorite/TypeChanger';
import { favoriteTypeList } from '@/constants/mypage/typeList';

export default function RenderingPage() {
  const searchParams = useSearchParams();
  const homeRoutingType =
    searchParams.get('type') === 'gathering' ? 'gathering' : 'room';
  const [selectedType, setSelectedType] = useState(homeRoutingType);

  return (
    <>
      <TypeChanger
        options={favoriteTypeList}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {selectedType === 'room' ? (
        <RoomCardSection type="mypage" />
      ) : (
        <GatheringCardSection type="mypage" />
      )}
    </>
  );
}
