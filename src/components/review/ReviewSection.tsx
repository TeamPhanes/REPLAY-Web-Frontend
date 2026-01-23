import Image from 'next/image';
import Pagination from '@/components/@shared/pagination/Pagination';
import ProgressBar from '@/components/@shared/progressBar/ProgressBar';
import Rating from '@/components/@shared/rating/Rating';
import ReviewContent from '@/components/review/ReviewContent';
import ReviewLikeButton from '@/components/review/ReviewLikeButton';
import { ReviewDTO, ReviewSummaryDTO } from '@/types/review/review.type';
import { periodFullYearMonthDay } from '@/utils/dateChange';
import LightbulbIcon from '@/public/icons/cardList/lightbulb_gray_icon.svg';
import TrophyIcon from '@/public/icons/cardList/trophy_gray_icon.svg';
import UsersIcon from '@/public/icons/cardList/users_gray_icon.svg';
import SearchIcon from '@/public/icons/search/dark_search.svg';
import EmptySearchResult from '../search/EmptySearchResult';

interface ReviewSectionProps {
  review: ReviewDTO['get'];
  reviewSummary: ReviewSummaryDTO['get'];
  page: number;
  totalPages: number;
  setPage: (value: number) => void;
}

export default function ReviewSection({
  review,
  reviewSummary,
  page,
  totalPages,
  setPage,
}: ReviewSectionProps) {
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
  if (review.content.length === 0)
    return <EmptySearchResult text="리뷰를 찾지 못했어요." />;
  return (
    <div className="rounded-lg bg-card-white">
      <div className="flex flex-col items-center justify-between border-b-4 border-line-lightGray p-5 md:gap-10 md:p-20 xl:flex-row xl:justify-normal xl:gap-0">
        <div className="flex w-full items-center justify-between xl:justify-normal">
          <div className="flex h-[174px] w-full flex-col justify-center text-center md:w-auto md:justify-between xl:w-[272px]">
            <p className="text-lg/[26px] font-normal tracking-[-2.5%] text-font-baseBlack">
              사용자 총 평점
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-5xl/[62px] font-semibold tracking-[-2.5%] text-font-baseBlack">
                {reviewSummary.avgScore}
              </p>
              <div className="hidden md:block">
                <Rating
                  rating={reviewSummary.avgScore}
                  width={272}
                  height={48}
                  type="Review"
                />
              </div>
            </div>
          </div>
          <span className="h-[120px] w-[1px] bg-line-secondLightGray xl:hidden" />
          <div className="flex h-[174px] w-full flex-col justify-center text-center md:w-[272px] md:justify-between xl:w-[272px]">
            <p className="text-lg/[26px] font-normal tracking-[-2.5%] text-font-baseBlack">
              생성된 모임
            </p>
            <p className="text-5xl/[62px] font-semibold tracking-[-2.5%] text-font-baseBlack md:py-10">
              {reviewSummary.createdGatheringCount}개
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-between xl:justify-normal">
          <div className="flex h-[174px] w-full flex-col justify-between text-center md:w-[272px] xl:w-[272px]">
            <p className="text-lg/[26px] font-normal tracking-[-2.5%] text-font-baseBlack">
              리뷰 평점 수치
            </p>
            <div className="flex items-center justify-center gap-1 md:gap-5 xl:gap-1">
              {[...reviewSummary.reviewCountSummary.counts]
                .reverse()
                .map((count) => (
                  <div
                    key={count.score}
                    className="flex flex-col items-center gap-2"
                  >
                    <p className="flex-shrink-0 text-xs/[18px] font-normal tracking-[-2.5%] text-font-secondBlack">
                      {count.count}개
                    </p>
                    <ProgressBar
                      value={count.count}
                      max={reviewSummary.reviewCountSummary.total}
                    />
                    <p className="flex-shrink-0 text-xs/[18px] font-normal tracking-[-2.5%] text-font-secondBlack">
                      {count.score}점
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <span className="h-[120px] w-[1px] bg-line-secondLightGray xl:hidden" />
          <div className="flex h-[174px] w-full flex-col gap-3 text-center md:w-[272px] md:px-10 xl:w-[272px] xl:px-0">
            <p className="text-lg/[26px] font-normal tracking-[-2.5%] text-font-baseBlack">
              사용자 평가
            </p>
            <div className="mt-2 flex items-center justify-center gap-2">
              <p className="px-[6px] text-sm font-semibold tracking-[-2.5%] text-font-thirdBlack">
                테마
              </p>
              <p className="text-base font-normal tracking-[-2.5%] text-brand-main500">
                {
                  themeAndLevelList[
                    reviewSummary.userEvaluation.theme
                      .label as keyof typeof themeAndLevelList
                  ]
                }
              </p>
              <p className="text-base font-normal tracking-[-2.5%] text-brand-main500">
                {reviewSummary.userEvaluation.theme.percent.toFixed()}%
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm font-semibold tracking-[-2.5%] text-font-thirdBlack">
                난이도
              </p>
              <p className="text-base font-normal tracking-[-2.5%] text-brand-main500">
                {
                  themeAndLevelList[
                    reviewSummary.userEvaluation.level
                      .label as keyof typeof themeAndLevelList
                  ]
                }
              </p>
              <p className="text-base font-normal tracking-[-2.5%] text-brand-main500">
                {reviewSummary.userEvaluation.level.percent.toFixed()}%
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm font-semibold tracking-[-2.5%] text-font-thirdBlack">
                스토리
              </p>
              <p className="text-base font-normal tracking-[-2.5%] text-brand-main500">
                {
                  StoryList[
                    reviewSummary.userEvaluation.story
                      .label as keyof typeof themeAndLevelList
                  ]
                }
              </p>
              <p className="text-base font-normal tracking-[-2.5%] text-brand-main500">
                {reviewSummary.userEvaluation.story.percent.toFixed()}%
              </p>
            </div>
          </div>
        </div>
      </div>
      {review.content.map((data, index) => (
        <div key={index} className="relative p-5 md:p-10">
          <div className="relative flex flex-row items-center">
            <Image
              src={data.profileImage}
              alt="유저 이미지"
              width={60}
              height={60}
              className="h-[60px] w-[60px] rounded-full bg-line-lightGray"
            />
            <div className="ml-2 flex flex-col gap-1 md:ml-5 md:gap-3">
              <Rating
                rating={data.score}
                width={120}
                height={24}
                type="Review"
              />
              <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                  {data.nickname}
                </p>
                <span className="hidden h-3 w-[1px] bg-font-baseBlack md:block" />
                <div className="flex items-center gap-2">
                  <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                    {periodFullYearMonthDay(data.createdAt)}
                  </p>
                  <span className="h-3 w-[1px] bg-font-baseBlack" />
                  <button
                    type="button"
                    className="text-base font-normal tracking-[-2.5%] text-font-thirdBlack"
                  >
                    신고
                  </button>
                </div>
              </div>
            </div>
            <ReviewLikeButton
              totalLikes={data.likeCount}
              isLiked={data.isLiked}
              id={data.id}
            />
          </div>

          <div className="flex flex-col items-center p-1 md:flex-row md:gap-[60px] md:p-4">
            <div className="flex w-full items-center justify-between md:w-auto md:gap-8">
              <div className="flex items-center gap-2">
                <p className="px-2 py-1 text-sm font-semibold tracking-[-2.5%] text-font-disabled">
                  테마
                </p>
                <p className="text-base font-semibold tracking-[-2.5%] text-brand-main500">
                  {
                    themeAndLevelList[
                      data.themeReview as keyof typeof themeAndLevelList
                    ]
                  }
                </p>
              </div>
              <div className="flex items-center">
                <p className="px-2 py-1 text-sm font-semibold tracking-[-2.5%] text-font-disabled">
                  난이도
                </p>
                <p className="text-base font-semibold tracking-[-2.5%] text-brand-main500">
                  {
                    themeAndLevelList[
                      data.levelReview as keyof typeof themeAndLevelList
                    ]
                  }
                </p>
              </div>
              <div className="flex items-center">
                <p className="px-2 py-1 text-sm font-semibold tracking-[-2.5%] text-font-disabled">
                  스토리
                </p>
                <p className="text-base font-semibold tracking-[-2.5%] text-brand-main500">
                  {StoryList[data.storyReview as keyof typeof StoryList]}
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-8 md:w-auto">
              <div className="flex items-center">
                <Image
                  src={LightbulbIcon}
                  alt="힌트 아이콘"
                  width={24}
                  height={24}
                />
                <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                  {data.hint}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={UsersIcon}
                  alt="참여 인원 아이콘"
                  width={24}
                  height={24}
                />
                <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                  {data.numberOfPlayer}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={TrophyIcon}
                  alt="트로피 아이콘"
                  width={24}
                  height={24}
                />
                <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                  {data.isSuccess ? '성공' : '실패'}
                </p>
              </div>
            </div>
          </div>
          <ReviewContent content={data.content} images={data.images} />
        </div>
      ))}
      <div className="border-t-[1px] border-line-lightGray pb-10">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onChange={setPage}
        />
      </div>
    </div>
  );
}
