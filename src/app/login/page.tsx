'use client';

import classNames from 'classnames';
import Image from 'next/image';
import PageContainer from '@/src/components/@shared/layout/PageContainer';
import { easyLoginIcons } from '@/src/constants/login/easyLoginIcons';
import Logo from '@/public/images/logo.png';

const REDIRECT_URI = process.env.oauth2_host
const NAVER_CLIENT_ID = process.env.naver_client_id
const GOOGLE_CLIENT_ID = process.env.google_client_id
const GOOGLE_SCOPE = "email profile"
const KAKAO_CLIENT_ID = process.env.kakao_client_id

const handleNaverLogin = async () => {
  const state = Math.random().toString(36).substring(2, 15);

  await fetch('http://localhost:8080/auth/state', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: state,
  });

  window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${state}`;
};

const handleGoogleLogin = async () => {
  const state = Math.random().toString(36).substring(2, 15);

  await fetch('http://localhost:8080/auth/state', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: state,
  });

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${encodeURIComponent(
    GOOGLE_SCOPE
  )}&state=${state}`;
};

const handleKakaoLogin = async () => {
  const state = Math.random().toString(36).substring(2, 15);

  await fetch('http://localhost:8080/auth/state', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: state,
  });

  window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${state}`;
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
                  onClick={
                    key === 'naver'
                      ? handleNaverLogin
                      : key === 'google'
                        ? handleGoogleLogin
                        : handleKakaoLogin
                  }
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
