'use client';

import { useState } from 'react';
import { mockGatherings } from '@/data/mockGatherings';
import CountListValue from '@/components/@shared/cardList/CountListValue';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import SortDropdown from '@/components/@shared/cardList/SortDropdown';
import GenreFilter from '@/components/@shared/filter/GenreFilter';
import LocationFilter from '@/components/@shared/filter/LocationFilter';
import MapNavigation from '@/components/@shared/filter/MapNavigation';
import FilterContainer from '@/components/@shared/layout/FilterContainer';
import PageContainer from '@/components/@shared/layout/PageContainer';
import SortContainer from '@/components/@shared/layout/SortContainer';
import SearchBar from '@/components/@shared/search/SearchBar';

export default function GatheringPage() {
  const [sort, setSort] = useState('인기순');
  return (
    <PageContainer>
      <SearchBar />
      <FilterContainer>
        <LocationFilter />
        <GenreFilter />
        <MapNavigation target="gathering" />
      </FilterContainer>
      <SortContainer>
        <CountListValue value={mockGatherings.length} />
        <SortDropdown sort={sort} sortChange={setSort} />
      </SortContainer>
      <GatheringCardContainer data={mockGatherings} />
    </PageContainer>
  );
}
