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
    <div className="flex mx-auto w-xl justify-between">
      {list.map((data) => {
        return (
          <div
            key={data.value}
            className="items-center justify-center hidden md:flex"
          >
            <Link href={data.value}>
              <p
                className={`px-16 py-4 text-base font-semibold tracking-[-2.5%] text-font-baseWhite transition-colors duration-500 ease-in-out hover:bg-brand-main100 hover:!text-basefont ${pathname === data.value ? 'border-line-white border-b-[1px]' : '!text-font-disabled'}`}
              >
                {data.label}
              </p>
            </Link>
          </div>
        );
      })}
      <div className="items-center flex md:hidden gap-20">
        <p className="rounded-full px-6 py-2 text-2xl/[34px] font-normal tracking-[-2.5%] text-white transition-colors duration-500 ease-in-out bg-cardActive">
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
