import Image from 'next/image';
import CommentInput from '@/components/gatheringDetail/comment/CommentInput';
import { useDeleteComment } from '@/hooks/reactQuery/useDeleteComment';
import { usePatchComment } from '@/hooks/reactQuery/usePatchComment';
import { useOpen } from '@/hooks/useOpen';
import { periodYearMonthDayHourTime } from '@/utils/dateChange';
import UserDefaultImg from '@/public/icons/user/user_default.svg';

interface CommentCardProps {
  gatheringId: string | string[];
  leaderCheck: string;
  userImage: string;
  userNickname: string;
  content: string;
  createdAt: string;
  commentId: string;
  reCommentId?: string;
  type: 'comment' | 'reComment';
}

export default function CommentCard({
  gatheringId,
  leaderCheck,
  userImage,
  userNickname,
  content,
  createdAt,
  commentId,
  reCommentId,
  type,
}: CommentCardProps) {
  const { mutate: PatchComment } = usePatchComment({ commentId, gatheringId });
  const { mutate: DeleteComment } = useDeleteComment({
    commentId: reCommentId ?? commentId,
    gatheringId,
  });
  const { isOpen: isReComment, toggleOpen: toggleReComment } = useOpen();
  return (
    <div
      className={`${userNickname === leaderCheck ? 'bg-progressBar' : ''} border-b-[1px] border-spot pt-5`}
    >
      <div
        className={`flex gap-2 pb-2 ${type === 'comment' ? 'pl-5' : 'pl-[60px]'}`}
      >
        <Image
          src={userImage || UserDefaultImg}
          alt={userNickname}
          width={60}
          height={60}
          className="h-[60px] w-[60px] rounded-full border-2 border-mainBlue shadow-md"
        />
        <div className="flex flex-col">
          <p className="text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
            {userNickname}
          </p>
          <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-basefont">
            {content}
          </p>
          <div className="mt-2 flex gap-4">
            <p className="text-xl font-normal tracking-[-2.5%] text-grayFont">
              {periodYearMonthDayHourTime(createdAt)}
            </p>
            <button
              type="button"
              className="text-xl font-normal tracking-[-2.5%] text-grayFont"
              onClick={toggleReComment}
            >
              답글쓰기
            </button>
            <button
              type="button"
              className="text-xl font-normal tracking-[-2.5%] text-grayFont"
              onClick={() => PatchComment()}
            >
              수정
            </button>
            <button
              type="button"
              className="text-xl font-normal tracking-[-2.5%] text-grayFont"
              onClick={() => DeleteComment()}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isReComment ? '' : 'hidden'} border-t-[1px] border-spot`}
      >
        <CommentInput parentId={commentId} onClose={() => toggleReComment()} />
      </div>
    </div>
  );
}
