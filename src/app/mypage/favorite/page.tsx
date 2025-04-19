'use client';

import { useState } from 'react';
import GatheringCardSection from '@/components/@shared/cardList/GatheringCardSection';
import RoomCardSection from '@/components/@shared/cardList/RoomCardSection';
import MyPageContainer from '@/components/@shared/layout/MyPageContainer';
import TypeChanger from '@/components/myPage/favorite/TypeChanger';
import MyPageNav from '@/components/myPage/home/MyPageNav';
import { favoriteTypeList } from '@/constants/mypage/typeList';

export default function MyFavoritePage() {
  const [selectedType, setSelectedType] = useState('room');

  return (
    <MyPageContainer>
      <MyPageNav />
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
    </MyPageContainer>
  );
}
