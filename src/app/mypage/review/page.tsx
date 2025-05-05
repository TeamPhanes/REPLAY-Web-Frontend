'use client';

import { useState } from 'react';
import { mockRooms } from '@/data/mockRooms';
import GatheringCardSection from '@/components/@shared/cardList/GatheringCardSection';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import MyPageContainer from '@/components/@shared/layout/MyPageContainer';
import TypeChanger from '@/components/myPage/favorite/TypeChanger';
import MyPageNav from '@/components/myPage/home/MyPageNav';
import { reviewTypeList } from '@/constants/mypage/typeList';

export default function MyReviewPage() {
  const [selectedType, setSelectedType] = useState('room');

  return (
    <MyPageContainer>
      <MyPageNav />
      <TypeChanger
        options={reviewTypeList}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {selectedType === 'room' ? (
        <RoomCardContainer data={mockRooms} reviewCheck />
      ) : (
        <GatheringCardSection type="mypage" review />
      )}
    </MyPageContainer>
  );
}
