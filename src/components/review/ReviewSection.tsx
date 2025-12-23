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
    <div className="bg-card-white rounded-lg">
      <div className="flex justify-between items-center p-20 border-b-4 border-line-lightGray">
        <div className="flex flex-col justify-between text-center h-[174px]">
          <p className="text-lg/[26px] tracking-[-2.5%] text-font-baseBlack font-normal">
            사용자 총 평점
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-5xl/[62px] tracking-[-2.5%] text-font-baseBlack font-semibold">
              {reviewSummary.avgScore}
            </p>
            <Rating
              rating={reviewSummary.avgScore}
              width={272}
              height={48}
              type="Review"
            />
          </div>
        </div>
        <span className="w-[1px] h-[120px] bg-line-secondLightGray" />
        <div className="flex flex-col justify-between h-[174px] text-center">
          <p className="text-lg/[26px] tracking-[-2.5%] text-font-baseBlack font-normal">
            생성된 모임
          </p>
          <p className="text-5xl/[62px] tracking-[-2.5%] text-font-baseBlack font-semibold py-10">
            {reviewSummary.createdGatheringCount}개
          </p>
        </div>
        <span className="w-[1px] h-[120px] bg-line-secondLightGray" />
        <div className="flex flex-col justify-between h-[174px] text-center">
          <p className="text-lg/[26px] tracking-[-2.5%] text-font-baseBlack font-normal">
            리뷰 평점 수치
          </p>
          <div className="flex gap-1">
            {[...reviewSummary.reviewCountSummary.counts]
              .reverse()
              .map((count) => (
                <div
                  key={count.score}
                  className="flex items-center gap-2 flex-col"
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
        <span className="w-[1px] h-[120px] bg-line-secondLightGray" />
        <div className="flex flex-col h-[174px] gap-3 text-center">
          <p className="text-lg/[26px] tracking-[-2.5%] text-font-baseBlack font-normal">
            사용자 평가
          </p>
          <div className="flex items-center justify-between w-44 mt-2">
            <p className="text-sm tracking-[-2.5%] text-font-thirdBlack font-semibold px-[6px]">
              테마
            </p>
            <p className="text-base tracking-[-2.5%] text-brand-main500 font-normal">
              {
                themeAndLevelList[
                  reviewSummary.userEvaluation.theme
                    .label as keyof typeof themeAndLevelList
                ]
              }
            </p>
            <p className="text-base tracking-[-2.5%] text-brand-main500 font-normal">
              {reviewSummary.userEvaluation.theme.percent.toFixed()}%
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm tracking-[-2.5%] text-font-thirdBlack font-semibold">
              난이도
            </p>
            <p className="text-base tracking-[-2.5%] text-brand-main500 font-normal">
              {
                themeAndLevelList[
                  reviewSummary.userEvaluation.level
                    .label as keyof typeof themeAndLevelList
                ]
              }
            </p>
            <p className="text-base tracking-[-2.5%] text-brand-main500 font-normal">
              {reviewSummary.userEvaluation.level.percent.toFixed()}%
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm tracking-[-2.5%] text-font-thirdBlack font-semibold">
              스토리
            </p>
            <p className="text-base tracking-[-2.5%] text-brand-main500 font-normal">
              {
                StoryList[
                  reviewSummary.userEvaluation.story
                    .label as keyof typeof themeAndLevelList
                ]
              }
            </p>
            <p className="text-base tracking-[-2.5%] text-brand-main500 font-normal">
              {reviewSummary.userEvaluation.story.percent.toFixed()}%
            </p>
          </div>
        </div>
      </div>
      {review.content.map((data, index) => (
        <div key={index} className="relative p-10">
          <div className="flex flex-row items-center relative">
            <Image
              src={data.profileImage}
              alt="유저 이미지"
              width={60}
              height={60}
              className="w-[60px] h-[60px] rounded-full bg-line-lightGray"
            />
            <div className="flex flex-col gap-3 ml-5">
              <Rating
                rating={data.score}
                width={120}
                height={24}
                type="Review"
              />
              <div className="flex items-center gap-2">
                <p className="text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                  {data.nickname}
                </p>
                <span className="w-[1px] h-3 bg-font-baseBlack" />
                <p className="text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                  {periodFullYearMonthDay(data.createdAt)}
                </p>
                <span className="w-[1px] h-3 bg-font-baseBlack" />
                <button
                  type="button"
                  className="text-base tracking-[-2.5%] text-font-thirdBlack font-normal"
                >
                  신고
                </button>
              </div>
            </div>
            <ReviewLikeButton
              totalLikes={data.likeCount}
              isLiked={data.isLiked}
              id={data.id}
            />
          </div>

          <div className="flex p-4 items-center gap-[60px]">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <p className="px-2 py-1 text-sm tracking-[-2.5%] text-font-disabled font-semibold">
                  테마
                </p>
                <p className="text-base tracking-[-2.5%] text-brand-main500 font-semibold">
                  {
                    themeAndLevelList[
                      data.themeReview as keyof typeof themeAndLevelList
                    ]
                  }
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="px-2 py-1 text-sm tracking-[-2.5%] text-font-disabled font-semibold">
                  난이도
                </p>
                <p className="text-base tracking-[-2.5%] text-brand-main500 font-semibold">
                  {
                    themeAndLevelList[
                      data.levelReview as keyof typeof themeAndLevelList
                    ]
                  }
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="px-2 py-1 text-sm tracking-[-2.5%] text-font-disabled font-semibold">
                  스토리
                </p>
                <p className="text-base tracking-[-2.5%] text-brand-main500 font-semibold">
                  {StoryList[data.storyReview as keyof typeof StoryList]}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
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
              <div className="flex items-center gap-2">
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
              <div className="flex items-center gap-2">
                <Image
                  src={TrophyIcon}
                  alt="트로피 아이콘"
                  width={24}
                  height={24}
                />
                <p className="text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                  {data.isSuccess ? '성공' : '실패'}
                </p>
              </div>
            </div>
          </div>
          <ReviewContent content={data.content} images={data.images} />
        </div>
      ))}
      <div className="pb-10 border-t-[1px] border-line-lightGray">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onChange={setPage}
        />
      </div>
    </div>
  );
}
