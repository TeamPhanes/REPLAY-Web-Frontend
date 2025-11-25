import PageContainer from '@/components/@shared/layout/PageContainer';
import CardContainer from '@/components/myPage/home/CardContainer';
import MyPageNav from '@/components/myPage/home/MyPageNav';

export default function MyPage() {
  return (
    <PageContainer>
      <MyPageNav />
      <CardContainer />
    </PageContainer>
  );
}
