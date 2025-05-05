import { Suspense } from 'react';
import MyPageContainer from '@/components/@shared/layout/MyPageContainer';
import RenderingPage from '@/components/myPage/favorite/RenderingPage';
import MyPageNav from '@/components/myPage/home/MyPageNav';

export default function MyFavoritePage() {
  return (
    <MyPageContainer>
      <MyPageNav />
      <Suspense>
        <RenderingPage />
      </Suspense>
    </MyPageContainer>
  );
}
