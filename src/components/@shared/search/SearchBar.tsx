'use client';

import { FormEvent, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useSearchStore } from '@/store/useSearchStore';
import WhiteSearchIcon from '@/public/icons/search/white_search.svg';

interface SearchBarProps {
  isFocus: boolean;
  onFocus: (isFocus: boolean) => void;
}

export default function SearchBar({ isFocus, onFocus }: SearchBarProps) {
  const { search, setSearch } = useSearchStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/search') {
      setSearch('');
    }
  }, [pathname, setSearch]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(search)}`);
    }
  };
  return (
    <div className="h-12 px-4 py-3 min-w-[440px] border-b-[1px] border-line-Gray shrink-0 relative">
      <form
        onSubmit={handleSubmit}
        className="flex h-full items-center justify-between"
      >
        <Image
          src={WhiteSearchIcon}
          alt="검색하기"
          width={24}
          height={24}
          className={`${isFocus ? 'absolute right-4' : 'mr-[6px]'}`}
        />
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          onFocus={() => onFocus(true)}
          onBlur={() => onFocus(false)}
          className="w-full bg-brand-black text-base tracking-[-2.5%] font-normal text-font-baseWhite placeholder-font-disabled transition-all duration-300 focus:w-[850px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}
