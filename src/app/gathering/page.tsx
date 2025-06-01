'use client';

import { useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
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
import Pagination from '@/components/@shared/pagination/Pagination';
import SearchBar from '@/components/@shared/search/SearchBar';
import { useGetGathering } from '@/hooks/reactQuery/useGetGathering';
import { usePagination } from '@/hooks/usePagination';

export default function GatheringPage() {
  const { accessToken } = useAuthStore();
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('최신순');
  const sortList = ['최신순', '마감순', '참여순'];
  const sortLabels: Record<string, string> = {
    최신순: 'dataTime',
    마감순: 'registrationEnd',
    참여순: 'participantCount',
  };
  const { largeDistrict, middleDistrict } = useQueryStringStore();

  const { gathering, isLoading, showLoading } = useGetGathering(
    accessToken,
    '',
    page,
    10,
    sortLabels[sort],
    largeDistrict,
    middleDistrict
  );
  const totalItems = gathering ? gathering.totalCount : 0;
  const { totalPages } = usePagination(page, totalItems);

  if (showLoading || isLoading) return <Loading isLoading={isLoading} />;
  return (
    <PageContainer>
      <SearchBar />
      <FilterContainer>
        <LocationFilter />
        <GenreFilter />
        <MapNavigation target="gathering" />
      </FilterContainer>
      <SortContainer>
        <CountListValue value={totalItems} />
        <SortDropdown sort={sort} sortList={sortList} sortChange={setSort} />
      </SortContainer>
      <GatheringCardContainer data={gathering.data} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </PageContainer>
  );
}
