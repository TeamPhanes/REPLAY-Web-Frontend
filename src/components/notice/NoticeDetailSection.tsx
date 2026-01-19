'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { useGetNoticeDetail } from '@/hooks/reactQuery/useGetNoticeDetail';
import { periodFullYearMonthDay } from '@/utils/dateChange';
import chevronWhite from '@/public/icons/arrow/chevron_white_down.svg';
import ViewIcon from '@/public/icons/cardList/view.svg';
import Loading from '../@shared/loading/Loading';

export default function NoticeDetailSection() {
  const { id } = useParams();
  const { noticeDetail, isLoading } = useGetNoticeDetail(id);
  const data = noticeDetail;

  if (isLoading) return <Loading isLoading={isLoading} />;
  return (
    <>
      <div className="flex w-full flex-col gap-1 border-b-[1px] border-t-[5px] border-line-Gray py-6">
        <h1 className="text-xl font-semibold tracking-[-2.5%] text-font-baseWhite">
          {data.current.title}
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium tracking-[-2.5%] text-font-thirdWhite">
            Admin
          </p>
          <div className="flex items-center gap-[14px]">
            {/* <Image
              src={ViewIcon}
              alt="게시물 확인 아이콘"
              width={18}
              height={8}
            />
            <p className="text-sm tracking-[-2.5%] font-medium text-font-baseWhite mr-1">
              {data.viewCount}
            </p> */}
            <p className="text-sm font-medium tracking-[-2.5%] text-font-baseWhite">
              {periodFullYearMonthDay(data.current.createdAt)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-[10px]">
        {parse(DOMPurify.sanitize(data.current.content))}
      </div>
      <div className="mt-20 w-full">
        {data.prev === null ? null : (
          <Link
            href={`/notice/${data.prev.id}`}
            className={`${data.prev === null ? 'hidden' : ''} ${data.next === null ? 'border-b-[1px]' : ''} flex items-center border-t-[1px] border-line-secondDarkGray py-6`}
          >
            <Image
              src={chevronWhite}
              alt="윗 방향 화살표"
              width={24}
              height={24}
              className="rotate-180"
            />
            <p className="px-[10px] text-2xl font-semibold tracking-[-2.5%] text-font-baseWhite">
              이전글
            </p>
            <p className="text-lg font-semibold tracking-[-2.5%] text-font-thirdWhite">
              {data.prev.title}
            </p>
          </Link>
        )}
        {data.next === null ? null : (
          <Link
            href={`/notice/${data.next.id}`}
            className="flex items-center border-y-[1px] border-line-secondDarkGray py-6"
          >
            <Image
              src={chevronWhite}
              alt="아래 방향 화살표"
              width={24}
              height={24}
            />
            <p className="px-[10px] text-2xl font-semibold tracking-[-2.5%] text-font-baseWhite">
              다음글
            </p>
            <p className="text-lg font-semibold tracking-[-2.5%] text-font-thirdWhite">
              {data.next.title}
            </p>
          </Link>
        )}
      </div>
    </>
  );
}
