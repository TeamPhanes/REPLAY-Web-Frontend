import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import GatheringCardReviewContainer from '@/components/@shared/cardList/GatheringCardReviewContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import ReviewGatheringCardSkeleton from '@/components/@shared/skeleton/ReviewGatheringCardSkeleton';
import { useReviewGathering } from '@/hooks/reactQuery/useReviewGathering';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';

interface GatheringReviewSectionProps {
  page: number;
  setPage: (value: number) => void;
}

export default function GatheringReviewSection({
  page,
  setPage,
}: GatheringReviewSectionProps) {
  const { accessToken } = useAuthStore();
  const { genreList, districtList } = useQueryStringStore();
  const { userReviewGathering, isLoading, showLoading } = useReviewGathering(
    accessToken,
    districtList,
    genreList,
    page,
    12
  );
  const { isGuardLoading } = useAuthGuard(showLoading);
  const totalItems = userReviewGathering
    ? userReviewGathering.totalElements
    : 0;
  const { totalPages } = usePagination(page, totalItems);

  if (isGuardLoading || isLoading) {
    return <ReviewGatheringCardSkeleton count={6} className="mt-6" />;
  }

  if (!userReviewGathering || userReviewGathering.content.length === 0) {
    return <EmptyArrayContainer type="참여한" kind="모임" />;
  }

  return (
    <>
      <GatheringCardReviewContainer data={userReviewGathering.content} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
