import MyPageContainer from '@/components/@shared/layout/MyPageContainer';
import RenderingPage from '@/components/myPage/favorite/RenderingPage';
import MyPageNav from '@/components/myPage/home/MyPageNav';

export default function MyFavoritePage() {
  return (
    <MyPageContainer>
      <MyPageNav />
      <RenderingPage />
    </MyPageContainer>
  );
}
