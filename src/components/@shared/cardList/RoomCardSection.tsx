import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useThemeStore } from '@/store/useThemeStore';
import AddressAndLevel from '@/components/@shared/cardList/AddressAndLevel';
import ReviewAndRating from '@/components/@shared/cardList/ReviewAndRating';
import TagAndPlaytime from '@/components/@shared/cardList/TagAndPlaytime';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import { usePostThemeLike } from '@/hooks/reactQuery/usePostThemeLike';
import { usePostThemeMark } from '@/hooks/reactQuery/usePostThemeMark';
import { RoomDTO } from '@/types/room/room.types';
import BookmarkFull from '@/public/icons/cardList/bookmark_full.svg';
import BookmarkLine from '@/public/icons/cardList/bookmark_line.svg';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';

interface RoomCardSectionProps {
  room: RoomDTO['get'];
  favoriteCheck?: boolean;
  reviewCheck?: boolean;
}

export default function RoomCardSection({
  room,
  favoriteCheck,
  reviewCheck,
}: RoomCardSectionProps) {
  const [isLiked, setIsLiked] = useState(favoriteCheck ? true : room.isLiked);
  const [isMarked, setIsMarked] = useState(reviewCheck ? true : room.isMarked);
  const { setSelectedTheme } = useThemeStore();
  const { likesMutation } = usePostThemeLike();
  const { marksMutation } = usePostThemeMark();

  const handleLikeButtonClick = (userAction: 'LIKE_POST' | 'UNLIKE_POST') => {
    setIsLiked(userAction === 'LIKE_POST');
    likesMutation.mutate({
      themeId: room.themeId,
      userAction,
    });
  };

  const handleMarkButtonClick = (userAction: 'MARK_POST' | 'UNMARK_POST') => {
    setIsMarked(userAction === 'MARK_POST');
    marksMutation.mutate({
      themeId: room.themeId,
      userAction,
    });
  };

  useEffect(() => {
    if (!favoriteCheck) {
      setIsLiked(room.isLiked);
    }
  }, [room.isLiked, favoriteCheck]);

  return (
    <>
      <div
        className={`${reviewCheck ? 'left-[580px]' : 'right-5'} absolute flex flex-col`}
      >
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
      <Image
        src={room.listImage}
        alt={room.themeName}
        width={212}
        height={212}
        quality={100}
        className="rounded-3xl w-[212px] h-[212px]"
      />
      <Link
        href={`/room/${room.themeId}`}
        onClick={() => setSelectedTheme(room)}
      >
        <div className="ml-5 flex h-[212px] w-[322px] flex-col justify-between">
          <div className="flex flex-col gap-3">
            <TagAndPlaytime tag={room.genres} playtime={room.playtime} />
            <TitleAndSpot
              themeName={room.themeName}
              cafe={room.cafe}
              spot={room.spot}
            />
          </div>
          <div className="flex flex-col gap-2">
            <ReviewAndRating
              reviewCount={room.reviewCount}
              rating={room.rating}
            />
            <AddressAndLevel address={room.address} level={room.level} />
          </div>
        </div>
      </Link>
    </>
  );
}
