import { useState } from 'react';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import CardSkeleton from '@/components/@shared/skeleton/CardSkeleton';
import { useLikeGathering } from '@/hooks/reactQuery/useLikeGathering';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';

export default function GatheringLikedSection() {
  const [page, setPage] = useState(0);
  const { userLikeGathering, isLoading, showLoading } = useLikeGathering(
    page,
    10
  );
  const { isGuardLoading } = useAuthGuard(showLoading);
  const { totalPages } = usePagination(page, userLikeGathering?.totalCount);

  if (isGuardLoading || isLoading) {
    return (
      <CardSkeleton className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6" />
    );
  }

  if (!userLikeGathering || userLikeGathering.data.length === 0) {
    return <EmptyArrayContainer type="찜한" kind="모임" />;
  }
  return (
    <>
      <GatheringCardContainer data={userLikeGathering.data} favoriteCheck />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
