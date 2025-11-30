import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mockMyComments } from '@/data/mockComments';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import LineSkeleton from '@/components/@shared/skeleton/LineSkeleton';
import MyPageCommentSkeleton from '@/components/@shared/skeleton/MyPageCommentSkeleton';
import { useMyComment } from '@/hooks/reactQuery/useMyComment';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';
import { MyCommentDTO } from '@/types/comment/comment.type';
import { periodFullYearMonthDay } from '@/utils/dateChange';
import GrayLinkExternal from '@/public/icons/link/gray_link_external.svg';

interface CommentCardSectionProps {
  sort: string;
}

export default function CommentCardSection({ sort }: CommentCardSectionProps) {
  const [page, setPage] = useState(0);
  const { MyComment, isLoading, showLoading } = useMyComment(sort, page, 10);
  const { isGuardLoading } = useAuthGuard(showLoading);
  const { totalPages } = usePagination(page, MyComment?.totalCount);
  const toDay = periodFullYearMonthDay(new Date().toLocaleDateString());

  if (isGuardLoading || isLoading) {
    return (
      <>
        <LineSkeleton className="mt-8 h-[34px]" />
        <MyPageCommentSkeleton count={6} className="mt-2" />
      </>
    );
  }

  // if (!MyComment || Object.keys(MyComment.data).length === 0) {
  //   return <EmptyArrayContainer type="작성한" kind="댓글" />;
  // }
  return (
    <>
      {Object.entries(mockMyComments.data as MyCommentDTO['get']).map(
        ([date, comments]) => (
          <div key={date} className="mt-8 flex flex-col gap-2">
            <h2
              className={`${periodFullYearMonthDay(date) === toDay ? 'text-brand-sub500' : 'text-white'} text-xl md:text-2xl/[34px] font-normal tracking-[-2.5%]`}
            >
              {periodFullYearMonthDay(date) === toDay ? '오늘 - ' : ''}
              {periodFullYearMonthDay(date)}
            </h2>
            <div className="grid grid-cols-1">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 bg-card-white px-[30px] py-5 border-[1px] border-line-lightGray"
                >
                  <p className="text-xl text-font-baseBlack font-semibold tracking-[-2.5%]">
                    {comment.content}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-base text-font-thirdBlack font-normal">
                      {comment.nickName}
                    </p>
                    <span className="w-[1px] h-4 bg-line-darkGray" />
                    <p className="text-base text-font-thirdBlack font-normal">
                      {periodFullYearMonthDay(comment.createdAt)}
                    </p>
                  </div>
                  <Link
                    href={`/gathering/${comment.gatheringId}`}
                    className="absolute right-[30px]"
                  >
                    <Image
                      src={GrayLinkExternal}
                      alt="바로가기"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
