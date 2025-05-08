import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import { useLikeGathering } from '@/hooks/reactQuery/useLikeGathering';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function GatheringLikedSection() {
  const { userLikeGathering, isLoading } = useLikeGathering();
  const { isGuardLoading } = useAuthGuard(isLoading);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;
  return <GatheringCardContainer data={userLikeGathering} />;
}
