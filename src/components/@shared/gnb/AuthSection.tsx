'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import UserInfo from '@/components/@shared/gnb/UserInfo';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';
import defaultUserImage from '@/public/icons/user/user_default.svg';

export default function AuthSection() {
  const { accessToken } = useAuthStore();
  const { userInfo, isLoading } = useUserInfo({ enabled: !!accessToken });

  // if (isLoading) {
  //   return (
  //     <div className="h-[58px] w-32 animate-pulse bg-loading rounded-2xl" />
  //   );
  // }

  // if (userInfo) {
  //   return <UserInfo user={userInfo} />;
  // }
  return userInfo ? (
    <UserInfo user={userInfo} />
  ) : (
    <Link href="/login" className="shrink-0">
      <button type="button" className="flex items-center gap-[6px] shrink-0">
        <Image
          src={defaultUserImage}
          alt="유저 기본 이미지"
          width={24}
          height={24}
        />
        로그인
      </button>
    </Link>
  );
}
