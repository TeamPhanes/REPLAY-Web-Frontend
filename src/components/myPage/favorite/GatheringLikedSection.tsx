import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import CardSkeleton from '@/components/@shared/skeleton/CardSkeleton';
import { useLikeGathering } from '@/hooks/reactQuery/useLikeGathering';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';

interface GatheringLikedSectionProps {
  page: number;
  setPage: (value: number) => void;
}

export default function GatheringLikedSection({
  page,
  setPage,
}: GatheringLikedSectionProps) {
  const { accessToken } = useAuthStore();
  const { genreList, districtList } = useQueryStringStore();
  const { userLikeGathering, isLoading } = useLikeGathering(
    accessToken,
    districtList,
    genreList,
    page,
    12
  );
  const { isGuardLoading } = useAuthGuard(isLoading);
  const totalItems = userLikeGathering ? userLikeGathering.numberOfElements : 0;
  const { totalPages } = usePagination(page, totalItems, 12);

  if (isGuardLoading || isLoading) {
    return (
      <CardSkeleton className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6" />
    );
  }
  return (
    <>
      <p className="mt-6 text-sm tracking-[-2.5%] text-font-baseWhite font-normal">
        전체 {totalItems}개
      </p>
      <GatheringCardContainer data={userLikeGathering.content} favoriteCheck />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
