import Image from 'next/image';
import searchIcon from '@/public/icons/search/search.svg';

export default function SearchBar() {
  return (
    <div className="h-20 w-full rounded-full bg-white">
      <form
        action="/search"
        method="get"
        className="flex h-full items-center justify-between px-8"
      >
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          className="w-full text-[28px]/[38px] text-basefont"
        />
        <button type="submit">
          <Image src={searchIcon} alt="검색하기" width={48} height={48} />
        </button>
      </form>
    </div>
  );
}
