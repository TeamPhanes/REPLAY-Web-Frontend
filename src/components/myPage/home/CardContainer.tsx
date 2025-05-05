'use client';

import Loading from '@/components/@shared/loading/Loading';
import AchievementBadge from '@/components/gatheringDetail/AchievementBadge';
import CardBottomDate from '@/components/myPage/home/CardBottomDate';
import CardContentContainer from '@/components/myPage/home/CardContentContainer';
import MyPageModifyButton from '@/components/myPage/home/MyPageModifyButton';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { useUserInfo } from '@/hooks/useUserInfo';

export default function CardContainer() {
  const hasHydrated = useHasHydrated();
  const { userInfo, isLoading } = useUserInfo();

  if (!hasHydrated || isLoading) return <Loading isLoading={isLoading} />;

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
