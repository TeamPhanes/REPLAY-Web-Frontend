import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import { useReviewTheme } from '@/hooks/reactQuery/useReviewTheme';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function ThemeReviewSection() {
  const { userReviewTheme, isLoading, showLoading } = useReviewTheme();
  const { isGuardLoading } = useAuthGuard(showLoading);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;
  return useReviewTheme.length === 0 ? (
    <EmptyArrayContainer type="참여한" kind="방탈출" />
  ) : (
    <RoomCardContainer data={userReviewTheme} reviewCheck />
  );
}
