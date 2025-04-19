import Rating from '@/components/@shared/rating/Rating';
import ReviewContent from '@/components/review/ReviewContent';
import ReviewLikeButton from '@/components/review/ReviewLikeButton';
import ReviewUser from '@/components/review/ReviewUser';
import { ReviewDTO } from '@/types/review/review.type';

interface ReviewCardProps {
  data: ReviewDTO['get'][];
}

export default function ReviewCard({ data }: ReviewCardProps) {
  return (
    <>
      {data.map((review, index) => (
        <div
          key={index}
          className="relative h-[242px] w-[630px] rounded-3xl bg-card p-5"
        >
          <div className="flex items-center">
            <Rating
              rating={review.rating}
              width={120}
              height={24}
              type="Review"
            />
            <ReviewUser
              userImage={review.user.image}
              userNickname={review.user.nickname}
              createdAt={review.createdAt}
              success={review.success}
              hint={review.hint}
              playUser={review.playUser}
            />
            <ReviewLikeButton totalLikes={review.totalLikes} />
          </div>
          <ReviewContent content={review.content} image={review.image} />
        </div>
      ))}
    </>
  );
}
