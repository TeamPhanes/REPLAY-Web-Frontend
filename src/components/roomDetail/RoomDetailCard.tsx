import Image from 'next/image';
import { mockRooms } from '@/data/mockRooms';
import { mockRoomsDetail } from '@/data/mockRoomsDetail';
import AddressAndLevel from '@/components/@shared/cardList/AddressAndLevel';
import ReviewAndRating from '@/components/@shared/cardList/ReviewAndRating';
import TagAndPlaytime from '@/components/@shared/cardList/TagAndPlaytime';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import RoomDetailStroy from '@/components/roomDetail/RoomDetailStroy';
import BookmarkLine from '@/public/icons/cardList/bookmark_line.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';

interface RoomDetailCardProps {
  id: string | string[];
}

export default function RoomDetailCard({ id }: RoomDetailCardProps) {
  const list = mockRooms.find((room) => room.themeId === Number(id));
  const detail = mockRoomsDetail;

  if (!list) return <div>임시 오류처리</div>;

  return (
    <div className="flex h-[460px] justify-between">
      <Image
        src={detail.detailImage}
        alt={list.themeName}
        width={797}
        height={460}
        quality={100}
        className="rounded-[30px]"
      />
      <div className="relative h-[460px] w-[471px] rounded-[30px] bg-card p-5">
        <div className="absolute right-5 flex">
          <button type="button">
            <Image src={BookmarkLine} alt="bookmark" width={32} height={32} />
          </button>
          <button type="button">
            <Image src={HeartLine} alt="heart" width={32} height={32} />
          </button>
        </div>
        <div className="w-[360px]">
          <TagAndPlaytime tag={list.genres} playtime={list.playtime} />
        </div>
        <div className="mt-3">
          <TitleAndSpot themeName={list.themeName} spot={list.spot} />
        </div>
        <div className="mt-7 flex flex-col gap-2">
          <ReviewAndRating
            reviewCount={list.reviewCount}
            rating={list.rating}
          />
          <AddressAndLevel address={list.address} level={list.level} />
        </div>
        <RoomDetailStroy story={detail.stroy} />
      </div>
    </div>
  );
}
