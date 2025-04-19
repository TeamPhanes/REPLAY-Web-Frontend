import Image from 'next/image';
import Rating from '@/components/@shared/rating/Rating';
import ReviewMessage from '@/public/icons/cardList/review_message.svg';

interface ReviewAndRatingProps {
  reviewCount: number;
  rating: number;
}

export default function ReviewAndRating({
  reviewCount,
  rating,
}: ReviewAndRatingProps) {
  return (
    <div className="flex items-center">
      <div className="flex gap-1">
        <Image src={ReviewMessage} alt="리뷰 아이콘" width={24} height={24} />
        <p className="text-base font-normal tracking-[-2.5%] text-basefont">
          리뷰{reviewCount >= 999 ? '999+' : reviewCount}
        </p>
      </div>
      <div className="ml-5 flex items-center gap-3">
        <Rating rating={rating} width={120} height={24} type="Review" />
        <p className="text-base font-normal tracking-[-2.5%] text-basefont">
          {rating?.toFixed(1)}
        </p>
      </div>
    </div>
  );
}
