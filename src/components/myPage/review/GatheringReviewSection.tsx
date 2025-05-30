import { useState } from 'react';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import GatheringCardReviewContainer from '@/components/@shared/cardList/GatheringCardReviewContainer';
import Loading from '@/components/@shared/loading/Loading';
import Pagination from '@/components/@shared/pagination/Pagination';
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

  if (isGuardLoading) return <Loading isLoading={isLoading} />;
  return userReviewGathering.data.length === 0 ? (
    <EmptyArrayContainer type="참여한" kind="모임" />
  ) : (
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
