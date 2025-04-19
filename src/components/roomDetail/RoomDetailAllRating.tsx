import { mockReviewAllRating } from '@/data/mockReviewAllRating';
import ProgressBar from '@/components/@shared/progressBar/ProgressBar';
import Rating from '@/components/@shared/rating/Rating';

export default function RoomDetailAllRating() {
  const rating = mockReviewAllRating;
  return (
    <div className="mt-16 flex h-[177px] w-full items-center justify-between rounded-[30px] bg-ratingCard">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <p className="text-5xl font-extrabold text-basefont">
          {rating.averageScore}
        </p>
        <Rating
          rating={rating.averageScore}
          width={240}
          height={48}
          type="Review"
        />
      </div>
      <div className="flex h-[126px] items-center justify-center border-l-[1px] border-grayFont pl-16">
        <div className="flex flex-col gap-3 text-center">
          <p className="flex-shrink-0 whitespace-nowrap text-xl font-normal tracking-[-2.5%] text-basefont">
            총 리뷰갯수
          </p>
          <p className="text-[32px]/[42px] font-bold tracking-[-2.5^] text-basefont">
            {rating.scoreCount}
          </p>
        </div>
        <div className="flex flex-col px-16">
          {rating.score.map((count, index) => (
            <div key={index} className="flex items-center gap-2">
              <p className="w-5 flex-shrink-0 text-xs/[18px] font-normal tracking-[-2.5%] text-tag">
                {5 - index}점
              </p>
              <div className="min-w-[389px]">
                <ProgressBar value={count} max={rating.scoreCount} />
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
