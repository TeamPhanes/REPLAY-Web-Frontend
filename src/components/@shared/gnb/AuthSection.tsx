'use client';

import { useAuthStore } from '@/store/authStore';
import UserInfo from '@/components/@shared/gnb/UserInfo';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';
import LoginButton from './LoginButton';

export default function AuthSection({ isFocus }: { isFocus: boolean }) {
  const { accessToken } = useAuthStore();
  const { userInfo, isLoading } = useUserInfo({ enabled: !!accessToken });

  // if (isLoading) {
  //   return (
  //     <div className="h-[58px] w-32 animate-pulse bg-loading rounded-2xl" />
  //   );
  // }

  return (
    <div className={`${isFocus ? 'hidden xl:block' : ''}`}>
      {userInfo ? (
        <UserInfo user={userInfo} />
      ) : (
        <LoginButton className="hidden md:flex" />
      )}
    </div>
  );
}
