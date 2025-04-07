import PageContainer from '@/src/components/@shared/layout/PageContainer';
import TitleContainer from '@/src/components/myPage/TitleContainer';
import CardContainer from '@/src/components/myPage/CardContainer';
import MyPageNav from '@/src/components/myPage/MyPageNav';

export default function MyPage() {
  return (
    <PageContainer>
      <MyPageNav />
      <TitleContainer>내 프로필</TitleContainer>
      <CardContainer />
    </PageContainer>
  );
}
