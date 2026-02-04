import { ReviewSummaryDTO } from '@/types/review/review.type';
import ProgressBar from '../@shared/progressBar/ProgressBar';
import Rating from '../@shared/rating/Rating';

interface ReviewSummaryCardProps {
  reviewSummary: ReviewSummaryDTO['get'];
}

export default function ReviewSummaryCard({
  reviewSummary,
}: ReviewSummaryCardProps) {
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
  );
}
