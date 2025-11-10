import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mockMyPageReviewRooms } from '@/data/mockRooms';
import MainBlueButton from '@/components/@shared/button/MainBlueButton';
import MainWhiteButton from '@/components/@shared/button/MainWhiteButton';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import Tag from '@/components/@shared/cardList/Tag';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import Modal from '@/components/@shared/modal/Modal';
import PatchReviewModal from '@/components/@shared/modal/PatchReview/PatchReviewModal';
import PostReviewModal from '@/components/@shared/modal/PostReview/PostReviewModal';
import Pagination from '@/components/@shared/pagination/Pagination';
import Rating from '@/components/@shared/rating/Rating';
import ReviewRoomCardSkeleton from '@/components/@shared/skeleton/ReviewRoomCardSkeleton';
import { useReviewTheme } from '@/hooks/reactQuery/useReviewTheme';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { useOpen } from '@/hooks/useOpen';
import { usePagination } from '@/hooks/usePagination';
import { RoomDTO } from '@/types/room/room.types';
import LightbulbIcon from '@/public/icons/cardList/lightbulb_gray_icon.svg';
import TrophyIcon from '@/public/icons/cardList/trophy_gray_icon.svg';
import UsersIcon from '@/public/icons/cardList/users_gray_icon.svg';
import ReviewDefaultImage from '@/public/icons/modal/review_default_image.svg';

export default function ThemeReviewSection() {
  const [page, setPage] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<RoomDTO['get']>();
  const [isPatchModal, setPatchModal] = useState(false);
  const [isPostModal, setPostModal] = useState(false);
  const { userReviewTheme, isLoading, showLoading } = useReviewTheme(page, 10);
  const { isGuardLoading } = useAuthGuard(showLoading);
  const { totalPages } = usePagination(page, userReviewTheme?.totalCount);

  if (isGuardLoading || isLoading) {
    return <ReviewRoomCardSkeleton count={6} className="mt-6" />;
  }

  // if (!userReviewTheme || userReviewTheme.data.length === 0) {
  //   return <EmptyArrayContainer type="참여한" kind="방탈출" />;
  // }

  return (
    <div className="mt-6 grid gap-5">
      {mockMyPageReviewRooms.data.map((data) => {
        return (
          <div
            key={data.themeId}
            className="w-full relative flex items-start rounded-md bg-card-white p-5 transition-all hover:scale-[102%] gap-5"
          >
            <Image
              src={data.listImage}
              alt={data.themeName}
              width={145}
              height={218}
              className="w-[145px] h-[218px] rounded-[4px]"
            />
            <Link href={`/theme/${data.themeId}`} className="w-[338px] h-full">
              <div className="flex flex-col gap-3">
                <Tag tag={data.genres} />
                <TitleAndSpot
                  themeName={data.themeName}
                  cafe={data.cafe}
                  spot={data.spot}
                />
                <Rating
                  rating={data.rating}
                  width={120}
                  height={24}
                  type="Review"
                />
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <p className="px-2 text-sm/6 tracking-[-2.5%] text-font-disabled font-semibold">
                      테마
                    </p>
                    <p className="text-base tracking-[-2.5%] text-brand-main500 font-semibold">
                      {data.themeReview}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="px-2 text-sm/6 tracking-[-2.5%] text-font-disabled font-semibold">
                      난이도
                    </p>
                    <p className="text-base tracking-[-2.5%] text-brand-main500 font-semibold">
                      {data.levelReview}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="px-2 text-sm/6 tracking-[-2.5%] text-font-disabled font-semibold">
                      스토리
                    </p>
                    <p className="text-base tracking-[-2.5%] text-brand-main500 font-semibold">
                      {data.storyReview}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={LightbulbIcon}
                      alt="힌트 아이콘"
                      width={24}
                      height={24}
                    />
                    <p className="text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                      {data.hint}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={UsersIcon}
                      alt="참여 인원 아이콘"
                      width={24}
                      height={24}
                    />
                    <p className="text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                      {data.numberOfPlayer}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={TrophyIcon}
                      alt="트로피 아이콘"
                      width={24}
                      height={24}
                    />
                    <p className="text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                      {data.success ? '성공' : '실패'}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="p-4 rounded-lg w-[537px] h-[218px] border-[1px] border-line-Gray">
              <p className="line-clamp-[8] text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                {data.reviewComment}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {data.reviewImage === null ? (
                <div className="w-[160px] h-[152px] bg-line-lightGray rounded-[4px] flex justify-center items-center mb-16 md:mb-auto">
                  <Image
                    src={ReviewDefaultImage}
                    alt="리뷰 이미지"
                    width={24}
                    height={24}
                  />
                </div>
              ) : (
                <Image
                  src={data.reviewImage || ReviewDefaultImage}
                  alt="리뷰 이미지"
                  width={118}
                  height={118}
                  className="w-[160px] h-[152px] rounded-[4px] bg-line-lightGray"
                />
              )}
              <button
                type="button"
                className="w-full rounded-[4px] border-[1px] border-brand-main500 px-10 py-[14px] text-base tracking-[-2.5%] text-brand-main500 font-semibold"
                onClick={() => {
                  setSelectedRoom(data);
                  if (data.reviewId === null) {
                    setPostModal(true);
                  } else {
                    setPatchModal(true);
                  }
                }}
              >
                {data.reviewId === null ? '리뷰쓰기' : '수정하기'}
              </button>
            </div>
          </div>
        );
      })}
      {selectedRoom && (
        <>
          <PostReviewModal
            isOpen={isPostModal}
            onClose={() => setPostModal(false)}
            room={selectedRoom}
          />
          <PatchReviewModal
            isOpen={isPatchModal}
            onClose={() => setPatchModal(false)}
            room={selectedRoom}
            defaultValues={{
              id: selectedRoom.reviewId,
              themeId: selectedRoom.themeId,
              content: selectedRoom.reviewComment,
              rating: selectedRoom.myRating,
              success: String(selectedRoom.success),
              hint: selectedRoom.hint,
              numberOfPlayer: selectedRoom.numberOfPlayer,
              themeReview: selectedRoom.themeReview,
              storyReview: selectedRoom.storyReview,
              levelReview: selectedRoom.levelReview,
            }}
          />
        </>
      )}
    </div>
  );
}
