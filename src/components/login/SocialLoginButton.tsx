import Image from 'next/image';
import classNames from 'classnames';
import ButtonContainer from '@/components/login/ButtonContainer';
import { easyLoginIcons } from '@/constants/login/easyLoginIcons';
import { useSocialLogin } from '@/hooks/useSocialLogin';

export default function SocialLoginButton() {
  const { login } = useSocialLogin();

  return (
    <ButtonContainer>
      <p className="font-bold text-2xl/[34px] tracking-[-2.5%] text-basefont">
        SNS 계정으로 로그인
      </p>
      <div className="mt-8 flex w-full justify-center gap-3 flex-col">
        {Object.keys(easyLoginIcons).map((key) => {
          const icon = easyLoginIcons[key];
          return (
            <div key={key} className="relative">
              <button
                type="button"
                className={classNames(
                  'flex h-[66px] w-full items-center justify-center rounded-[18px]',
                  icon.color
                )}
                onClick={() => login(key)}
              >
                <Image
                  src={icon.value}
                  alt={icon.label}
                  width={36}
                  height={36}
                  className="absolute left-4"
                />
                <p className="font-semibold text-base tracking-[-2.5%] text-basefont">
                  {icon.label}로 로그인하기
                </p>
              </button>
            </div>
          );
        })}
      </div>
    </ButtonContainer>
  );
}
