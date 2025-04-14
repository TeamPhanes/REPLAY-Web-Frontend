import CardContentContainer from '@/src/components/myPage/home/CardContentContainer';
import CardBottomDate from '@/src/components/myPage/home/CardBottomDate';
import AchievementBadge from '@/src/components/gatheringDetail/AchievementBadge';
import { mockUser } from '@/src/data/mockUser';
import MyPageModifyButton from './MyPageModifyButton';

export default function CardContainer() {
  return (
    <div className="bg-cardActive relative mt-5 h-[983px] w-full rounded-[30px] p-10">
      <MyPageModifyButton />
      <CardContentContainer user={mockUser} />
      <CardBottomDate
        updatedAt={mockUser.updatedAt}
        createdAt={mockUser.createdAt}
      />
      <AchievementBadge
        nickname={mockUser.nickname}
        achievement={mockUser.representAchievement}
        type="mypage"
      />
    </div>
  );
}
