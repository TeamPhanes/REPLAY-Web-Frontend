import { useState } from 'react';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import LineSkeleton from '@/components/@shared/skeleton/LineSkeleton';
import MyPageCommentSkeleton from '@/components/@shared/skeleton/MyPageCommentSkeleton';
import { useMyComment } from '@/hooks/reactQuery/useMyComment';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePagination } from '@/hooks/usePagination';
import { MyCommentDTO } from '@/types/comment/comment.type';
import { HourTime, periodFullYearMonthDay } from '@/utils/dateChange';

interface CommentCardSectionProps {
  sort: string;
}

export default function CommentCardSection({ sort }: CommentCardSectionProps) {
  const [page, setPage] = useState(0);
  const { MyComment, isLoading, showLoading } = useMyComment(sort, page, 10);
  const { isGuardLoading } = useAuthGuard(showLoading);
  const { totalPages } = usePagination(page, MyComment?.totalCount);

  if (isGuardLoading || isLoading) {
    return (
      <>
        <LineSkeleton className="mt-8 h-[34px]" />
        <MyPageCommentSkeleton count={6} className="mt-2" />
      </>
    );
  }

  if (!MyComment || Object.keys(MyComment.data).length === 0) {
    return <EmptyArrayContainer type="작성한" kind="댓글" />;
  }
  return (
    <>
      {Object.entries(MyComment.data as MyCommentDTO['get']).map(
        ([date, comments]) => (
          <div key={date} className="mt-8 flex flex-col gap-2">
            <h2 className="text-2xl/[34px] font-normal tracking-[-2.5%] text-white">
              {periodFullYearMonthDay(date)}
            </h2>
            <div className="grid grid-cols-3 gap-x-2 gap-y-5">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="flex h-[180px] w-[421px] flex-col gap-1 rounded-3xl bg-card p-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-base font-normal tracking-[-2.5%] text-basefont">
                      {comment.gatheringName}
                    </p>
                    <p className="text-base font-normal tracking-[-2.5%] text-basefont">
                      {HourTime(comment.createdAt)}
                    </p>
                  </div>
                  <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-basefont">
                    {comment.content}
                  </p>
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
