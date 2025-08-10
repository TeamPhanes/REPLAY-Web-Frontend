import { useState } from 'react';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import CardSkeleton from '@/components/@shared/skeleton/CardSkeleton';
import { useLikeTheme } from '@/hooks/reactQuery/useLikeTheme';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';

export default function ThemeLikedSection() {
  const [page, setPage] = useState(0);
  const { userLikeTheme, isLoading, showLoading } = useLikeTheme(page, 10);
  const { isGuardLoading } = useAuthGuard(showLoading);
  const { totalPages } = usePagination(page, userLikeTheme?.totalCount);

  if (isGuardLoading || isLoading) {
    return <CardSkeleton className="mt-6" />;
  }

  if (!userLikeTheme || userLikeTheme.data.length === 0) {
    return <EmptyArrayContainer type="찜한" kind="방탈출" />;
  }

  return (
    <>
      <RoomCardContainer
        data={userLikeTheme.data}
        favoriteCheck
        className="grid-cols-1 md:grid-cols-2"
      />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
