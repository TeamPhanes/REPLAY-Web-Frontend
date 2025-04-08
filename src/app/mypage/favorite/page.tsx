'use client';

import PageContainer from '@/src/components/@shared/layout/PageContainer';
import FavoriteTypeChanger from '@/src/components/myPage/favorite/FavoriteTypeChanger';
import MyPageNav from '@/src/components/myPage/home/MyPageNav';
import { useState } from 'react';
import GatheringCardSection from '@/src/components/@shared/cardList/GatheringCardSection';
import RoomCardSection from '@/src/components/@shared/cardList/RoomCardSection';

export default function MyFavoritePage() {
  const [selectedType, setSelectedType] = useState('room');

  return (
    <PageContainer>
      <MyPageNav />
      <FavoriteTypeChanger
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {selectedType === 'room' ? (
        <RoomCardSection type="mypage" />
      ) : (
        <GatheringCardSection type="mypage" />
      )}
    </PageContainer>
  );
}
