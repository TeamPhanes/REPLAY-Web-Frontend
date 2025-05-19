'use client';

import { useState } from 'react';
import { mockRooms } from '@/data/mockRooms';
import CountListValue from '@/components/@shared/cardList/CountListValue';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import SortDropdown from '@/components/@shared/cardList/SortDropdown';
import GenreFilter from '@/components/@shared/filter/GenreFilter';
import LocationFilter from '@/components/@shared/filter/LocationFilter';
import MapNavigation from '@/components/@shared/filter/MapNavigation';
import FilterContainer from '@/components/@shared/layout/FilterContainer';
import PageContainer from '@/components/@shared/layout/PageContainer';
import SortContainer from '@/components/@shared/layout/SortContainer';
import SearchBar from '@/components/@shared/search/SearchBar';

export default function RoomPage() {
  const [sort, setSort] = useState('인기순');
  return (
    <PageContainer>
      <SearchBar />
      <FilterContainer>
        <LocationFilter />
        <GenreFilter />
        <MapNavigation target="room" />
      </FilterContainer>
      <SortContainer>
        <CountListValue value={mockRooms.length} />
        <SortDropdown sort={sort} sortChange={setSort} />
      </SortContainer>
      <RoomCardContainer data={mockRooms} />
    </PageContainer>
  );
}
