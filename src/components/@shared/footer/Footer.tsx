import Image from 'next/image';
import FooterLogo from '@/public/images/Replay_Sub_Logo.svg';

export default function Footer() {
  return (
    <div className="bg-line-secondDarkGray h-[333px] flex justify-center relative -z-10">
      <div className="flex items-center gap-4 absolute top-[124px]">
        <button type="button">회사소개</button>
        <button
          type="button"
          className="border-x-[1px] border-line-darkGray px-4"
        >
          개인정보처리방침
        </button>
        <button type="button">배너 광고문의</button>
      </div>
      <p className="text-base tracking-[-2.5%] font-normal text-font-baseGray absolute top-[218px]">
        © 2025 REPLAY. All rights reserved Made by Phanes Team
      </p>
      <div className="absolute left-10 top-10">
        <Image src={FooterLogo} alt="서비스 로고" width={229} height={59} />
        <div className="flex items-center gap-4 mt-6">
          <p className="text-base tracking-[-2.5%] text-font-baseWhite font-normal">
            서비스명 리플레이
          </p>
          <span className="border-l-2 border-white h-4" />
          <p className="text-base tracking-[-2.5%] text-font-baseWhite font-normal">
            팀 Phanes
          </p>
        </div>
        <p className="text-base tracking-[-2.5%] text-font-baseWhite font-normal mt-3">
          이메일 teamphanes@gmail.com
        </p>
        <p className="text-base tracking-[-2.5%] text-font-baseWhite font-normal mt-10">
          Copyright © Phanes
        </p>
      </div>
    </div>
  );
}
