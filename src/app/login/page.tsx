'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import PageContainer from '@/components/@shared/layout/PageContainer';
import SocialLoginButton from '@/components/login/SocialLoginButton';
import Logo from '@/public/images/Replay_Main_Logo.svg';

export default function LoginPage() {
  useEffect(() => {
    if (window.opener) {
      window.opener.postMessage({ success: true }, window.origin);
      // window.close();
    }
  }, []);

  return (
    <PageContainer>
      <Image
        src={Logo}
        alt="서비스 로고"
        width={565}
        height={206}
        quality={100}
        priority
        className="absolute top-[88px] -translate-x-1/2 left-1/2"
      />
      <SocialLoginButton />
    </PageContainer>
  );
}
