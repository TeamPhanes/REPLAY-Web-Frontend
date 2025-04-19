import Link from 'next/link';
import { mypageNavList } from '@/constants/mypage/mypageNavList';

interface MyPageNavLinkProps {
  pathname: string;
}

export default function MyPageNavLink({ pathname }: MyPageNavLinkProps) {
  return (
    <>
      {Object.keys(mypageNavList).map((key) => {
        const list = mypageNavList[key];
        return (
          <div key={key} className="flex items-center justify-center">
            <Link href={list.value}>
              <p
                className={`rounded-full px-6 py-2 text-2xl/[34px] font-normal tracking-[-2.5%] text-white transition-colors duration-500 ease-in-out hover:bg-cardHover hover:text-basefont ${pathname === list.value ? 'bg-cardActive' : ''}`}
              >
                {list.label}
              </p>
            </Link>
          </div>
        );
      })}
    </>
  );
}
