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
import FixedAddGatheringButton from '@/components/@shared/modal/AddGathering/FixedAddGatheringButton';
import Pagination from '@/components/@shared/pagination/Pagination';
import CardSkeleton from '@/components/@shared/skeleton/CardSkeleton';
import SortSkeleton from '@/components/@shared/skeleton/SortSkeleton';
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

  const { gathering } = useGetGathering(
    accessToken,
    '',
    page,
    10,
    sortLabels[sort],
    '시.도',
    '시.군.구',
    '전체'
  );
  const totalItems = gathering ? gathering.totalCount : 0;
  const { totalPages } = usePagination(page, totalItems);

  return (
    <PageContainer>
      <FilterContainer />
      {!gathering ? (
        <>
          <SortSkeleton className="h-6 mt-6" />
          <CardSkeleton className="mt-6" />
        </>
      ) : (
        <>
          <SortContainer>
            <CountListValue value={totalItems} />
            <SortDropdown
              sort={sort}
              sortList={sortList}
              sortChange={setSort}
            />
          </SortContainer>
          <GatheringCardContainer data={gathering.data} />
        </>
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
      <FixedAddGatheringButton />
    </PageContainer>
  );
}
