'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import GatheringLikedSection from '@/components/myPage/favorite/GatheringLikedSection';
import ThemeLikedSection from '@/components/myPage/favorite/ThemeLikedSection';
import TypeChanger from '@/components/myPage/favorite/TypeChanger';
import { favoriteTypeList } from '@/constants/mypage/typeList';

export default function FavoriteRenderingPage() {
  const searchParams = useSearchParams();
  const homeRoutingType =
    searchParams.get('type') === 'gathering' ? 'gathering' : 'room';
  const [selectedType, setSelectedType] = useState(homeRoutingType);

  const list = ['임시', '임시2'];

  return (
    <>
      <TypeChanger
        gap="gap-6"
        list={list}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {selectedType === 'room' ? (
        <ThemeLikedSection />
      ) : (
        <GatheringLikedSection />
      )}
    </>
  );
}
