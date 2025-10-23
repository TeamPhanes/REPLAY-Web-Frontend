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
      className="h-12 px-4 py-3 min-w-[440px] border-b-[1px] border-line-Gray shrink-0 relative"
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
          className={`${isFocus ? 'absolute right-4' : 'mr-[6px]'}`}
        />
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          className={`${isFocus ? 'w-[850px] pr-8' : ''} w-full bg-brand-black text-base tracking-[-2.5%] font-normal text-font-baseWhite placeholder-font-disabled transition-all duration-300`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => onFocus(true)}
        />
      </form>
      {isFocus && (
        <div className="bg-card-white w-full top-16 z-50 animate-dropdownIn absolute pt-4 pb-6 px-4 left-0 rounded-[4px] flex flex-col gap-3">
          <div className="flex justify-between items-center mb-2">
            <p className="text-base tracking-[-2.5%] text-font-disabled font-normal">
              최근 검색어
            </p>
            <button
              type="button"
              onClick={clearRecentSearch}
              className="text-base tracking-[-2.5%] text-font-disabled font-normal"
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
                  <p className="text-2xl tracking-[-2.5%] text-font-baseBlack font-normal">
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
