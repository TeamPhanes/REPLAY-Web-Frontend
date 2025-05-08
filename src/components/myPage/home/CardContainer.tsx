'use client';

import Loading from '@/components/@shared/loading/Loading';
import AchievementBadge from '@/components/gatheringDetail/AchievementBadge';
import CardBottomDate from '@/components/myPage/home/CardBottomDate';
import CardContentContainer from '@/components/myPage/home/CardContentContainer';
import MyPageModifyButton from '@/components/myPage/home/MyPageModifyButton';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function CardContainer() {
  const { userInfo, isLoading } = useUserInfo();
  const { isGuardLoading } = useAuthGuard(isLoading);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;

  return (
    <div className="relative mt-5 h-[983px] w-full rounded-[30px] bg-cardActive p-10">
      <MyPageModifyButton />
      <CardContentContainer user={userInfo} />
      <CardBottomDate
        updatedAt={userInfo.updatedAt}
        createdAt={userInfo.createdAt}
      />
      <AchievementBadge
        nickname={userInfo.nickname}
        achievement={userInfo.representAchievement}
        absoluteLayout="mt-9 bottom-2 right-10 gap-10"
        type="mypage"
      />
    </div>
  );
}
