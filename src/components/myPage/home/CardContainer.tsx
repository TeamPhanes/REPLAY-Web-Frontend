import { mockUser } from '@/data/mockUser';
import AchievementBadge from '@/components/gatheringDetail/AchievementBadge';
import CardBottomDate from '@/components/myPage/home/CardBottomDate';
import CardContentContainer from '@/components/myPage/home/CardContentContainer';
import MyPageModifyButton from '@/components/myPage/home/MyPageModifyButton';

export default function CardContainer() {
  return (
    <div className="relative mt-5 h-[983px] w-full rounded-[30px] bg-cardActive p-10">
      <MyPageModifyButton />
      <CardContentContainer user={mockUser} />
      <CardBottomDate
        updatedAt={mockUser.updatedAt}
        createdAt={mockUser.createdAt}
      />
      <AchievementBadge
        nickname={mockUser.nickname}
        achievement={mockUser.representAchievement}
        absoluteLayout="mt-9 bottom-2 right-10 gap-10"
        type="mypage"
      />
    </div>
  );
}
