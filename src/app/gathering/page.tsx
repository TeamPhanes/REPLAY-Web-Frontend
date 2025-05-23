'use client';

import { useState } from 'react';
import CountListValue from '@/components/@shared/cardList/CountListValue';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import SortDropdown from '@/components/@shared/cardList/SortDropdown';
import GenreFilter from '@/components/@shared/filter/GenreFilter';
import LocationFilter from '@/components/@shared/filter/LocationFilter';
import MapNavigation from '@/components/@shared/filter/MapNavigation';
import FilterContainer from '@/components/@shared/layout/FilterContainer';
import PageContainer from '@/components/@shared/layout/PageContainer';
import SortContainer from '@/components/@shared/layout/SortContainer';
import Loading from '@/components/@shared/loading/Loading';
import SearchBar from '@/components/@shared/search/SearchBar';
import { useGetGathering } from '@/hooks/reactQuery/useGetGathering';

export default function GatheringPage() {
  const { gathering, isLoading, showLoading } = useGetGathering();
  const [sort, setSort] = useState('최신순');
  const sortList = ['최신순', '마감순', '참여순'];

  if (showLoading) return <Loading isLoading={isLoading} />;
  return (
    <PageContainer>
      <SearchBar />
      <FilterContainer>
        <LocationFilter />
        <GenreFilter />
        <MapNavigation target="gathering" />
      </FilterContainer>
      <SortContainer>
        <CountListValue value={gathering.length} />
        <SortDropdown sort={sort} sortList={sortList} sortChange={setSort} />
      </SortContainer>
      <GatheringCardContainer data={gathering} />
    </PageContainer>
  );
}
