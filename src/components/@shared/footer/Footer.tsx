import Image from 'next/image';
import FooterLogo from '@/public/images/Replay_Sub_Logo.svg';

export default function Footer() {
  return (
    <div className="relative -z-10 flex flex-col justify-center bg-line-secondDarkGray px-5 py-[40px] xl:h-[333px] xl:flex-row">
      <Image
        src={FooterLogo}
        alt="서비스 로고"
        width={229}
        height={59}
        className="h-[31px] w-[120px] xl:absolute xl:left-10 xl:top-10 xl:h-[59px] xl:w-[229px]"
      />
      <div className="mt-10 flex items-center gap-4 xl:absolute xl:top-[124px]">
        <button type="button">회사소개</button>
        <button
          type="button"
          className="border-x-[1px] border-line-darkGray px-4"
        >
          개인정보처리방침
        </button>
        <button type="button">배너 광고문의</button>
      </div>
      <div className="xl:absolute xl:left-10 xl:top-24">
        <div className="mt-6 flex items-center gap-4">
          <p className="text-base font-normal tracking-[-2.5%] text-font-baseWhite">
            서비스명 리플레이
          </p>
          <span className="h-4 border-l-2 border-white" />
          <p className="text-base font-normal tracking-[-2.5%] text-font-baseWhite">
            팀 Phanes
          </p>
        </div>
        <p className="mt-3 text-base font-normal tracking-[-2.5%] text-font-baseWhite">
          이메일 teamphanes@gmail.com
        </p>
        <p className="mt-10 text-base font-normal tracking-[-2.5%] text-font-baseWhite">
          Copyright © Phanes
        </p>
      </div>
      <p className="mt-10 text-base font-normal tracking-[-2.5%] text-font-baseGray xl:absolute xl:top-[218px]">
        © 2025 REPLAY. All rights reserved Made by Phanes Team
      </p>
    </div>
  );
}
