import Link from 'next/link';
import { mypageNavList } from '@/constants/mypage/mypageNavList';

interface MyPageNavLinkProps {
  pathname: string;
}

export default function MyPageNavLink({ pathname }: MyPageNavLinkProps) {
  const list = Object.values(mypageNavList).map((item) => ({
    label: item.label,
    value: item.value,
  }));
  return (
    <div className="mx-auto grid w-full grid-cols-5 justify-between gap-2 md:gap-4 xl:w-xl">
      {list.map((data) => {
        return (
          <Link key={data.value} href={data.value}>
            <p
              className={`py-2 text-center text-xs font-semibold tracking-[-2.5%] text-font-baseWhite transition-colors duration-500 ease-in-out hover:bg-brand-main100 hover:!text-basefont md:py-4 md:text-base ${pathname === data.value ? 'border-b-[1px] border-line-white' : '!text-font-disabled'}`}
            >
              {data.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
