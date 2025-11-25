'use client';

import Loading from '@/components/@shared/loading/Loading';
import AchievementBadge from '@/components/gatheringDetail/AchievementBadge';
import CardBottomDate from '@/components/myPage/home/CardBottomDate';
import CardContentContainer from '@/components/myPage/home/CardContentContainer';
import MyPageModifyButton from '@/components/myPage/home/MyPageModifyButton';
import { useUserProfile } from '@/hooks/reactQuery/useUserProfile';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function CardContainer() {
  const { userProfile, isLoading, showLoading } = useUserProfile();
  const { isGuardLoading } = useAuthGuard(showLoading);

  if (isGuardLoading) return <Loading isLoading={isLoading} />;

  return (
    <div className="relative mt-[248px] h-[1240px] md:h-[860px] w-full rounded-2xl bg-brand-main500 p-10">
      <MyPageModifyButton />
      <CardContentContainer user={userProfile} />
      <CardBottomDate
        updatedAt={userProfile.updatedAt}
        createdAt={userProfile.createdAt}
      />
      <AchievementBadge
        nickname={userProfile.nickname}
        achievement={userProfile.achievements}
        absoluteLayout="md:mt-9 bottom-2 left-1/2 transform -translate-x-1/2 md:transform-none md:left-auto md:right-10 gap-2 md:gap-10"
        type="mypage"
      />
    </div>
  );
}
