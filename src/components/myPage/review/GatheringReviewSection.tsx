import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import { useReviewGathering } from '@/hooks/reactQuery/useReviewGathering';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function GatheringReviewSection() {
  const { userReviewGathering, isLoading, showLoading } = useReviewGathering();
  const { isGuardLoading } = useAuthGuard(showLoading);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;
  return userReviewGathering.length === 0 ? (
    <EmptyArrayContainer type="참여한" kind="모임" />
  ) : (
    <GatheringCardContainer data={userReviewGathering} reviewCheck />
  );
}
