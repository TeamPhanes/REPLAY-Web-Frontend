import Image from 'next/image';
import CheckList from '@/components/@shared/cardList/CheckList';
import DeleteCheckModal from '@/components/@shared/modal/Delete/DeleteCheckModal';
import PatchReviewModal from '@/components/@shared/modal/PatchReview/PatchReviewModal';
import PostReviewModal from '@/components/@shared/modal/PostReview/PostReviewModal';
import Rating from '@/components/@shared/rating/Rating';
import { useDeleteReview } from '@/hooks/reactQuery/useDeleteReview';
import { useOpen } from '@/hooks/useOpen';
import { RoomDTO } from '@/types/room/room.types';
import LikeButtonLine from '@/public/icons/detail/like_button_line.svg';
import ReviewDefaultImage from '@/public/icons/modal/review_default_image.svg';

interface ReviewRoomCardSectionProps {
  room: RoomDTO['get'];
}
export default function ReviewRoomCardSection({
  room,
}: ReviewRoomCardSectionProps) {
  const {
    isOpen: isPostModal,
    openModal: openPostModal,
    closeModal: closePostModal,
  } = useOpen();
  const {
    isOpen: isPatchModal,
    openModal: openPatchModal,
    closeModal: closePatchModal,
  } = useOpen();
  const {
    isOpen: isDeleteModal,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useOpen();
  const { mutate: deleteReview } = useDeleteReview(
    room.reviewId,
    room.themeId,
    closeDeleteModal
  );
  return (
    <>
      <div className="absolute left-[630px] flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <p className="text-base font-normal tracking-[-2.5%] text-basefont">
            나의 리뷰
          </p>
          <Rating
            rating={room.myRating ?? 0}
            width={120}
            height={24}
            type="Review"
          />
          <p className="text-base font-normal tracking-[-2.5%] text-basefont">
            {room.myRating?.toFixed(1) ?? '0.0'}
          </p>
          <p className="text-sm font-normal tracking-[-2.5%] text-tag">
            사용힌트 : {room.hint ?? 0}
          </p>
          <p className="text-sm font-normal tracking-[-2.5%] text-tag">
            플레이 인원 : {room.numberOfPlayer ?? 0}
          </p>
          <p className="text-sm font-normal tracking-[-2.5%] text-tag">
            플레이 결과 : {room.success === true ? '성공' : '실패'}
          </p>
          <div className="flex items-center gap-1">
            <p className="text-xs font-normal tracking-[-2.5%] text-basefont">
              도움이 되요
            </p>
            <div className="flex gap-1 rounded-full bg-white px-2 py-[2px] items-center">
              <Image src={LikeButtonLine} alt="좋아요" width={24} height={24} />
              <p className="text-spot text-base font-normal tracking-[-2.5%]">
                {room.totalLikes ?? 0}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <CheckList
            title="테마"
            contentOne="좋아요"
            contentTwo="보통"
            contentThree="별로예요"
            check={room.themeReview}
          />
          <CheckList
            title="난이도"
            contentOne="좋아요"
            contentTwo="보통"
            contentThree="별로예요"
            check={room.levelReview}
          />
          <CheckList
            title="스토리"
            contentOne="좋아요"
            contentTwo="보통"
            contentThree="별로예요"
            check={room.storyReview}
          />
        </div>
        <div className="flex gap-1">
          {room.reviewImage === null ? (
            <div className="w-[156px] h-[156px] bg-ratingCard rounded-xl flex justify-center items-center">
              <Image
                src={ReviewDefaultImage}
                alt="리뷰 이미지"
                width={24}
                height={24}
              />
            </div>
          ) : (
            <Image
              src={room.reviewImage}
              alt="리뷰 이미지"
              width={156}
              height={156}
              className="w-[156px] h-[156px] rounded-xl bg-ratingCard"
            />
          )}
          <div className="w-[352px] h-[156px] rounded-xl border-[1px] border-spot py-1 px-2">
            <p className="font-medium text-base text-spot line-clamp-6">
              {room.reviewComment ?? '최소 10자 이상 리뷰를 적어주세요.'}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col absolute bottom-5 right-5 gap-1">
        <button
          type="button"
          className="rounded-full border-2 border-mainBlue bg-white px-6 py-2 text-lg font-semibold tracking-[2.5%] text-grayFont"
          onClick={room.reviewId === null ? openPostModal : openPatchModal}
        >
          {room.reviewId === null ? '리뷰쓰기' : '수정하기'}
        </button>
        <button
          type="button"
          className="rounded-full border-2 border-mainPink bg-white px-6 py-2 text-lg font-semibold tracking-[2.5%] text-grayFont"
          onClick={openDeleteModal}
        >
          삭제하기
        </button>
      </div>
      <DeleteCheckModal
        isOpen={isDeleteModal}
        closeModal={closeDeleteModal}
        mutate={deleteReview}
      >
        리뷰를 삭제하시겠습니까?
      </DeleteCheckModal>
      <PostReviewModal
        isOpen={isPostModal}
        onClose={closePostModal}
        room={room}
      />
      <PatchReviewModal
        isOpen={isPatchModal}
        onClose={closePatchModal}
        room={room}
        defaultValues={{
          id: room.reviewId,
          themeId: room.themeId,
          content: room.reviewComment,
          rating: room.myRating,
          success: String(room.success),
          hint: room.hint,
          numberOfPlayer: room.numberOfPlayer,
          themeReview: room.themeReview,
          storyReview: room.storyReview,
          levelReview: room.levelReview,
        }}
      />
    </>
  );
}
