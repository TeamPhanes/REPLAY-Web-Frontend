'use client';

import { useState } from 'react';
import MypageTypeChanger from '@/components/myPage/favorite/MypageTypeChanger';
import GatheringReviewSection from '@/components/myPage/review/GatheringReviewSection';
import ThemeReviewSection from '@/components/myPage/review/ThemeReviewSection';

export default function ReviewRenderingPage() {
  const [selectedType, setSelectedType] = useState('room');
  const [page, setPage] = useState(0);

  return (
    <div className="mt-40 md:mt-[248px]">
      <MypageTypeChanger
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {selectedType === 'room' ? (
        <ThemeReviewSection page={page} setPage={setPage} />
      ) : (
        <GatheringReviewSection page={page} setPage={setPage} />
      )}
    </div>
  );
}
