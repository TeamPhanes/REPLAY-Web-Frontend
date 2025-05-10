import { Suspense } from 'react';
import MyPageContainer from '@/components/@shared/layout/MyPageContainer';
import FavoriteRenderingPage from '@/components/myPage/favorite/FavoriteRenderingPage';
import MyPageNav from '@/components/myPage/home/MyPageNav';

export default function MyFavoritePage() {
  return (
    <MyPageContainer>
      <MyPageNav />
      <Suspense>
        <FavoriteRenderingPage />
      </Suspense>
    </MyPageContainer>
  );
}
