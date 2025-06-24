import { useState } from 'react';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import ReviewRoomCardSkeleton from '@/components/@shared/skeleton/ReviewRoomCardSkeleton';
import { useReviewTheme } from '@/hooks/reactQuery/useReviewTheme';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';

export default function ThemeReviewSection() {
  const [page, setPage] = useState(0);
  const { userReviewTheme, isLoading, showLoading } = useReviewTheme(page, 10);
  const { isGuardLoading } = useAuthGuard(showLoading);
  const { totalPages } = usePagination(page, userReviewTheme?.totalCount);

  if (isGuardLoading || isLoading) {
    return <ReviewRoomCardSkeleton count={6} className="mt-6" />;
  }

  if (!userReviewTheme || userReviewTheme.data.length === 0) {
    return <EmptyArrayContainer type="참여한" kind="방탈출" />;
  }

  return (
    <>
      <RoomCardContainer
        data={userReviewTheme.data}
        reviewCheck
        className="grid-cols-1"
      />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
