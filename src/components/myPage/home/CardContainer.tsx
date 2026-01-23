'use client';

import IdCardBack from '@/components/gatheringDetail/modal/IdCardBack';
import IdCardFront from '@/components/gatheringDetail/modal/IdCardFront';
import IdCardModalContainer from '@/components/gatheringDetail/modal/IdCardModalContainer';
import CardBottomDate from '@/components/myPage/home/CardBottomDate';
import CardContentContainer from '@/components/myPage/home/CardContentContainer';
import MyPageModifyButton from '@/components/myPage/home/MyPageModifyButton';
import { useUserProfile } from '@/hooks/reactQuery/useUserProfile';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function CardContainer() {
  const { userProfile, showLoading } = useUserProfile();
  const { isGuardLoading } = useAuthGuard(showLoading);

  if (isGuardLoading) return null;

  return (
    <>
      <div className="relative mt-[248px] hidden h-[1240px] w-full rounded-2xl bg-brand-main500 p-10 md:h-[860px] xl:block">
        <MyPageModifyButton />
        <CardContentContainer user={userProfile} />
        <CardBottomDate
          updatedAt={userProfile.updatedAt}
          createdAt={userProfile.createdAt}
        />
      </div>
      <div className="relative mt-40 flex items-center justify-center md:mt-[248px] xl:hidden">
        <IdCardModalContainer>
          <IdCardFront userData={userProfile} />
          <IdCardBack userData={userProfile} />
        </IdCardModalContainer>
      </div>
    </>
  );
}
