import { useState } from 'react';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import GatheringCardReviewContainer from '@/components/@shared/cardList/GatheringCardReviewContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import ReviewGatheringCardSkeleton from '@/components/@shared/skeleton/ReviewGatheringCardSkeleton';
import { useReviewGathering } from '@/hooks/reactQuery/useReviewGathering';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';

export default function GatheringReviewSection() {
  const [page, setPage] = useState(0);
  const { userReviewGathering, isLoading, showLoading } = useReviewGathering(
    page,
    10
  );
  const { isGuardLoading } = useAuthGuard(showLoading);
  const { totalPages } = usePagination(page, userReviewGathering?.totalCount);

  if (isGuardLoading || isLoading) {
    return <ReviewGatheringCardSkeleton count={6} className="mt-6" />;
  }

  if (!userReviewGathering || userReviewGathering.data.length === 0) {
    return <EmptyArrayContainer type="참여한" kind="모임" />;
  }

  return (
    <>
      <GatheringCardReviewContainer data={userReviewGathering.data} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
