import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import { useLikeTheme } from '@/hooks/reactQuery/useLikeTheme';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function ThemeLikedSection() {
  const { userLikeTheme, isLoading, showLoading } = useLikeTheme();
  const { isGuardLoading } = useAuthGuard(showLoading);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;
  return userLikeTheme.length === 0 ? (
    <EmptyArrayContainer type="찜한" kind="방탈출" />
  ) : (
    <RoomCardContainer data={userLikeTheme} />
  );
}
