import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import { useReviewTheme } from '@/hooks/reactQuery/useReviewTheme';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function ThemeReviewSection() {
  const { userReviewTheme, isLoading } = useReviewTheme();
  const { isGuardLoading } = useAuthGuard(isLoading);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;
  return <RoomCardContainer data={userReviewTheme} reviewCheck />;
}
