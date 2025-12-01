import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/@shared/cardList/Tag';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import Rating from '@/components/@shared/rating/Rating';
import { VisitThemeListDTO } from '@/types/theme/theme.types';
import { yearMonthDay } from '@/utils/dateChange';
import LightbulbIcon from '@/public/icons/cardList/lightbulb_gray_icon.svg';
import TrophyIcon from '@/public/icons/cardList/trophy_gray_icon.svg';
import UsersIcon from '@/public/icons/cardList/users_gray_icon.svg';
import ReviewDefaultImage from '@/public/icons/modal/review_default_image.svg';

interface ThemeReviewContainerProps {
  data: VisitThemeListDTO['get'][];
}

export default function ThemeReviewContainer({
  data,
}: ThemeReviewContainerProps) {
  const [isPatchModal, setPatchModal] = useState(false);
  const [isPostModal, setPostModal] = useState(false);
  const themeAndLevelList = {
    LIKE: '적절함',
    NORMAL: '보통',
    DISLIKE: '부적절함',
  };
  const StoryList = {
    LIKE: '좋음',
    NORMAL: '보통',
    DISLIKE: '아쉬움',
  };
  return (
    <div className="mt-6 grid gap-5">
      {data.map((theme) => {
        return (
          <div
            key={theme.id}
            className="w-full relative flex items-start rounded-md bg-card-white p-5 transition-all hover:scale-[102%] gap-5"
          >
            <Image
              src={theme.image}
              alt={theme.title}
              width={145}
              height={218}
              className="w-[145px] h-[218px] rounded-[4px]"
            />
            <Link href={`/theme/${theme.id}`} className="w-[338px] h-full">
              <div className="flex flex-col gap-3 relative">
                <Tag tag={theme.genres} />
                <p className="absolute top-1 right-0 text-base text-font-baseBlack font-normal tracking-[-2.5%]">
                  {yearMonthDay(theme.visitDate)}
                </p>
                <TitleAndSpot
                  themeName={theme.title}
                  cafe={theme.cafeName}
                  spot={theme.spotName}
                />
                <Rating
                  rating={theme.score}
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
                      {
                        themeAndLevelList[
                          theme.themeReview as keyof typeof themeAndLevelList
                        ]
                      }
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="px-2 text-sm/6 tracking-[-2.5%] text-font-disabled font-semibold">
                      난이도
                    </p>
                    <p className="text-base tracking-[-2.5%] text-brand-main500 font-semibold">
                      {
                        themeAndLevelList[
                          theme.levelReview as keyof typeof themeAndLevelList
                        ]
                      }
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="px-2 text-sm/6 tracking-[-2.5%] text-font-disabled font-semibold">
                      스토리
                    </p>
                    <p className="text-base tracking-[-2.5%] text-brand-main500 font-semibold">
                      {
                        StoryList[
                          theme.storyReview as keyof typeof themeAndLevelList
                        ]
                      }
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
                      {theme.hint}
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
                      {theme.numberOfPlayer}
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
                      {theme.isSuccess ? '성공' : '실패'}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="p-4 rounded-lg w-[537px] h-[218px] border-[1px] border-line-Gray">
              <p className="line-clamp-[8] text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                {theme.content}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {theme.reviewImage === null ? (
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
                  src={theme.reviewImage || ReviewDefaultImage}
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
                  if (theme.id === null) {
                    setPostModal(true);
                  } else {
                    setPatchModal(true);
                  }
                }}
              >
                {theme.id === null ? '리뷰쓰기' : '수정하기'}
              </button>
            </div>
          </div>
        );
      })}
      {/* {selectedRoom && (
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
      )} */}
    </div>
  );
}
