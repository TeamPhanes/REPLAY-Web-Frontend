import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import ReviewRoomCardSkeleton from '@/components/@shared/skeleton/ReviewRoomCardSkeleton';
import ThemeReviewContainer from '@/components/myPage/review/ThemeReviewContainer';
import { useReviewTheme } from '@/hooks/reactQuery/useReviewTheme';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';

interface ThemeReviewSectionProps {
  page: number;
  setPage: (value: number) => void;
}

export default function ThemeReviewSection({
  page,
  setPage,
}: ThemeReviewSectionProps) {
  const { accessToken } = useAuthStore();
  const { genreList, districtList } = useQueryStringStore();
  const { userReviewTheme, isLoading, showLoading } = useReviewTheme(
    accessToken,
    districtList,
    genreList,
    page,
    12
  );
  const { isGuardLoading } = useAuthGuard(showLoading);
  const totalItems = userReviewTheme ? userReviewTheme.totalElements : 0;
  const { totalPages } = usePagination(page, totalItems);

  if (isGuardLoading || isLoading) {
    return <ReviewRoomCardSkeleton count={6} className="mt-6" />;
  }

  if (!userReviewTheme || userReviewTheme.content.length === 0) {
    return <EmptyArrayContainer type="참여한" kind="방탈출" />;
  }

  return (
    <>
      <ThemeReviewContainer data={userReviewTheme.content} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
