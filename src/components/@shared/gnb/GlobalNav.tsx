'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AuthSection from '@/components/@shared/gnb/AuthSection';
import SearchBar from '@/components/@shared/search/SearchBar';
import { navLabelList } from '@/constants/gnb/navLabelList';
import ReplayMainLogo from '@/public/images/Replay_Main_Logo.svg';

export default function GlobalNav() {
  const pathName = usePathname();
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  return (
    <div className="h-[140px] w-full p-2 md:p-0 bg-brand-black">
      <div className="mx-auto flex h-full md:w-xl items-center gap-6 justify-between relative">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src={ReplayMainLogo}
            alt="Room Escape Play"
            width={229}
            height={59}
            quality={100}
            className="w-[229px] h-[59px] md:w-[229px] md:h-[59px] shrink-0"
            priority
          />
        </Link>
        <div
          className={`shrink-0 flex items-center justify-center gap-2 md:gap-10 transition-all duration-300 left-[27%] absolute ${isSearchFocus ? 'opacity-0 pointer-events-none ' : 'opacity-100'}
  `}
        >
          {Object.keys(navLabelList).map((key) => {
            const list = navLabelList[key];
            return (
              <Link key={key} href={list.value}>
                <span
                  className={`${pathName === list.value ? 'text-brand-sub500' : ''} relative md:inline-block group text-base font-semibold tracking-[-2.5%] hidden duration-300`}
                >
                  {list.label}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-6">
          <SearchBar isFocus={isSearchFocus} onFocus={setIsSearchFocus} />
          <AuthSection />
        </div>
      </div>
    </div>
  );
}
