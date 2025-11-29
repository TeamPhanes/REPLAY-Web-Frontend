import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import CardSkeleton from '@/components/@shared/skeleton/CardSkeleton';
import { useLikeTheme } from '@/hooks/reactQuery/useLikeTheme';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';

interface ThemeLikedSectionProps {
  page: number;
  setPage: (value: number) => void;
}

export default function ThemeLikedSection({
  page,
  setPage,
}: ThemeLikedSectionProps) {
  const { accessToken } = useAuthStore();
  const { genreList, districtList } = useQueryStringStore();
  const { userLikeTheme, isLoading, showLoading } = useLikeTheme(
    accessToken,
    districtList,
    genreList,
    page,
    12
  );
  const { isGuardLoading } = useAuthGuard(showLoading);
  const totalItems = userLikeTheme ? userLikeTheme.numberOfElements : 0;
  const { totalPages } = usePagination(page, totalItems);

  if (isGuardLoading || isLoading) {
    return <CardSkeleton className="mt-6" />;
  }

  if (!userLikeTheme || userLikeTheme.content.length === 0) {
    return <EmptyArrayContainer type="찜한" kind="방탈출" />;
  }

  return (
    <>
      <p className="mt-6 text-sm tracking-[-2.5%] text-font-baseWhite font-normal">
        전체 {totalItems}개
      </p>
      <RoomCardContainer
        data={userLikeTheme.content}
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
