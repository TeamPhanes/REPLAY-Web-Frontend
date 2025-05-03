'use client';

import Link from 'next/link';
import MainBlueButton from '@/components/@shared/button/MainBlueButton';
import UserInfo from '@/components/@shared/gnb/UserInfo';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { useUserInfo } from '@/hooks/useUserInfo';

export default function AuthSection() {
  const hasHydrated = useHasHydrated();
  const { userInfo, isLoading } = useUserInfo();

  if (!hasHydrated || isLoading) {
    return (
      <div className="h-[58px] w-32 animate-pulse bg-loading rounded-2xl" />
    );
  }

  console.log(userInfo);

  if (!userInfo) {
    return (
      <Link href="/login">
        <MainBlueButton className="w-32">로그인</MainBlueButton>
      </Link>
    );
  }

  return <UserInfo user={userInfo} />;
}
