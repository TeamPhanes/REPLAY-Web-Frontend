import ComingSoon from '@/components/@shared/comingSoon/ComingSoon';
import MyPageContainer from '@/components/@shared/layout/MyPageContainer';
import MyPageNav from '@/components/myPage/home/MyPageNav';

export default function MySchedulePage() {
  return (
    <MyPageContainer>
      <MyPageNav />
      <ComingSoon />
    </MyPageContainer>
  );
}
