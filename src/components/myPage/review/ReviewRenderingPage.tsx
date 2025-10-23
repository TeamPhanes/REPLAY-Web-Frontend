'use client';

import { useState } from 'react';
import TypeChanger from '@/components/myPage/favorite/TypeChanger';
import GatheringReviewSection from '@/components/myPage/review/GatheringReviewSection';
import ThemeReviewSection from '@/components/myPage/review/ThemeReviewSection';
import { reviewTypeList } from '@/constants/mypage/typeList';

export default function ReviewRenderingPage() {
  const [selectedType, setSelectedType] = useState('room');

  const list = ['임시', '임시2'];

  return (
    <>
      <TypeChanger
        list={list}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {selectedType === 'room' ? (
        <ThemeReviewSection />
      ) : (
        <GatheringReviewSection />
      )}
    </>
  );
}
