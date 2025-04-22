import Image from 'next/image';

interface SearchBarProps {
  type?: 'dark' | 'white';
}

export default function SearchBar({ type = 'white' }: SearchBarProps) {
  return (
    <div
      className={`w-full rounded-full ${type === 'dark' ? 'h-[58px] bg-darkSearch' : 'h-20 bg-white'}`}
    >
      <form
        action="/search"
        method="get"
        className={`flex h-full items-center justify-between ${type === 'dark' ? 'py-[5px] px-6' : 'px-8'}`}
      >
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          className={`w-full ${type === 'dark' ? 'text-2xl/[34px] tracking-[-2.5%] placeholder:text-white text-white bg-darkSearch' : 'text-[28px]/[38px] text-basefont bg-white'}`}
        />
        <button type="submit">
          <Image
            src={
              type === 'dark'
                ? '/icons/search/dark_search.svg'
                : '/icons/search/search.svg'
            }
            alt="검색하기"
            width={48}
            height={48}
          />
        </button>
      </form>
    </div>
  );
}
