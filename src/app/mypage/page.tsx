import MyPageContainer from '@/components/@shared/layout/MyPageContainer';
import CardContainer from '@/components/myPage/home/CardContainer';
import MyPageNav from '@/components/myPage/home/MyPageNav';
import TitleContainer from '@/components/myPage/home/TitleContainer';

export default function MyPage() {
  return (
    <MyPageContainer>
      <MyPageNav />
      <TitleContainer>내 프로필</TitleContainer>
      <CardContainer />
    </MyPageContainer>
  );
}
