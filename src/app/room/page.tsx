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
import Loading from '@/components/@shared/loading/Loading';
import SearchBar from '@/components/@shared/search/SearchBar';
import { useGetTheme } from '@/hooks/reactQuery/useGetTheme';

export default function RoomPage() {
  const [sort, setSort] = useState('인기순');
  const sortList = ['인기순', '평점순', '리뷰순'];
  const { theme, showLoading, isLoading } = useGetTheme();
  if (showLoading) return <Loading isLoading={isLoading} />;
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
        <SortDropdown sort={sort} sortList={sortList} sortChange={setSort} />
      </SortContainer>
      <RoomCardContainer data={theme} />
    </PageContainer>
  );
}
