import Link from 'next/link';
import { mypageNavList } from '@/src/constants/mypage/mypageNavList';

interface MyPageNavLinkProps {
  pathname: string;
}

export default function MyPageNavLink({ pathname }: MyPageNavLinkProps) {
  return (
    <>
      {Object.keys(mypageNavList).map((key) => {
        const list = mypageNavList[key];
        return (
          <div
            key={key}
            className="flex items-center justify-center border-t-[1px] border-spot py-3"
          >
            <Link href={list.value}>
              <p
                className={`text-xl tracking-[-2.5%] ${pathname === list.value ? 'font-semibold text-mainBlue' : 'font-normal text-white'}`}
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
