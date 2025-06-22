import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useThemeStore } from '@/store/useThemeStore';
import AddressAndLevel from '@/components/@shared/cardList/AddressAndLevel';
import ReviewAndRating from '@/components/@shared/cardList/ReviewAndRating';
import TagAndPlaytime from '@/components/@shared/cardList/TagAndPlaytime';
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

  if (showLoading) return <Loading isLoading={isLoading} />;

  if (themeDetail.themeId !== selectedTheme.themeId) {
    router.replace('/not-found');
    return null;
  }
  return (
    <div className="flex h-[460px] justify-between">
      <Image
        src={detail.detailImage}
        alt={selectedTheme.themeName}
        width={797}
        height={460}
        quality={100}
        className="rounded-[30px]"
      />
      <div className="relative h-[460px] w-[471px] rounded-[30px] bg-card p-5">
        <div className="absolute right-5 flex">
          <button
            type="button"
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
        <div className="w-[360px]">
          <TagAndPlaytime
            tag={selectedTheme.genres}
            playtime={selectedTheme.playtime}
          />
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
          />
        </div>
        <RoomDetailStroy story={detail.story} />
      </div>
    </div>
  );
}
