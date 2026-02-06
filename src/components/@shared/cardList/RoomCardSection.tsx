import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/@shared/cardList/Tag';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import { usePostThemeLike } from '@/hooks/reactQuery/usePostThemeLike';
import { usePostThemeMark } from '@/hooks/reactQuery/usePostThemeMark';
import { ThemeListDTO } from '@/types/theme/theme.types';
import AddressIcon from '@/public/icons/cardList/address_icon.svg';
import BookmarkFull from '@/public/icons/cardList/bookmark_full.svg';
import BookmarkLine from '@/public/icons/cardList/bookmark_line.svg';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';
import LightbulbIcon from '@/public/icons/cardList/lightbulb_icon.svg';
import StarIcon from '@/public/icons/cardList/rating_star_full.svg';
import ReviewIcon from '@/public/icons/cardList/review_message.svg';
import DefaultImage from '@/public/icons/modal/review_default_image.svg';

interface RoomCardSectionProps {
  room: ThemeListDTO['get'];
  favoriteCheck?: boolean;
}

export default function RoomCardSection({
  room,
  favoriteCheck,
}: RoomCardSectionProps) {
  const [isLiked, setIsLiked] = useState(room.isLiked);
  const [isVisited, setIsVisited] = useState(room.isVisited);
  const { likesMutation } = usePostThemeLike();
  const { marksMutation } = usePostThemeMark();
  const levelList = {
    HARD: '어려움',
    NORMAL: '보통',
    EASY: '쉬움',
  };

  const handleLikeButtonClick = (userAction: 'LIKE_POST' | 'UNLIKE_POST') => {
    setIsLiked(userAction === 'LIKE_POST');
    likesMutation.mutate({
      themeId: room.id,
      userAction,
    });
  };

  const handleMarkButtonClick = (userAction: 'MARK_POST' | 'UNMARK_POST') => {
    setIsVisited(userAction === 'MARK_POST');
    marksMutation.mutate({
      themeId: room.id,
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
      <div className="absolute right-5 top-auto flex gap-3 rounded-l-md rounded-t-none bg-card-white p-1 md:p-0">
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
            width={28}
            height={28}
          />
        </button>
        <button
          type="button"
          className={`transition-transform duration-300 active:scale-90 ${
            isVisited ? 'animate-pop' : ''
          }`}
          onClick={() =>
            handleMarkButtonClick(isVisited ? 'UNMARK_POST' : 'MARK_POST')
          }
        >
          <Image
            src={isVisited ? BookmarkFull : BookmarkLine}
            alt="bookmark"
            width={28}
            height={28}
          />
        </button>
      </div>

      <Link href={`/theme/${room.id}`} className="w-full shrink-0 md:w-[145px]">
        <Image
          src={room.image === null ? DefaultImage : room.image}
          alt={room.title}
          width={145}
          height={218}
          quality={100}
          unoptimized
          className="h-[360px] w-full rounded-[4px] md:h-[218px] md:w-[145px]"
        />
      </Link>

      <Link href={`/theme/${room.id}`} className="w-full md:w-auto">
        <div className="mt-5 flex min-h-[212px] min-w-72 flex-col justify-between md:ml-5 md:mt-0 md:min-w-[424px]">
          <div className="flex flex-col gap-3">
            <Tag tag={room.genres} />
            <TitleAndSpot
              themeName={room.title}
              cafe={room.cafeName}
              spot={room.spotName}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-[6px]">
              <Image
                src={LightbulbIcon}
                alt="전구 아이콘"
                width={20}
                height={20}
              />
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold tracking-[-2.5%] text-font-baseBlack">
                  {room.playtime}분
                </p>
                <span className="text-sm font-normal tracking-[-2.5%] text-font-disabled">
                  •
                </span>
                <p className="text-sm font-semibold tracking-[-2.5%] text-font-baseBlack">
                  {room.minPlayer}~{room.maxPlayer}인
                </p>
                <span className="text-sm font-normal tracking-[-2.5%] text-font-disabled">
                  •
                </span>
                <p className="text-sm font-semibold tracking-[-2.5%] text-font-baseBlack">
                  {levelList[room.level as keyof typeof levelList]}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[6px]">
              <Image
                src={AddressIcon}
                alt="주소 아이콘"
                width={20}
                height={20}
              />
              <p className="text-sm font-normal tracking-[2.5%] text-font-baseBlack">
                {room.address}
              </p>
            </div>

            <div className="flex items-center gap-12">
              <div className="flex items-center gap-[6px]">
                <Image
                  src={ReviewIcon}
                  alt="리뷰 아이콘"
                  width={20}
                  height={20}
                />
                <p className="text-sm font-normal tracking-[-2.5%] text-font-baseBlack">
                  {room.reviewCount >= 999 ? '999+' : room.reviewCount}
                </p>
              </div>
              <div className="flex items-center gap-[6px]">
                <Image
                  src={StarIcon}
                  alt="점수 아이콘"
                  width={20}
                  height={20}
                />
                <p className="text-sm font-normal tracking-[-2.5%] text-font-baseBlack">
                  {room.avgScore?.toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
