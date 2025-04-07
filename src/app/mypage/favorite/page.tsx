import PageContainer from '@/src/components/@shared/layout/PageContainer';
import MyPageNav from '@/src/components/myPage/MyPageNav';

export default function MyFavoritePage() {
  return (
    <PageContainer>
      <MyPageNav />
      <p>관심 목록 페이지</p>
    </PageContainer>
  );
}
