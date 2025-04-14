'use client';

import MyPageNav from '@/src/components/myPage/home/MyPageNav';
import FavoriteTypeChanger from '@/src/components/myPage/favorite/TypeChanger';
import RoomCardSection from '@/src/components/@shared/cardList/RoomCardSection';
import GatheringCardSection from '@/src/components/@shared/cardList/GatheringCardSection';
import { reviewTypeList } from '@/src/constants/mypage/typeList';
import { useState } from 'react';
import MyPageContainer from '@/src/components/@shared/layout/MyPageContainer';

export default function MyReviewPage() {
  const [selectedType, setSelectedType] = useState('room');

  return (
    <MyPageContainer>
      <MyPageNav />
      <FavoriteTypeChanger
        options={reviewTypeList}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {selectedType === 'room' ? (
        <RoomCardSection type="mypage" review />
      ) : (
        <GatheringCardSection type="mypage" review />
      )}
    </MyPageContainer>
  );
}
