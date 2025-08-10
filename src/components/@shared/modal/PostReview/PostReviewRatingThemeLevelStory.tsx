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
      <div className="flex flex-col justify-center items-center mt-10 gap-2">
        <p className="font-semibold text-2xl/[34px] tracking-[-2.5%] text-basefont">
          방탈출은 만족 하셨나요?
        </p>
        <RatingInput
          rating={rating}
          width={320}
          height={63}
          type="Review"
          onChange={setRating}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 gap-2">
        <p className="font-normal text-xl md:text-2xl/[34px] tracking-[-2.5%] text-basefont">
          방탈출이 테마와 잘 맞았나요?
        </p>
        <OrderChanger
          options={themeReviewList}
          selectedType={themeReview}
          setSelectedType={setThemeReview}
          gap="gap-2 md:gap-10"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 gap-2">
        <p className="font-normal text-xl md:text-2xl/[34px] tracking-[-2.5%] text-basefont">
          방탈출의 난이도는 적절했나요?
        </p>
        <OrderChanger
          options={levelReviewList}
          selectedType={levelReview}
          setSelectedType={setLevelReview}
          gap="gap-2 md:gap-10"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 gap-2">
        <p className="font-normal text-xl md:text-2xl/[34px] tracking-[-2.5%] text-basefont">
          방탈출의 스토리는 잘 어울렸나요?
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
