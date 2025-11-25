import Image from 'next/image';
import Link from 'next/link';
import { mockNoticesDetail } from '@/data/mockNoticesDetail';
import { periodFullYearMonthDay } from '@/utils/dateChange';
import chevronWhite from '@/public/icons/arrow/chevron_white_down.svg';
import ViewIcon from '@/public/icons/cardList/view.svg';

export default function NoticeDetailSection() {
  const data = mockNoticesDetail;
  return (
    <>
      <div className="w-full border-t-[5px] border-b-[1px] py-6 border-line-Gray flex flex-col gap-1">
        <h1 className="text-xl tracking-[-2.5%] text-font-baseWhite font-semibold">
          {data.title}
        </h1>
        <div className="flex justify-between items-center">
          <p className="text-sm tracking-[-2.5%] text-font-thirdWhite font-medium">
            Admin
          </p>
          <div className="flex items-center gap-[14px]">
            <Image
              src={ViewIcon}
              alt="게시물 확인 아이콘"
              width={18}
              height={8}
            />
            <p className="text-sm tracking-[-2.5%] font-medium text-font-baseWhite mr-1">
              {data.viewCount}
            </p>
            <p className="text-sm tracking-[-2.5%] font-medium text-font-baseWhite">
              {periodFullYearMonthDay(data.createdAt)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-[10px]">
        <p className="text-xl tracking-[-2.5%] text-font-baseWhite font-semibold">
          {data.content}
        </p>
      </div>
      <div className="w-full mt-20">
        <Link
          href={`/notice/${data.nextPage.id}`}
          className={`${data.nextPage === null ? 'hidden' : ''} border-y-[1px] py-6 border-line-secondDarkGray flex items-center`}
        >
          <Image
            src={chevronWhite}
            alt="아래 방향 화살표"
            width={24}
            height={24}
          />
          <p className="px-[10px] text-2xl tracking-[-2.5%] text-font-baseWhite font-semibold">
            다음글
          </p>
          <p className="text-lg tracking-[-2.5%] text-font-thirdWhite font-semibold">
            {data.nextPage.title}
          </p>
        </Link>
        <Link
          href={`/notice/${data.previousPage.id}`}
          className={`${data.previousPage === null ? 'hidden' : ''} ${data.nextPage === null ? 'border-t-[1px]' : ''} border-b-[1px] py-6 border-line-secondDarkGray flex items-center`}
        >
          <Image
            src={chevronWhite}
            alt="윗 방향 화살표"
            width={24}
            height={24}
            className="rotate-180"
          />
          <p className="px-[10px] text-2xl tracking-[-2.5%] text-font-baseWhite font-semibold">
            이전글
          </p>
          <p className="text-lg tracking-[-2.5%] text-font-thirdWhite font-semibold">
            {data.previousPage.title}
          </p>
        </Link>
      </div>
    </>
  );
}
