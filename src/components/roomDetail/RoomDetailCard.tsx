import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useThemeStore } from '@/store/useThemeStore';
import AddressAndLevel from '@/components/@shared/cardList/AddressAndLevel';
import ReviewAndRating from '@/components/@shared/cardList/ReviewAndRating';
import Tag from '@/components/@shared/cardList/Tag';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import Loading from '@/components/@shared/loading/Loading';
import RoomDetailStroy from '@/components/roomDetail/RoomDetailStroy';
import { useGetReviewAllRating } from '@/hooks/reactQuery/useGetReview';
import { useGetThemeDetail } from '@/hooks/reactQuery/useGetTheme';
import { usePostThemeLike } from '@/hooks/reactQuery/usePostThemeLike';
import { usePostThemeMark } from '@/hooks/reactQuery/usePostThemeMark';
import BookmarkFull from '@/public/icons/cardList/bookmark_full.svg';
import BookmarkLine from '@/public/icons/cardList/bookmark_line.svg';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';

interface RoomDetailCardProps {
  id: string | string[];
}

export default function RoomDetailCard({ id }: RoomDetailCardProps) {
  const router = useRouter();
  const { selectedTheme } = useThemeStore();
  const { themeDetail, isLoading, showLoading } = useGetThemeDetail(id);
  const detail = themeDetail;
  const { reviewAllRating } = useGetReviewAllRating(id);
  const [isLiked, setIsLiked] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const { likesMutation } = usePostThemeLike();
  const { marksMutation } = usePostThemeMark();

  const handleLikeButtonClick = (userAction: 'LIKE_POST' | 'UNLIKE_POST') => {
    setIsLiked(userAction === 'LIKE_POST');
    likesMutation.mutate({
      themeId: selectedTheme.themeId,
      userAction,
    });
  };

  const handleMarkButtonClick = (userAction: 'MARK_POST' | 'UNMARK_POST') => {
    setIsMarked(userAction === 'MARK_POST');
    marksMutation.mutate({
      themeId: selectedTheme.themeId,
      userAction,
    });
  };

  useEffect(() => {
    if (selectedTheme) {
      setIsLiked(selectedTheme.isLiked);
      setIsMarked(selectedTheme.isMarked);
    }
  }, [selectedTheme]);

  if (!selectedTheme || showLoading) return <Loading isLoading={isLoading} />;

  if (themeDetail?.themeId !== selectedTheme.themeId) {
    router.replace('/not-found');
    return null;
  }
  return (
    <div className="flex flex-col md:flex-row md:h-[460px] justify-between gap-2">
      <Image
        src={detail.detailImage}
        alt={selectedTheme.themeName}
        width={797}
        height={460}
        quality={100}
        className="w-full h-[360px] md:w-[797px] md:h-[460px] rounded-[30px]"
      />
      <div className="relative md:h-[460px] md:w-[471px] rounded-[30px] bg-card p-5">
        <div className="absolute top-[-340px] md:top-auto bg-card rounded-[30px] md:bg-none p-1 md:p-0 md:rounded-none right-5 flex">
          <button
            type="button"
            className={`transition-transform duration-300 active:scale-90 ${
              isMarked ? 'animate-pop' : ''
            }`}
            onClick={() =>
              handleMarkButtonClick(isMarked ? 'UNMARK_POST' : 'MARK_POST')
            }
          >
            <Image
              src={isMarked ? BookmarkFull : BookmarkLine}
              alt="bookmark"
              width={32}
              height={32}
            />
          </button>
          <button
            type="button"
            className={`transition-transform duration-300 active:scale-90 ${
              isLiked ? 'animate-pop' : ''
            }`}
            onClick={() =>
              handleLikeButtonClick(isLiked ? 'UNLIKE_POST' : 'LIKE_POST')
            }
          >
            <Image
              src={isLiked ? HeartFull : HeartLine}
              alt="heart"
              width={32}
              height={32}
            />
          </button>
        </div>
        <div className="md:w-[360px]">
          <Tag tag={selectedTheme.genres} />
        </div>
        <div className="mt-3">
          <TitleAndSpot
            themeName={selectedTheme.themeName}
            cafe={selectedTheme.cafe}
            spot={selectedTheme.spot}
          />
        </div>
        <div className="mt-7 flex flex-col gap-2">
          <ReviewAndRating
            reviewCount={reviewAllRating.scoreCount}
            rating={reviewAllRating.averageScore}
          />
          <AddressAndLevel
            address={selectedTheme.address}
            level={selectedTheme.level}
            minPlayer={detail.minPlayer}
            maxPlayer={detail.maxPlayer}
          />
        </div>
        <RoomDetailStroy
          story={detail.story}
          themeNameProps={selectedTheme.themeName}
          themeIdProps={selectedTheme.themeId}
        />
      </div>
    </div>
  );
}
