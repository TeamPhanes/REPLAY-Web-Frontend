'use client';

import { useState } from 'react';
import FilterContainer from '@/components/@shared/layout/FilterContainer';
import GatheringLikedSection from '@/components/myPage/favorite/GatheringLikedSection';
import MypageTypeChanger from '@/components/myPage/favorite/MypageTypeChanger';
import ThemeLikedSection from '@/components/myPage/favorite/ThemeLikedSection';

export default function FavoriteRenderingPage() {
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
        <ThemeLikedSection page={page} setPage={setPage} />
      ) : (
        <GatheringLikedSection page={page} setPage={setPage} />
      )}
    </div>
  );
}
