import { useState } from 'react';
import Image from 'next/image';
import { usePostReviewLike } from '@/hooks/reactQuery/usePostReviewLike';
import LikeButtonFull from '@/public/icons/detail/like_button_full.svg';
import LikeButtonLine from '@/public/icons/detail/like_button_line.svg';

interface ReviewLikeButtonProps {
  totalLikes: number | undefined;
  isLiked?: boolean;
  id: number;
  className?: string;
}

export default function ReviewLikeButton({
  totalLikes,
  isLiked,
  id,
  className,
}: ReviewLikeButtonProps) {
  const [isReviewLiked, setIsReviewLiked] = useState(isLiked);
  const { likesMutation } = usePostReviewLike();

  const handleLikeButtonClick = (userAction: 'LIKE_POST' | 'UNLIKE_POST') => {
    setIsReviewLiked(userAction === 'LIKE_POST');
    likesMutation.mutate({
      reviewId: id,
      userAction,
    });
  };
  return (
    <button
      type="button"
      className={`${className} absolute -top-[2px] right-0 z-10 flex items-center gap-1 rounded-full bg-white px-2 py-[2px]`}
      onClick={() =>
        handleLikeButtonClick(isReviewLiked ? 'UNLIKE_POST' : 'LIKE_POST')
      }
    >
      <Image
        src={isReviewLiked ? LikeButtonFull : LikeButtonLine}
        alt="좋아요"
        width={24}
        height={24}
      />
      <p
        className={`${isReviewLiked ? 'text-mainBlue' : 'text-spot'} text-base font-normal tracking-[-2.5%]`}
      >
        {totalLikes ?? 0}
      </p>
    </button>
  );
}
