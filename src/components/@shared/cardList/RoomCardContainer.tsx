import Image from 'next/image';
import Link from 'next/link';
import AddressAndLevel from '@/components/@shared/cardList/AddressAndLevel';
import EmptyArrayContainer from '@/components/@shared/cardList/EmptyArrayContainer';
import ReviewAndRating from '@/components/@shared/cardList/ReviewAndRating';
import TagAndPlaytime from '@/components/@shared/cardList/TagAndPlaytime';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import Rating from '@/components/@shared/rating/Rating';
import { RoomDTO } from '@/types/room/room.types';
import BookmarkFull from '@/public/icons/cardList/bookmark_full.svg';
import BookmarkLine from '@/public/icons/cardList/bookmark_line.svg';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';
import ReviewPencil from '@/public/icons/mypage/review_pencil.svg';

interface RoomCardContainerProps {
  data: RoomDTO['get'][];
  reviewCheck?: boolean;
}

export default function RoomCardContainer({
  data,
  reviewCheck,
}: RoomCardContainerProps) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-5">
      {data.map((room) => (
        <div
          key={room.themeId}
          className={`${reviewCheck ? 'h-[352px]' : 'h-[252px]'} relative flex  w-[630px] items-start rounded-3xl bg-card p-5`}
        >
          <div className="absolute right-5 flex flex-col">
            <button type="button">
              <Image
                src={room.isMarked ? BookmarkFull : BookmarkLine}
                alt="bookmark"
                width={32}
                height={32}
              />
            </button>
            <button type="button">
              <Image
                src={room.isLiked ? HeartFull : HeartLine}
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
          <Link href={`/room/${room.themeId}`}>
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

          {reviewCheck ? (
            <>
              <div className="absolute bottom-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg">
                  <Image
                    src={ReviewPencil}
                    alt="리뷰 점수"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <Rating
                  rating={room.myRating ?? 0}
                  width={120}
                  height={24}
                  type="Review"
                />
                <p className="text-base font-normal tracking-[-2.5%] text-basefont">
                  {room.myRating?.toFixed(1)}
                </p>
              </div>
              <button
                type="button"
                className="absolute bottom-5 right-5 rounded-full border-[1px] border-mainBlue bg-white px-6 py-2 text-xl font-semibold tracking-[2.5%] text-grayFont"
              >
                {room.myRating === 0 ? '리뷰쓰기' : '수정하기'}
              </button>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}
