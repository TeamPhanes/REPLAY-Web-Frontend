import Loading from '@/components/@shared/loading/Loading';
import ProgressBar from '@/components/@shared/progressBar/ProgressBar';
import Rating from '@/components/@shared/rating/Rating';
import { useGetReviewAllRating } from '@/hooks/reactQuery/useGetReview';

interface RoomDetailAllRatingProps {
  id: string | string[];
}

export default function RoomDetailAllRating({ id }: RoomDetailAllRatingProps) {
  const { reviewAllRating, isLoading, showLoading } = useGetReviewAllRating(id);

  if (showLoading) return <Loading isLoading={isLoading} />;
  return (
    <div className="mt-16 flex p-5 md:p-0 flex-col md:flex-row md:h-[177px] w-full items-center justify-between rounded-[30px] bg-ratingCard">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <p className="text-5xl font-extrabold text-basefont">
          {reviewAllRating.averageScore.toFixed(1)}
        </p>
        <Rating
          rating={reviewAllRating.averageScore}
          width={240}
          height={48}
          type="Review"
        />
      </div>
      <div className="flex flex-col md:flex-row md:h-[126px] items-center justify-center md:border-l-[1px] border-grayFont md:pl-16">
        <div className="flex flex-row md:flex-col gap-3 text-center items-center">
          <p className="flex-shrink-0 whitespace-nowrap text-xl font-normal tracking-[-2.5%] text-basefont">
            총 리뷰갯수
          </p>
          <p className="text-[32px]/[42px] font-bold tracking-[-2.5^] text-basefont">
            {reviewAllRating.scoreCount}
          </p>
        </div>
        <div className="flex flex-col md:px-16">
          {reviewAllRating.scores.map((count: number, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <p className="w-5 flex-shrink-0 text-xs/[18px] font-normal tracking-[-2.5%] text-tag">
                {5 - index}점
              </p>
              <div className="min-w-[260px] md:min-w-[389px]">
                <ProgressBar value={count} max={reviewAllRating.scoreCount} />
              </div>
              <p className="flex-shrink-0 text-xs/[18px] font-normal tracking-[-2.5%] text-tag">
                {count.toLocaleString()}개
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
