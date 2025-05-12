import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import { useLikeTheme } from '@/hooks/reactQuery/useLikeTheme';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function ThemeLikedSection() {
  const { userLikeTheme, isLoading, showLoading } = useLikeTheme();
  const { isGuardLoading } = useAuthGuard(showLoading);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;
  return <RoomCardContainer data={userLikeTheme} />;
}
