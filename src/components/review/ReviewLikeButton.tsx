import Image from 'next/image';
import LikeButton from '@/public/icons/detail/like_button.svg';

interface ReviewLikeButtonProps {
  totalLikes: number | undefined;
  className?: string;
}

export default function ReviewLikeButton({
  totalLikes,
  className,
}: ReviewLikeButtonProps) {
  return (
    <button
      type="button"
      className={`${className} absolute right-5 flex gap-1 rounded-full bg-white px-2 py-[2px] items-center`}
    >
      <Image src={LikeButton} alt="좋아요" width={24} height={24} />
      <p className="text-base font-normal tracking-[-2.5%] text-spot">
        {totalLikes ?? 0}
      </p>
    </button>
  );
}
