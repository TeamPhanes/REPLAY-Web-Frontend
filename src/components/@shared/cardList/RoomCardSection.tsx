import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useThemeStore } from '@/store/useThemeStore';
import Tag from '@/components/@shared/cardList/Tag';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import { usePostThemeLike } from '@/hooks/reactQuery/usePostThemeLike';
import { usePostThemeMark } from '@/hooks/reactQuery/usePostThemeMark';
import { RoomDTO } from '@/types/room/room.types';
import AddressIcon from '@/public/icons/cardList/address_icon.svg';
import BookmarkFull from '@/public/icons/cardList/bookmark_full.svg';
import BookmarkLine from '@/public/icons/cardList/bookmark_line.svg';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';
import LightbulbIcon from '@/public/icons/cardList/lightbulb_icon.svg';
import StarIcon from '@/public/icons/cardList/rating_star_full.svg';
import ReviewIcon from '@/public/icons/cardList/review_message.svg';

interface RoomCardSectionProps {
  room: RoomDTO['get'];
  favoriteCheck?: boolean;
}

export default function RoomCardSection({
  room,
  favoriteCheck,
}: RoomCardSectionProps) {
  const [isLiked, setIsLiked] = useState(room.isLiked);
  const [isMarked, setIsMarked] = useState(room.isMarked);
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
      <div className="top-10 right-10 md:top-auto md:right-5 absolute rounded-[30px] flex p-1 gap-3 md:p-0">
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
            isMarked ? 'animate-pop' : ''
          }`}
          onClick={() =>
            handleMarkButtonClick(isMarked ? 'UNMARK_POST' : 'MARK_POST')
          }
        >
          <Image
            src={isMarked ? BookmarkFull : BookmarkLine}
            alt="bookmark"
            width={28}
            height={28}
          />
        </button>
      </div>

      <Link
        href={`/theme/${room.themeId}`}
        onClick={() => setSelectedTheme(room)}
        className="w-full md:w-[145px]"
      >
        <Image
          src={room.listImage}
          alt={room.themeName}
          width={145}
          height={218}
          quality={100}
          unoptimized
          className="rounded-[4px] w-full h-[360px] md:w-[145px] md:h-[218px]"
        />
      </Link>

      <Link
        href={`/theme/${room.themeId}`}
        onClick={() => setSelectedTheme(room)}
        className="w-full md:w-auto"
      >
        <div className="md:ml-5 mt-5 md:mt-0 flex min-h-[212px] min-w-[424px] flex-col justify-between">
          <div className="flex flex-col gap-3">
            <Tag tag={room.genres} />
            <TitleAndSpot
              themeName={room.themeName}
              cafe={room.cafe}
              spot={room.spot}
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
                <p className="text-sm tracking-[-2.5%] text-font-baseBlack font-semibold">
                  {room.playtime}분
                </p>
                <span className="text-sm tracking-[-2.5%] text-font-disabled font-normal">
                  •
                </span>
                <p className="text-sm tracking-[-2.5%] text-font-baseBlack font-semibold">
                  {room.minPlayer}~{room.maxPlayer}인
                </p>
                <span className="text-sm tracking-[-2.5%] text-font-disabled font-normal">
                  •
                </span>
                <p className="text-sm tracking-[-2.5%] text-font-baseBlack font-semibold">
                  {room.level}
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
              <p className="text-sm tracking-[2.5%] text-font-baseBlack font-normal">
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
                <p className="text-sm tracking-[-2.5%] text-font-baseBlack font-normal">
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
                <p className="text-sm tracking-[-2.5%] text-font-baseBlack font-normal">
                  {room.rating?.toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
