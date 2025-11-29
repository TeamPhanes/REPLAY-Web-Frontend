'use client';

import { useState } from 'react';
import FilterContainer from '@/components/@shared/layout/FilterContainer';
import MypageTypeChanger from '@/components/myPage/favorite/MypageTypeChanger';
import GatheringReviewSection from '@/components/myPage/review/GatheringReviewSection';
import ThemeReviewSection from '@/components/myPage/review/ThemeReviewSection';

export default function ReviewRenderingPage() {
  const [selectedType, setSelectedType] = useState('room');
  const [page, setPage] = useState(0);

  return (
    <div className="mt-[248px]">
      <MypageTypeChanger
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <FilterContainer setPage={setPage} />
      {selectedType === 'room' ? (
        <ThemeReviewSection page={page} setPage={setPage} />
      ) : (
        <GatheringReviewSection />
      )}
    </div>
  );
}
