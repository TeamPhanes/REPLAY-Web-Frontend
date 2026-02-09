import RatingInput from '@/components/@shared/rating/RatingInput';
import OrderChanger from '@/components/myPage/comment/OrderChanger';
import {
  levelReviewList,
  storyReviewList,
  themeReviewList,
} from '@/constants/mypage/typeList';

interface PostReviewRatingThemeLevelStoryProps {
  rating: number;
  setRating: (value: number) => void;
  themeReview: string;
  setThemeReview: (value: string) => void;
  levelReview: string;
  setLevelReview: (value: string) => void;
  storyReview: string;
  setStoryReview: (value: string) => void;
}
export default function PostReviewRatingThemeLevelStory({
  rating,
  setRating,
  themeReview,
  setThemeReview,
  levelReview,
  setLevelReview,
  storyReview,
  setStoryReview,
}: PostReviewRatingThemeLevelStoryProps) {
  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-center gap-2 md:mt-10">
        <p className="text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
          평가하기
        </p>
        <div className="hidden md:block">
          <RatingInput
            rating={rating}
            width={544}
            height={136}
            type="Review"
            onChange={setRating}
          />
        </div>
        <div className="block md:hidden">
          <RatingInput
            rating={rating}
            width={280}
            height={70}
            type="Review"
            onChange={setRating}
          />
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center gap-6 md:mt-10">
        <p className="text-base font-semibold text-font-baseBlack">
          방탈출의 테마는 어땠나요?
        </p>
        <OrderChanger
          options={themeReviewList}
          selectedType={themeReview}
          setSelectedType={setThemeReview}
          gap="gap-2 md:gap-10"
        />
      </div>
      <div className="mt-6 flex flex-col items-center justify-center gap-6 md:mt-10">
        <p className="text-base font-semibold text-font-baseBlack">
          방탈출의 난이도는 어땠나요?
        </p>
        <OrderChanger
          options={levelReviewList}
          selectedType={levelReview}
          setSelectedType={setLevelReview}
          gap="gap-2 md:gap-10"
        />
      </div>
      <div className="mt-6 flex flex-col items-center justify-center gap-6 md:mt-10">
        <p className="text-base font-semibold text-font-baseBlack">
          방탈출의 스토리는 어땠나요?
        </p>
        <OrderChanger
          options={storyReviewList}
          selectedType={storyReview}
          setSelectedType={setStoryReview}
          gap="gap-2 md:gap-10"
        />
      </div>
    </>
  );
}
