import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import { useLikeGathering } from '@/hooks/reactQuery/useLikeGathering';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function GatheringLikedSection() {
  const { userLikeGathering, isLoading, showLoading } = useLikeGathering();
  const { isGuardLoading } = useAuthGuard(showLoading);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;
  return userLikeGathering.length === 0 ? (
    <EmptyArrayContainer type="찜한" kind="모임" />
  ) : (
    <GatheringCardContainer data={userLikeGathering} />
  );
}
