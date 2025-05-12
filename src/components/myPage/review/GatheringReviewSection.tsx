import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import { useReviewGathering } from '@/hooks/reactQuery/useReviewGathering';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function GatheringReviewSection() {
  const { userReviewGathering, isLoading, showLoading } = useReviewGathering();
  const { isGuardLoading } = useAuthGuard(showLoading);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;
  return <GatheringCardContainer data={userReviewGathering} reviewCheck />;
}
