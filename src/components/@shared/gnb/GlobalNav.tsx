import Image from 'next/image';
import Link from 'next/link';
import AuthSection from '@/components/@shared/gnb/AuthSection';
import { navLabelList } from '@/constants/gnb/navLabelList';
import ReplayMainLogo from '@/public/images/Replay_Main_Logo.svg';

export default function GlobalNav() {
  return (
    <div className="h-[100px] w-full shadow-md">
      <div className="mx-auto flex h-full w-xl justify-between">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src={ReplayMainLogo}
            alt="Room Escape Play"
            width={184}
            height={68}
            quality={100}
            priority
          />
        </Link>
        <div className="flex items-center justify-center gap-6">
          {Object.keys(navLabelList).map((key) => {
            const list = navLabelList[key];
            return (
              <Link key={key} href={list.value}>
                <p className="text-xl font-semibold tracking-[-2.5%]">
                  {list.label}
                </p>
              </Link>
            );
          })}
          <AuthSection />
        </div>
      </div>
    </div>
  );
}
