'use client';

import { mockOtherUser } from '@/data/mockUser';
import Loading from '@/components/@shared/loading/Loading';
import AchievementBadge from '@/components/gatheringDetail/AchievementBadge';
import CardBottomDate from '@/components/myPage/home/CardBottomDate';
import CardContentContainer from '@/components/myPage/home/CardContentContainer';
import MyPageModifyButton from '@/components/myPage/home/MyPageModifyButton';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function CardContainer() {
  const { userInfo, isLoading, showLoading } = useUserInfo();
  const { isGuardLoading } = useAuthGuard(showLoading);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;

  return (
    <div className="relative mt-[248px] h-[1240px] md:h-[860px] w-full rounded-2xl bg-brand-main500 p-10">
      <MyPageModifyButton />
      <CardContentContainer user={mockOtherUser} />
      <CardBottomDate
        updatedAt={mockOtherUser.updatedAt}
        createdAt={mockOtherUser.createdAt}
      />
      <AchievementBadge
        nickname={mockOtherUser.nickname}
        achievement={mockOtherUser.representAchievement}
        absoluteLayout="md:mt-9 bottom-2 left-1/2 transform -translate-x-1/2 md:transform-none md:left-auto md:right-10 gap-2 md:gap-10"
        type="mypage"
      />
    </div>
  );
}
