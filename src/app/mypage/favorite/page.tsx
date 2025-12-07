import PageContainer from '@/components/@shared/layout/PageContainer';
import FavoriteRenderingPage from '@/components/myPage/favorite/FavoriteRenderingPage';
import MyPageNav from '@/components/myPage/home/MyPageNav';

export default function MyFavoritePage() {
  return (
    <PageContainer>
      <MyPageNav />
      <FavoriteRenderingPage />
    </PageContainer>
  );
}
