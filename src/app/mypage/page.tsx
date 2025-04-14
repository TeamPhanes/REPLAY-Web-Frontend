import TitleContainer from '@/src/components/myPage/home/TitleContainer';
import CardContainer from '@/src/components/myPage/home/CardContainer';
import MyPageNav from '@/src/components/myPage/home/MyPageNav';
import MyPageContainer from '@/src/components/@shared/layout/MyPageContainer';

export default function MyPage() {
  return (
    <MyPageContainer>
      <MyPageNav />
      <TitleContainer>내 프로필</TitleContainer>
      <CardContainer />
    </MyPageContainer>
  );
}
