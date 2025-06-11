import CheckList from '@/components/@shared/cardList/CheckList';
import PostReviewModal from '@/components/@shared/modal/PostReview/PostReviewModal';
import Rating from '@/components/@shared/rating/Rating';
import ReviewLikeButton from '@/components/review/ReviewLikeButton';
import { useOpen } from '@/hooks/useOpen';
import { RoomDTO } from '@/types/room/room.types';

interface ReviewRoomCardSectionProps {
  room: RoomDTO['get'];
}
export default function ReviewRoomCardSection({
  room,
}: ReviewRoomCardSectionProps) {
  const { isOpen, openModal, closeModal } = useOpen();
  return (
    <>
      <div className="absolute top-[252px] flex flex-col gap-2">
        <div className="flex items-center gap-3">
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
          <p className="text-base font-normal tracking-[-2.5%] text-tag">
            사용힌트 : {room.hint ?? 0}
          </p>
          <p className="text-base font-normal tracking-[-2.5%] text-tag">
            플레이 인원 : {room.numberOfPlayer ?? 0}
          </p>
          <p className="text-base font-normal tracking-[-2.5%] text-tag">
            플레이 결과 : {room.success === true ? '성공' : '실패'}
          </p>
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
        <div className="w-[458px] h-20 rounded-xl border-[1px] border-spot mt-2 py-1 px-2">
          <p className="font-medium text-base text-spot line-clamp-3">
            {room.reviewComment ?? '최소 10자 이상 리뷰를 적어주세요.'}
          </p>
        </div>
      </div>
      <div className="flex items-center absolute right-[82px] bottom-[80px]">
        <p className="font-normal text-basefont text-xs">도움이 되요</p>
      </div>
      <ReviewLikeButton
        totalLikes={room.totalLikes}
        className="bottom-[74px]"
      />
      <button
        type="button"
        className="absolute bottom-5 right-5 rounded-full border-[1px] border-mainBlue bg-white px-6 py-2 text-xl font-semibold tracking-[2.5%] text-grayFont"
        onClick={openModal}
      >
        {room.myRating === null ? '리뷰쓰기' : '수정하기'}
      </button>
      <PostReviewModal isOpen={isOpen} onClose={closeModal} room={room} />
    </>
  );
}
