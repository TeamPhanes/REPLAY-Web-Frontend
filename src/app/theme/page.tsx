'use client';

import { useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import CountListValue from '@/components/@shared/cardList/CountListValue';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import SortDropdown from '@/components/@shared/cardList/SortDropdown';
import GenreFilter from '@/components/@shared/filter/GenreFilter';
import LocationFilter from '@/components/@shared/filter/LocationFilter';
import MapNavigation from '@/components/@shared/filter/MapNavigation';
import FilterContainer from '@/components/@shared/layout/FilterContainer';
import PageContainer from '@/components/@shared/layout/PageContainer';
import SortContainer from '@/components/@shared/layout/SortContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import SearchBar from '@/components/@shared/search/SearchBar';
import CardSkeleton from '@/components/@shared/skeleton/CardSkeleton';
import LineSkeleton from '@/components/@shared/skeleton/SortSkeleton';
import { useGetTheme } from '@/hooks/reactQuery/useGetTheme';
import { usePagination } from '@/hooks/usePagination';

export default function RoomPage() {
  const { accessToken } = useAuthStore();
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('인기순');
  const sortList = ['인기순', '평점순', '리뷰순'];
  const sortLabels: Record<string, string> = {
    인기순: 'likes',
    평점순: 'rating',
    리뷰순: 'reviews',
  };
  const { largeDistrict, middleDistrict } = useQueryStringStore();

  const { theme } = useGetTheme(
    accessToken,
    '',
    page,
    10,
    sortLabels[sort],
    largeDistrict,
    middleDistrict
  );
  const totalItems = theme ? theme.totalCount : 0;
  const { totalPages } = usePagination(page, totalItems);

  return (
    <PageContainer>
      <SearchBar />
      <FilterContainer>
        <LocationFilter align="start" />
        <GenreFilter />
        <MapNavigation target="room" />
      </FilterContainer>
      {!theme ? (
        <>
          <LineSkeleton className="h-6 mt-6" />
          <CardSkeleton className="mt-6" />
        </>
      ) : (
        <>
          <SortContainer>
            <CountListValue value={theme.totalCount} />
            <SortDropdown
              sort={sort}
              sortList={sortList}
              sortChange={setSort}
            />
          </SortContainer>
          <RoomCardContainer data={theme.data} className="grid-cols-2" />
        </>
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </PageContainer>
  );
}
