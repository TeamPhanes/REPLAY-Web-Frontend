'use client';

import { FormEvent, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useRecentSearchStore } from '@/store/useRecentSearchStore';
import { useSearchStore } from '@/store/useSearchStore';
import GrayDeleteIcon from '@/public/icons/delete/gray_delete.svg';
import WhiteSearchIcon from '@/public/icons/search/white_search.svg';

interface SearchBarProps {
  isFocus: boolean;
  onFocus: (isFocus: boolean) => void;
}

export default function SearchBar({ isFocus, onFocus }: SearchBarProps) {
  const searchBarRef = useRef<HTMLDivElement>(null);
  const { search, setSearch } = useSearchStore();
  const router = useRouter();
  const pathname = usePathname();
  const {
    recentSearchList,
    addRecentSearch,
    removeRecentSearch,
    clearRecentSearch,
  } = useRecentSearchStore();

  useEffect(() => {
    if (pathname !== '/search') {
      setSearch('');
    }
  }, [pathname, setSearch]);

  useEffect(() => {
    if (!isFocus) return undefined;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(e.target as Node)
      ) {
        onFocus(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onFocus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isFocus, onFocus]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(search)}`);
      addRecentSearch(search);
      onFocus(false);
    }
  };
  return (
    <div
      ref={searchBarRef}
      className={`${isFocus ? 'w-full border-b-[1px] px-4 py-3 xl:w-auto' : 'px-0 py-0 xl:px-4 xl:py-3'} relative h-12 border-line-Gray xl:shrink-0 xl:border-b-[1px]`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex h-full items-center justify-between"
      >
        <Image
          src={WhiteSearchIcon}
          alt="검색하기"
          width={24}
          height={24}
          className={`${isFocus ? 'absolute right-4' : 'mr-2'} cursor-pointer`}
          onClick={() => onFocus(true)}
        />
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          className={`${isFocus ? 'pr-8 xl:w-[780px]' : 'w-0 xl:w-full'} bg-brand-black text-base font-normal tracking-[-2.5%] text-font-baseWhite placeholder-font-disabled xl:transition-all xl:duration-300`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => onFocus(true)}
        />
      </form>
      {isFocus && (
        <div className="absolute left-0 top-16 z-50 flex w-full animate-dropdownIn flex-col gap-3 rounded-[4px] bg-card-white px-4 pb-6 pt-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-base font-normal tracking-[-2.5%] text-font-disabled">
              최근 검색어
            </p>
            <button
              type="button"
              onClick={clearRecentSearch}
              className="text-base font-normal tracking-[-2.5%] text-font-disabled"
            >
              전체 삭제
            </button>
          </div>
          {recentSearchList.map((list, index) => {
            return (
              <div key={index} className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setSearch(list);
                    router.push(`/search?keyword=${encodeURIComponent(list)}`);
                    addRecentSearch(list);
                    onFocus(false);
                  }}
                >
                  <p className="text-2xl font-normal tracking-[-2.5%] text-font-baseBlack">
                    {list}
                  </p>
                </button>
                <button type="button" onClick={() => removeRecentSearch(list)}>
                  <Image
                    src={GrayDeleteIcon}
                    alt="검색어 삭제"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
