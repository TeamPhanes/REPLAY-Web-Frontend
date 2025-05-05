'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import GatheringCardSection from '@/components/@shared/cardList/GatheringCardSection';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import TypeChanger from '@/components/myPage/favorite/TypeChanger';
import { favoriteTypeList } from '@/constants/mypage/typeList';
import { useLikeTheme } from '@/hooks/reactQuery/useLikeTheme';
import { useHasHydrated } from '@/hooks/useHasHydrated';

export default function RenderingPage() {
  const searchParams = useSearchParams();
  const homeRoutingType =
    searchParams.get('type') === 'gathering' ? 'gathering' : 'room';
  const [selectedType, setSelectedType] = useState(homeRoutingType);
  const hasHydrated = useHasHydrated();
  const { userLikeTheme, isLoading } = useLikeTheme();

  if (!hasHydrated || isLoading) return <Loading isLoading={isLoading} />;

  return (
    <>
      <TypeChanger
        options={favoriteTypeList}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {selectedType === 'room' ? (
        <RoomCardContainer data={userLikeTheme} />
      ) : (
        <GatheringCardSection type="mypage" />
      )}
    </>
  );
}
