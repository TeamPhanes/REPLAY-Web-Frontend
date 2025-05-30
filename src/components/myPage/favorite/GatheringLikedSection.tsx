import { useState } from 'react';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import Pagination from '@/components/@shared/pagination/Pagination';
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

  if (isGuardLoading) return <Loading isLoading={isLoading} />;
  return userLikeGathering.data.length === 0 ? (
    <EmptyArrayContainer type="찜한" kind="모임" />
  ) : (
    <>
      <GatheringCardContainer data={userLikeGathering.data} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
