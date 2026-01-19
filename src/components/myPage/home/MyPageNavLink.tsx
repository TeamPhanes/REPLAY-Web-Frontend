import Image from 'next/image';
import Link from 'next/link';
import LinkDropdown from '@/components/@shared/dropdown/LinkDropdown';
import { mypageNavList } from '@/constants/mypage/mypageNavList';
import { useOpen } from '@/hooks/useOpen';
import RowsSvg from '@/public/icons/mypage/rows.svg';

interface MyPageNavLinkProps {
  pathname: string;
}

export default function MyPageNavLink({ pathname }: MyPageNavLinkProps) {
  const list = Object.values(mypageNavList).map((item) => ({
    label: item.label,
    value: item.value,
  }));
  const targetList = mypageNavList[pathname];
  const { isOpen, toggleOpen } = useOpen();
  return (
    <div className="mx-auto grid w-xl grid-cols-6 justify-between gap-4">
      {list.map((data) => {
        return (
          <Link key={data.value} href={data.value}>
            <p
              className={`py-4 text-center text-base font-semibold tracking-[-2.5%] text-font-baseWhite transition-colors duration-500 ease-in-out hover:bg-brand-main100 hover:!text-basefont ${pathname === data.value ? 'border-b-[1px] border-line-white' : '!text-font-disabled'}`}
            >
              {data.label}
            </p>
          </Link>
        );
      })}
      <div className="flex items-center gap-20 md:hidden">
        <p className="rounded-full bg-cardActive px-6 py-2 text-2xl/[34px] font-normal tracking-[-2.5%] text-white transition-colors duration-500 ease-in-out">
          {targetList.label}
        </p>
        <LinkDropdown
          list={list}
          isOpen={isOpen}
          onOpenChange={toggleOpen}
          marginTop={20}
          align="center"
        >
          <Image src={RowsSvg} alt="링크 더 보기" width={24} height={24} />
        </LinkDropdown>
      </div>
    </div>
  );
}
