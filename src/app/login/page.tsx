'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
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
    <main className="relative mx-auto h-full min-h-screen w-full bg-[linear-gradient(to_bottom,#333333_50%,#20239D_100%)] px-2 py-11 pt-[148px] md:px-0 md:pb-[88px]">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={Logo}
          alt="서비스 로고"
          width={565}
          height={206}
          quality={100}
          priority
          className="mt-5 h-[103px] w-[283px] md:h-[206px] md:w-[565px]"
        />
        <SocialLoginButton />
      </div>
    </main>
  );
}
