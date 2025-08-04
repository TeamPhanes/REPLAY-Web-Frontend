import Image from 'next/image';
import Link from 'next/link';
import ChevronDarkRight from '@/public/icons/detail/chevron_dark_right.svg';

interface TagAndLinkProps {
  tag: string[];
}

export default function TagAndLink({ tag }: TagAndLinkProps) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        {tag.map((genre) => (
          <p
            key={genre}
            className="flex gap-[2px] rounded-full bg-white px-2 py-1 text-base font-semibold text-tag"
          >
            <span>#</span>
            {genre}
          </p>
        ))}
      </div>
      <Link href="/room" className="hidden md:block">
        <button
          type="button"
          className="flex items-center gap-[2px] rounded-full bg-homeFont px-3 py-1"
        >
          <p className="text-base font-normal tracking-[-2.5%] text-tag">
            같은 가게 다른 테마 보기
          </p>
          <Image
            src={ChevronDarkRight}
            alt="넘어가기 아이콘"
            width={20}
            height={20}
          />
        </button>
      </Link>
    </div>
  );
}
