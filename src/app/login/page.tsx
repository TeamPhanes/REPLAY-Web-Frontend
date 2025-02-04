import PageContainer from '@/src/components/@shared/layout/PageContainer';
import Image from 'next/image';
import { easyLoginIcons } from '@/src/constants/login/easyLoginIcons';

export default function LoginPage() {
  return (
    <PageContainer>
      <div className="mx-auto flex h-[400px] w-[448px] flex-col items-center rounded-xl border-2 border-white shadow-xl">
        <Image
          src="/images/logo.png"
          alt="서비스 로고"
          width={182}
          height={183}
          quality={100}
        />
        <p className="text-sm">소셜 계정으로 가입하세요</p>
        <div className="mt-4 flex w-80 items-center">
          <span className="flex-grow border-t border-gray-300" />
          <p className="w-28 text-center text-xs text-gray-300">간편로그인</p>
          <span className="flex-grow border-t border-gray-300" />
        </div>
        <div className="mt-8 flex w-full justify-center gap-8">
          {Object.keys(easyLoginIcons).map((key) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center gap-1"
            >
              <button
                type="button"
                className={`flex h-14 w-14 items-center justify-center rounded-full ${easyLoginIcons[key].color}`}
              >
                <Image
                  src={easyLoginIcons[key].value}
                  alt={easyLoginIcons[key].label}
                  width={36}
                  height={36}
                />
              </button>
              <p className="text-xs">{easyLoginIcons[key].label}</p>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
