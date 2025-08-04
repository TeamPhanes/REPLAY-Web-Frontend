import Image from 'next/image';
import { useAuthStore } from '@/store/authStore';
import MainBlueButton from '@/components/@shared/button/MainBlueButton';
import MainPurpleButton from '@/components/@shared/button/MainPurpleButton';
import Modal from '@/components/@shared/modal/Modal';
import CommentPatchInput from '@/components/gatheringDetail/comment/CommentPatchInput';
import CommentInput from '@/components/gatheringDetail/comment/CommentPostInput';
import { useDeleteComment } from '@/hooks/reactQuery/useDeleteComment';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';
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
  const { accessToken } = useAuthStore();
  const { userInfo } = useUserInfo({ enabled: !!accessToken });
  const { isOpen: isReComment, toggleOpen: toggleReComment } = useOpen();
  const { isOpen: isPatchComment, toggleOpen: togglePatchComment } = useOpen();
  const { isOpen: isDeleteComment, toggleOpen: toggleDeleteComment } =
    useOpen();
  const { mutate: DeleteComment } = useDeleteComment({
    commentId: reCommentId ?? commentId,
    gatheringId,
    toggleOpen: toggleDeleteComment,
  });

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
          className="w-8 h-8 md:h-[60px] md:w-[60px] rounded-full border-2 border-mainBlue shadow-md"
        />
        <div className="flex flex-col">
          <p className="text-xl md:text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
            {userNickname}
          </p>
          <p className="text-xl md:text-2xl/[34px] font-normal tracking-[-2.5%] text-basefont">
            {content}
          </p>
          <div className="mt-2 flex gap-2 md:gap-4">
            <p className="text-lg md:text-xl font-normal tracking-[-2.5%] text-grayFont">
              {periodYearMonthDayHourTime(createdAt)}
            </p>
            <button
              type="button"
              className="text-lg md:text-xl font-normal tracking-[-2.5%] text-grayFont"
              onClick={toggleReComment}
            >
              답글쓰기
            </button>
            {userInfo && userInfo.nickname === userNickname ? (
              <>
                <button
                  type="button"
                  className="text-lg md:text-xl font-normal tracking-[-2.5%] text-grayFont"
                  onClick={togglePatchComment}
                >
                  수정
                </button>
                <button
                  type="button"
                  className="text-lg md:text-xl font-normal tracking-[-2.5%] text-grayFont"
                  onClick={toggleDeleteComment}
                >
                  삭제
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div
        className={`${isReComment ? 'animate-dropdownIn' : 'hidden'} border-t-[1px] border-spot`}
      >
        <CommentInput parentId={commentId} onClose={() => toggleReComment()} />
      </div>
      <div
        className={`${isPatchComment ? 'animate-dropdownIn' : 'hidden'} border-t-[1px] border-spot`}
      >
        <CommentPatchInput
          reCommentId={type === 'comment' ? undefined : reCommentId}
          parentId={commentId}
          defaultValues={{
            content,
            parentId: Number(commentId),
          }}
          onClose={() => togglePatchComment()}
        />
      </div>
      <Modal
        isOpen={isDeleteComment}
        onClose={toggleDeleteComment}
        className="bg-white rounded-[30px] px-10 py-5"
      >
        <p className="font-semibold text-xl md:text-2xl text-basefont">
          댓글을 삭제하시겠습니까?
        </p>
        <div className="flex justify-between gap-2 mt-5">
          <MainBlueButton className="w-full" onClick={() => DeleteComment()}>
            확인
          </MainBlueButton>
          <MainPurpleButton className="w-full" onClick={toggleDeleteComment}>
            취소
          </MainPurpleButton>
        </div>
      </Modal>
    </div>
  );
}
