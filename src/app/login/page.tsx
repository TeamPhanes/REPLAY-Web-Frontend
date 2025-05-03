'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import PageContainer from '@/components/@shared/layout/PageContainer';
import SocialLoginButton from '@/components/login/SocialLoginButton';
import Logo from '@/public/images/Replay_Main_Logo.svg';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = useAuthStore.getState().accessToken;

    if (token) {
      router.push('/');
    }
  }, [router]);

  return (
    <PageContainer>
      <Image
        src={Logo}
        alt="서비스 로고"
        width={565}
        height={206}
        quality={100}
        priority
        className="absolute w-[565px] h-[206px] top-[88px] -translate-x-1/2 left-1/2"
      />
      <SocialLoginButton />
    </PageContainer>
  );
}
