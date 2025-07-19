'use client';

import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import MainBlueButton from '@/components/@shared/button/MainBlueButton';
import UserInfo from '@/components/@shared/gnb/UserInfo';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';

export default function AuthSection() {
  const { accessToken } = useAuthStore();
  const { userInfo, isLoading } = useUserInfo({ enabled: !!accessToken });

  if (isLoading) {
    return (
      <div className="h-[58px] w-32 animate-pulse bg-loading rounded-2xl" />
    );
  }

  if (userInfo) {
    return <UserInfo user={userInfo} />;
  }

  return (
    <Link href="/login">
      <MainBlueButton className="w-32">로그인</MainBlueButton>
    </Link>
  );
}
