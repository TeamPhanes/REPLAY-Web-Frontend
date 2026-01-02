'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mockNotices } from '@/data/mockNotices';
import Pagination from '@/components/@shared/pagination/Pagination';
import { useGetNotice } from '@/hooks/reactQuery/useGetNotice';
import { usePagination } from '@/hooks/usePagination';
import { periodFullYearMonthDay } from '@/utils/dateChange';
import ViewIcon from '@/public/icons/cardList/view.svg';

export default function NoticeSection() {
  const [page, setPage] = useState(0);
  const totalItems = mockNotices ? mockNotices.totalCount : 0;
  const { totalPages } = usePagination(page, totalItems, 10);
  const { notice } = useGetNotice();
  return (
    <>
      {mockNotices.data.map((value) => {
        return (
          <Link
            key={value.id}
            href={`/notice/${value.id}`}
            className="flex flex-col py-6 gap-1 border-b-[1px] border-line-secondDarkGray"
          >
            <h2 className="text-xl tracking-[-2.5%] font-semibold text-font-baseWhite">
              {value.name}
            </h2>
            <div className="flex justify-between items-center">
              <p className="text-sm tracking-[-2.5%] font-medium text-font-baseWhite">
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
                  {value.viewCount}
                </p>
                <p className="text-sm tracking-[-2.5%] font-medium text-font-baseWhite">
                  {periodFullYearMonthDay(value.createdAt)}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
