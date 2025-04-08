import PageContainer from '@/src/components/@shared/layout/PageContainer';
import TitleContainer from '@/src/components/myPage/home/TitleContainer';
import CardContainer from '@/src/components/myPage/home/CardContainer';
import MyPageNav from '@/src/components/myPage/home/MyPageNav';

export default function MyPage() {
  return (
    <PageContainer>
      <MyPageNav />
      <TitleContainer>내 프로필</TitleContainer>
      <CardContainer />
    </PageContainer>
  );
}
