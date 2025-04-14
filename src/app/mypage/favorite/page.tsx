'use client';

import { useState } from 'react';
import MyPageNav from '@/src/components/myPage/home/MyPageNav';
import FavoriteTypeChanger from '@/src/components/myPage/favorite/TypeChanger';
import RoomCardSection from '@/src/components/@shared/cardList/RoomCardSection';
import GatheringCardSection from '@/src/components/@shared/cardList/GatheringCardSection';
import { favoriteTypeList } from '@/src/constants/mypage/typeList';
import MyPageContainer from '@/src/components/@shared/layout/MyPageContainer';

export default function MyFavoritePage() {
  const [selectedType, setSelectedType] = useState('room');

  return (
    <MyPageContainer>
      <MyPageNav />
      <FavoriteTypeChanger
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
