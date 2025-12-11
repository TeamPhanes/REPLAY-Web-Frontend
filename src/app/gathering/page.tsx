'use client';

import { useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import CountListValue from '@/components/@shared/cardList/CountListValue';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
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
  const { genreList, districtList } = useQueryStringStore();

  const { gathering } = useGetGathering(
    accessToken,
    districtList,
    genreList,
    page,
    12
  );
  const totalItems = gathering ? gathering.totalElements : 0;
  const { totalPages } = usePagination(page, totalItems, 12);

  return (
    <PageContainer>
      <FilterContainer setPage={setPage} />
      {!gathering ? (
        <>
          <SortSkeleton className="h-6 mt-6" />
          <CardSkeleton className="mt-6" />
        </>
      ) : (
        <>
          <SortContainer>
            <CountListValue value={totalItems} />
            <FixedAddGatheringButton />
          </SortContainer>
          <GatheringCardContainer data={gathering.content} />
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
