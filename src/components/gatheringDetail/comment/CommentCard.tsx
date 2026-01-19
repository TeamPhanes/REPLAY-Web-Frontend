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
  leaderCheck?: string | null;
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
      className={`${userNickname === leaderCheck ? 'bg-progressBar' : ''} border-b-[1px] border-line-lightGray`}
    >
      <div
        className={`flex items-center gap-2 px-[20px] py-[30px] ${type === 'comment' ? '' : 'pl-[60px]'}`}
      >
        <Image
          src={userImage || UserDefaultImg}
          alt={userNickname}
          width={60}
          height={60}
          className="h-8 w-8 rounded-full border-2 bg-line-Gray shadow-md md:h-[60px] md:w-[60px]"
        />
        <div className="flex flex-col gap-[6px]">
          <p className="text-xl font-normal tracking-[-2.5%] text-basefont md:text-2xl/[34px]">
            {content}
          </p>
          <div className="mt-2 flex items-center gap-[6px]">
            <p className="text-base font-normal tracking-[-2.5%] text-font-thirdBlack">
              {userNickname}
            </p>
            <span className="h-4 w-[1px] bg-line-darkGray" />
            <p className="text-base font-normal tracking-[-2.5%] text-font-thirdBlack">
              {periodYearMonthDayHourTime(createdAt)}
            </p>
            <span className="h-4 w-[1px] bg-line-darkGray" />
            <div className="ml-2 flex items-center gap-3">
              <button
                type="button"
                className="text-base font-normal tracking-[-2.5%] text-font-thirdBlack"
                onClick={toggleReComment}
              >
                답글쓰기
              </button>
              {userInfo && userInfo.nickname === userNickname ? (
                <>
                  <button
                    type="button"
                    className="text-base font-normal tracking-[-2.5%] text-font-thirdBlack"
                    onClick={togglePatchComment}
                  >
                    수정
                  </button>
                  <button
                    type="button"
                    className="text-base font-normal tracking-[-2.5%] text-font-thirdBlack"
                    onClick={toggleDeleteComment}
                  >
                    삭제
                  </button>
                </>
              ) : null}
            </div>
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
        className="rounded-[30px] bg-white px-10 py-5"
      >
        <p className="text-xl font-semibold text-basefont md:text-2xl">
          댓글을 삭제하시겠습니까?
        </p>
        <div className="mt-5 flex justify-between gap-2">
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
