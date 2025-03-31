import Image from 'next/image';
import ReviewMessage from '@/public/icons/cardList/review_message.svg';
import Rating from '../rating/Rating';

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
      <Image src={ReviewMessage} alt="리뷰 아이콘" width={24} height={24} />
      <p className="text-base font-normal tracking-[-2.5%] text-basefont">
        리뷰{reviewCount >= 999 ? '999+' : reviewCount}
      </p>
      <div className="ml-5 flex gap-3">
        <Rating rating={rating} width={120} height={24} type="Review" />
      </div>
    </div>
  );
}
