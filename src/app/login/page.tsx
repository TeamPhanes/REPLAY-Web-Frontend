'use client';

import Image from 'next/image';
import classNames from 'classnames';
import PageContainer from '@/components/@shared/layout/PageContainer';
import { easyLoginIcons } from '@/constants/login/easyLoginIcons';
import Logo from '@/public/images/logo.png';

const handleNaverLogin = () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/naver`;
  window.open(url, '_blank', 'width=1024,height=768');
};

const handleGoogleLogin = () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  window.open(url, '_blank', 'width=1024,height=768');
};

const handleKakaoLogin = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/kakao`;
  window.open(url, '_blank', 'width=1024,height=768');
};

export default function LoginPage() {
  return (
    <PageContainer>
      <div className="mx-auto flex h-[400px] w-[448px] flex-col items-center rounded-xl border-2 border-white shadow-xl">
        <Image
          src={Logo}
          alt="서비스 로고"
          width={182}
          height={183}
          quality={100}
          priority
        />
        <p className="text-sm">소셜 계정으로 가입하세요</p>
        <div className="mt-4 flex w-80 items-center">
          <span className="flex-grow border-t border-gray-300" />
          <p className="w-28 text-center text-xs text-gray-300">간편로그인</p>
          <span className="flex-grow border-t border-gray-300" />
        </div>
        <div className="mt-8 flex w-full justify-center gap-8">
          {Object.keys(easyLoginIcons).map((key) => {
            const icon = easyLoginIcons[key];
            const loginHandlers = {
              naver: () => handleNaverLogin(),
              google: () => handleGoogleLogin(),
              kakao: () => handleKakaoLogin(),
            } as const;

            return (
              <div
                key={key}
                className="flex flex-col items-center justify-center gap-1"
              >
                <button
                  type="button"
                  className={classNames(
                    'flex h-14 w-14 items-center justify-center rounded-full',
                    icon.color
                  )}
                  onClick={loginHandlers[key as keyof typeof loginHandlers]}
                >
                  <Image
                    src={icon.value}
                    alt={icon.label}
                    width={36}
                    height={36}
                  />
                </button>
                <p className="text-xs">{icon.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
}
