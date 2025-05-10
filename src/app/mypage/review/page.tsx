import { Suspense } from 'react';
import MyPageContainer from '@/components/@shared/layout/MyPageContainer';
import MyPageNav from '@/components/myPage/home/MyPageNav';
import ReviewRenderingPage from '@/components/myPage/review/ReviewRenderingPage';

export default function MyReviewPage() {
  return (
    <MyPageContainer>
      <MyPageNav />
      <Suspense>
        <ReviewRenderingPage />
      </Suspense>
    </MyPageContainer>
  );
}
