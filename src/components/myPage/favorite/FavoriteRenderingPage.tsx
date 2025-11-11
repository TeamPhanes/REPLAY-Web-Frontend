'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import GatheringLikedSection from '@/components/myPage/favorite/GatheringLikedSection';
import MypageTypeChanger from '@/components/myPage/favorite/MypageTypeChanger';
import ThemeLikedSection from '@/components/myPage/favorite/ThemeLikedSection';

export default function FavoriteRenderingPage() {
  // const searchParams = useSearchParams();
  // const homeRoutingType =
  //   searchParams.get('type') === 'gathering' ? 'gathering' : 'room';
  const [selectedType, setSelectedType] = useState('room');

  return (
    <div className="mt-[248px]">
      <MypageTypeChanger
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {selectedType === 'room' ? (
        <ThemeLikedSection />
      ) : (
        <GatheringLikedSection />
      )}
    </div>
  );
}
