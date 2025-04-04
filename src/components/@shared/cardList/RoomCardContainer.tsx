import { RoomDTO } from '@/src/types/room/room.types';
import Image from 'next/image';
import Link from 'next/link';
import BookmarkLine from '@/public/icons/cardList/bookmark_line.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';
import TagAndPlaytime from '@/components/@shared/cardList/TagAndPlaytime';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import ReviewAndRating from '@/components/@shared/cardList/ReviewAndRating';
import AddressAndLevel from '@/components/@shared/cardList/AddressAndLevel';

interface RoomCardContainerProps {
  data: RoomDTO['get'][];
}

export default function RoomCardContainer({ data }: RoomCardContainerProps) {
  return (
    <>
      {data.map((room) => (
        <Link href={`/room/${room.themeId}`} key={room.themeId}>
          <div className="relative flex h-[252px] w-[630px] items-start rounded-3xl bg-card p-5">
            <Image
              src={room.listImage}
              alt={room.themeName}
              width={212}
              height={212}
              quality={100}
              className="rounded-3xl"
            />

            <div className="absolute right-5 flex flex-col">
              <button type="button">
                <Image
                  src={BookmarkLine}
                  alt="bookmark"
                  width={32}
                  height={32}
                />
              </button>
              <button type="button">
                <Image src={HeartLine} alt="heart" width={32} height={32} />
              </button>
            </div>

            <div className="ml-5 flex h-[212px] w-[322px] flex-col justify-between">
              <div className="flex flex-col gap-3">
                <TagAndPlaytime tag={room.genres} playtime={room.playtime} />
                <TitleAndSpot themeName={room.themeName} spot={room.spot} />
              </div>
              <div className="flex flex-col gap-2">
                <ReviewAndRating
                  reviewCount={room.reviewCount}
                  rating={room.rating}
                />
                <AddressAndLevel address={room.address} level={room.level} />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
