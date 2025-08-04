import Rating from '@/components/@shared/rating/Rating';
import ReviewContent from '@/components/review/ReviewContent';
import ReviewLikeButton from '@/components/review/ReviewLikeButton';
import ReviewUser from '@/components/review/ReviewUser';
import ThemeLevelStoryContainer from '@/components/review/ThemeLevelStoryContainer';
import { ReviewDTO } from '@/types/review/review.type';

interface ReviewCardProps {
  data: ReviewDTO['get'];
}

export default function ReviewCard({ data }: ReviewCardProps) {
  if (data.data.length === 0)
    return (
      <div className="flex flex-col justify-center items-center md:w-xl h-[346px] rounded-[30px] bg-card">
        <p className="font-semibold text-2xl/[34px] tracking-[-2.5%] text-basefont">
          아직 작성된 리뷰가 없습니다.
        </p>
      </div>
    );
  return (
    <>
      {data.data.map((review, index) => (
        <div
          key={index}
          className="relative md:h-[270px] md:w-[630px] rounded-3xl bg-card p-5"
        >
          <div className="flex flex-col md:flex-row gap-1 md:gap-0 items-center">
            <ReviewUser dataList={review} />
            <Rating
              rating={review.rating}
              width={120}
              height={24}
              type="Review"
            />
            <ReviewLikeButton
              totalLikes={review.totalLikes}
              isLiked={review.isLiked}
              id={review.id}
            />
          </div>
          <ThemeLevelStoryContainer dataList={review} />
          <ReviewContent content={review.content} image={review.image} />
        </div>
      ))}
    </>
  );
}
