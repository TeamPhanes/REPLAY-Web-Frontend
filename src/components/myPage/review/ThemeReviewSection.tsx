import { useState } from 'react';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import Pagination from '@/components/@shared/pagination/Pagination';
import { useReviewTheme } from '@/hooks/reactQuery/useReviewTheme';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';

export default function ThemeReviewSection() {
  const [page, setPage] = useState(0);
  const { userReviewTheme, isLoading, showLoading } = useReviewTheme(page, 10);
  const { isGuardLoading } = useAuthGuard(showLoading);
  const { totalPages } = usePagination(page, userReviewTheme?.totalCount);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;
  return userReviewTheme.data.length === 0 ? (
    <EmptyArrayContainer type="참여한" kind="방탈출" />
  ) : (
    <>
      <RoomCardContainer data={userReviewTheme.data} reviewCheck />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
