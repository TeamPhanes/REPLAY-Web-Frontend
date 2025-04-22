import MyPageContainer from '@/components/@shared/layout/MyPageContainer';
import MyPageNav from '@/components/myPage/home/MyPageNav';

export default function MySchedulePage() {
  return (
    <MyPageContainer>
      <MyPageNav />
      <p>나의 일정 페이지</p>
      <div className="relative h-40 w-40 perspective-1000">
        <div className="relative h-full w-full duration-500 preserve-3d hover:rotate-y-180">
          <div className="absolute z-20 h-full w-full bg-yellow-100 backface-hidden text-basefont">
            앞면
          </div>
          <div className="absolute z-10 h-full w-full bg-blue-50 backface-hidden rotate-y-180 text-basefont">
            뒷면
          </div>
        </div>
      </div>
    </MyPageContainer>
  );
}
