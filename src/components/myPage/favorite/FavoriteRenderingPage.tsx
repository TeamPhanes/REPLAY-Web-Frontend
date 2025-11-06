'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { mockLikedGatherings } from '@/data/mockGatherings';
import { mockLikedRooms } from '@/data/mockRooms';
import GatheringLikedSection from '@/components/myPage/favorite/GatheringLikedSection';
import ThemeLikedSection from '@/components/myPage/favorite/ThemeLikedSection';
import TypeChanger from '@/components/myPage/favorite/TypeChanger';
import { favoriteTypeList } from '@/constants/mypage/typeList';

export default function FavoriteRenderingPage() {
  const searchParams = useSearchParams();
  const homeRoutingType =
    searchParams.get('type') === 'gathering' ? 'gathering' : 'room';
  const [selectedType, setSelectedType] = useState('room');

  const buttonList = [
    { value: 'room', label: '방탈출' },
    { value: 'gathering', label: '모임' },
  ];

  return (
    <div className="mt-[248px]">
      <div className="flex items-center gap-6">
        {buttonList.map((list) => {
          return (
            <button
              key={list.value}
              type="button"
              onClick={() => setSelectedType(list.value)}
              className={`${selectedType === list.value ? 'border-brand-sub500 text-brand-sub500' : 'border-line-darkGray text-font-secondBlack'} text-2xl tracking-[-2.5%] font-semibold bg-white py-2 px-5 border-2`}
            >
              {list.label}
            </button>
          );
        })}
      </div>
      <p className="mt-6 text-sm tracking-[-2.5%] text-font-baseWhite font-normal">
        전체{' '}
        {selectedType === 'room'
          ? mockLikedRooms.totalCount
          : mockLikedGatherings.totalCount}
        개
      </p>
      {selectedType === 'room' ? (
        <ThemeLikedSection />
      ) : (
        <GatheringLikedSection />
      )}
    </div>
  );
}
