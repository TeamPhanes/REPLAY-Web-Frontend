import { useState } from 'react';
import { mockLikedGatherings } from '@/data/mockGatherings';
import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import CardSkeleton from '@/components/@shared/skeleton/CardSkeleton';
import { useGetGathering } from '@/hooks/reactQuery/useGetGathering';
import { useLikeGathering } from '@/hooks/reactQuery/useLikeGathering';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';

export default function GatheringLikedSection() {
  const { accessToken } = useAuthStore();
  const [page, setPage] = useState(0);
  const { genreList, districtList } = useQueryStringStore();

  const { gathering, isLoading } = useGetGathering(
    accessToken,
    districtList,
    genreList,
    page,
    12
  );
  const { isGuardLoading } = useAuthGuard(isLoading);
  const { totalPages } = usePagination(page, mockLikedGatherings?.totalCount);

  if (isGuardLoading || isLoading) {
    return (
      <CardSkeleton className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6" />
    );
  }

  // if (!mockLikedGatherings || mockLikedGatherings.data.length === 0) {
  //   return <EmptyArrayContainer type="찜한" kind="모임" />;
  // }
  return (
    <>
      <GatheringCardContainer data={gathering.content} favoriteCheck />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
