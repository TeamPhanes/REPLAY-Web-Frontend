'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AuthSection from '@/components/@shared/gnb/AuthSection';
import SearchBar from '@/components/@shared/search/SearchBar';
import { navLabelList } from '@/constants/gnb/navLabelList';
import ReplayMainLogo from '@/public/images/Replay_Main_Logo.svg';
import MobileMenuBar from './MobileMenuBar';

export default function GlobalNav() {
  const pathName = usePathname();
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  return (
    <div className="relative">
      {isSearchFocus && <div className="fixed inset-0 bg-black/50 z-40" />}
      <div className="fixed top-0 left-0 h-[100px] w-full p-4 bg-brand-black z-50">
        <div className="mx-auto flex h-full max-w-screen-xl items-center xl:gap-6 justify-between relative">
          <Link
            href="/"
            className={`${isSearchFocus ? 'hidden xl:block' : ''} flex items-center justify-center`}
          >
            <Image
              src={ReplayMainLogo}
              alt="Room Escape Play"
              width={229}
              height={59}
              quality={100}
              className="w-[229px] h-[59px] shrink-0"
              priority
            />
          </Link>
          <div
            className={`shrink-0 flex items-center justify-center gap-10 transition-all duration-300 left-72 absolute ${isSearchFocus ? 'opacity-0 pointer-events-none ' : 'opacity-100'}
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
          <div className="w-full xl:w-auto flex items-center xl:gap-6 justify-end">
            <SearchBar isFocus={isSearchFocus} onFocus={setIsSearchFocus} />
            <AuthSection isFocus={isSearchFocus} />
            <MobileMenuBar isFocus={isSearchFocus} />
          </div>
        </div>
      </div>
    </div>
  );
}
