import { ReactNode } from 'react';
import Image from 'next/image';
import { useOpen } from '@/hooks/useOpen';
import MainLogo from '@/public/images/Replay_Main_Logo.svg';

interface IdCardModalContainerProps {
  children: ReactNode;
}

export default function IdCardModalContainer({
  children,
}: IdCardModalContainerProps) {
  const { isOpen, toggleOpen } = useOpen();

  return (
    <div
      className={`${isOpen ? 'rotate-y-180' : ''} scrollbar-y-hidden flex h-[750px] w-full max-w-[480px] flex-col items-center rounded-[30px] bg-brand-main500 p-5 duration-500 preserve-3d md:h-[918px] md:w-[640px] md:max-w-none`}
      onClick={toggleOpen}
    >
      <div className="absolute left-0 top-[140px] -z-10 h-[460px] w-full bg-white md:top-[180px] md:h-[558px]" />
      <div className="absolute left-0 top-[580px] h-3 w-full bg-brand-sub300 md:top-[716px]" />
      {children}
      <Image
        src={MainLogo}
        alt="로고"
        width={458}
        height={118}
        quality={100}
        className={`${isOpen ? 'rotate-y-180' : ''} absolute bottom-8 h-24 w-[373px] md:bottom-8 md:h-[118px] md:w-[458px]`}
      />
    </div>
  );
}
