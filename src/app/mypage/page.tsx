import MyPageContainer from '@/components/@shared/layout/MyPageContainer';
import PageContainer from '@/components/@shared/layout/PageContainer';
import CardContainer from '@/components/myPage/home/CardContainer';
import MyPageNav from '@/components/myPage/home/MyPageNav';
import TitleContainer from '@/components/myPage/home/TitleContainer';

export default function MyPage() {
  return (
    <PageContainer>
      <MyPageNav />
      <CardContainer />
    </PageContainer>
  );
}
