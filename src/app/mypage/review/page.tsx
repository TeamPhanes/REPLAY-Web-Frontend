import PageContainer from '@/components/@shared/layout/PageContainer';
import MyPageNav from '@/components/myPage/home/MyPageNav';
import ReviewRenderingPage from '@/components/myPage/review/ReviewRenderingPage';

export default function MyReviewPage() {
  return (
    <PageContainer>
      <MyPageNav />
      <ReviewRenderingPage />
    </PageContainer>
  );
}
