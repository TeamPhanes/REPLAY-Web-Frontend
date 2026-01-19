import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/@shared/cardList/Tag';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import PatchReviewModal from '@/components/@shared/modal/PatchReview/PatchReviewModal';
import PostReviewModal from '@/components/@shared/modal/PostReview/PostReviewModal';
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
  const [selectedRoom, setSelectedRoom] = useState<VisitThemeListDTO['get']>();
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
            className="relative flex w-full items-start gap-5 rounded-md bg-card-white p-5 transition-all hover:scale-[102%]"
          >
            <Image
              src={theme.image}
              alt={theme.title}
              width={145}
              height={218}
              className="h-[218px] w-[145px] rounded-[4px]"
            />
            <Link href={`/theme/${theme.id}`} className="h-full w-[338px]">
              <div className="relative flex flex-col gap-3">
                <Tag tag={theme.genres} />
                {theme.visitDate !== null ? (
                  <p className="absolute right-0 top-1 text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                    {yearMonthDay(theme.visitDate)}
                  </p>
                ) : null}
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
                    <p className="px-2 text-sm/6 font-semibold tracking-[-2.5%] text-font-disabled">
                      테마
                    </p>
                    {theme.themeReview === null ? (
                      <p className="text-base font-semibold tracking-[-2.5%] text-font-disabled">
                        미확인
                      </p>
                    ) : (
                      <p className="text-base font-semibold tracking-[-2.5%] text-brand-main500">
                        {
                          themeAndLevelList[
                            theme.themeReview as keyof typeof themeAndLevelList
                          ]
                        }
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <p className="px-2 text-sm/6 font-semibold tracking-[-2.5%] text-font-disabled">
                      난이도
                    </p>
                    {theme.levelReview === null ? (
                      <p className="text-base font-semibold tracking-[-2.5%] text-font-disabled">
                        미확인
                      </p>
                    ) : (
                      <p className="text-base font-semibold tracking-[-2.5%] text-brand-main500">
                        {
                          themeAndLevelList[
                            theme.levelReview as keyof typeof themeAndLevelList
                          ]
                        }
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <p className="px-2 text-sm/6 font-semibold tracking-[-2.5%] text-font-disabled">
                      스토리
                    </p>
                    {theme.storyReview === null ? (
                      <p className="text-base font-semibold tracking-[-2.5%] text-font-disabled">
                        미확인
                      </p>
                    ) : (
                      <p className="text-base font-semibold tracking-[-2.5%] text-brand-main500">
                        {
                          StoryList[
                            theme.storyReview as keyof typeof themeAndLevelList
                          ]
                        }
                      </p>
                    )}
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
                    {theme.hint === null ? (
                      <p className="text-base font-semibold tracking-[-2.5%] text-font-disabled">
                        0
                      </p>
                    ) : (
                      <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                        {theme.hint}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={UsersIcon}
                      alt="참여 인원 아이콘"
                      width={24}
                      height={24}
                    />
                    {theme.numberOfPlayer === null ? (
                      <p className="text-base font-semibold tracking-[-2.5%] text-font-disabled">
                        0
                      </p>
                    ) : (
                      <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                        {theme.numberOfPlayer}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={TrophyIcon}
                      alt="트로피 아이콘"
                      width={24}
                      height={24}
                    />
                    {theme.isSuccess === null ? (
                      <p className="text-base font-semibold tracking-[-2.5%] text-font-disabled">
                        미확인
                      </p>
                    ) : (
                      <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                        {theme.isSuccess ? '성공' : '실패'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
            <div className="h-[218px] w-[537px] rounded-lg border-[1px] border-line-Gray p-4">
              {theme.content === null ? (
                <p className="text-base font-normal tracking-[-2.5%] text-font-disabled">
                  리뷰를 작성해 주세요.
                </p>
              ) : (
                <p className="line-clamp-[8] text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                  {theme.content}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              {theme.reviewImages.length === 0 ? (
                <div className="mb-16 flex h-[152px] w-[160px] items-center justify-center rounded-[4px] bg-line-lightGray md:mb-auto">
                  <Image
                    src={ReviewDefaultImage}
                    alt="리뷰 이미지"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
              ) : (
                <Image
                  src={theme.reviewImages[0].image || ReviewDefaultImage}
                  alt="리뷰 이미지"
                  width={118}
                  height={118}
                  className="h-[152px] w-[160px] rounded-[4px] bg-line-lightGray"
                />
              )}
              <button
                type="button"
                className="w-full rounded-[4px] border-[1px] border-brand-main500 px-10 py-[14px] text-base font-semibold tracking-[-2.5%] text-brand-main500"
                onClick={() => {
                  if (theme.visitDate === null) {
                    setSelectedRoom(theme);
                    setPostModal(true);
                  } else {
                    setSelectedRoom(theme);
                    setPatchModal(true);
                  }
                }}
              >
                {theme.visitDate === null ? '리뷰쓰기' : '수정하기'}
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
            reviewImages={selectedRoom.reviewImages}
            defaultValues={{
              score: selectedRoom.score,
              themeReview: selectedRoom.themeReview,
              levelReview: selectedRoom.levelReview,
              storyReview: selectedRoom.storyReview,
              isSuccess: String(selectedRoom.isSuccess),
              numberOfPlayer: selectedRoom.numberOfPlayer,
              deleteImageIds: [],
              hint: selectedRoom.hint,
              content: selectedRoom.content,
              representativeId: selectedRoom.representativeId,
              date: selectedRoom.visitDate,
            }}
          />
        </>
      )}
    </div>
  );
}
