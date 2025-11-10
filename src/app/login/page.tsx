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
    <main className="bg-[linear-gradient(to_bottom,#333333_50%,#20239D_100%)] relative mx-auto pt-[148px] px-2 md:px-0 py-11 md:pb-[88px] min-h-screen h-full w-full">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={Logo}
          alt="서비스 로고"
          width={565}
          height={206}
          quality={100}
          priority
          className="w-[283px] h-[103px] md:w-[565px] md:h-[206px] mt-5"
        />
        <SocialLoginButton />
      </div>
    </main>
  );
}
