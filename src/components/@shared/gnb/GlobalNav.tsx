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
      {isSearchFocus && <div className="fixed inset-0 z-40 bg-black/50" />}
      <div className="fixed left-0 top-0 z-50 h-[100px] w-full bg-brand-black p-4">
        <div className="relative mx-auto flex h-full max-w-screen-xl items-center justify-between xl:gap-6">
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
              className="h-[52px] w-[200px] shrink-0 md:h-[59px] md:w-[229px]"
              priority
            />
          </Link>
          <div
            className={`absolute left-72 flex shrink-0 items-center justify-center gap-10 transition-all duration-300 ${isSearchFocus ? 'pointer-events-none opacity-0 ' : 'opacity-100'}
  `}
          >
            {Object.keys(navLabelList).map((key) => {
              const list = navLabelList[key];
              return (
                <Link key={key} href={list.value}>
                  <span
                    className={`${pathName === list.value ? 'text-brand-sub500' : ''} group relative hidden text-base font-semibold tracking-[-2.5%] duration-300 md:inline-block`}
                  >
                    {list.label}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="flex w-full items-center justify-end xl:w-auto xl:gap-6">
            <SearchBar isFocus={isSearchFocus} onFocus={setIsSearchFocus} />
            <AuthSection isFocus={isSearchFocus} />
            <MobileMenuBar isFocus={isSearchFocus} />
          </div>
        </div>
      </div>
    </div>
  );
}
