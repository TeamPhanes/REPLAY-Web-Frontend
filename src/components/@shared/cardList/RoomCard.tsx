import ReviewRoomCardSection from '@/components/@shared/cardList/ReviewRoomCardSection';
import RoomCardSection from '@/components/@shared/cardList/RoomCardSection';
import { RoomDTO } from '@/types/room/room.types';

interface RoomCardProps {
  room: RoomDTO['get'];
  favoriteCheck?: boolean;
  reviewCheck?: boolean;
}

export default function RoomCard({
  room,
  favoriteCheck,
  reviewCheck,
}: RoomCardProps) {
  return (
    <div
      key={room.themeId}
      className={`${reviewCheck ? 'h-[445px]' : 'h-[252px]'} relative flex  w-[630px] items-start rounded-3xl bg-card p-5`}
    >
      <RoomCardSection
        room={room}
        favoriteCheck={favoriteCheck}
        reviewCheck={reviewCheck}
      />
      {reviewCheck ? <ReviewRoomCardSection room={room} /> : null}
    </div>
  );
}
