import { useState } from 'react';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import Pagination from '@/components/@shared/pagination/Pagination';
import { useLikeTheme } from '@/hooks/reactQuery/useLikeTheme';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';

export default function ThemeLikedSection() {
  const [page, setPage] = useState(0);
  const { userLikeTheme, isLoading, showLoading } = useLikeTheme(page, 10);
  const { isGuardLoading } = useAuthGuard(showLoading);
  const { totalPages } = usePagination(page, userLikeTheme?.totalCount);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;
  return userLikeTheme.data.length === 0 ? (
    <EmptyArrayContainer type="찜한" kind="방탈출" />
  ) : (
    <>
      <RoomCardContainer data={userLikeTheme.data} favoriteCheck />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
