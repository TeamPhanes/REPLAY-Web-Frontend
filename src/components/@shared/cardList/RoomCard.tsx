import ReviewRoomCardSection from '@/components/@shared/cardList/ReviewRoomCardSection';
import RoomCardSection from '@/components/@shared/cardList/RoomCardSection';
import { RoomDTO } from '@/types/room/room.types';

interface RoomCardProps {
  room: RoomDTO['get'];
  favoriteCheck?: boolean;
}

export default function RoomCard({ room, favoriteCheck }: RoomCardProps) {
  return (
    <div
      key={room.themeId}
      className="md:max-w-[630px] relative flex flex-col md:flex-row items-start rounded-md bg-card-white p-5 transition-all hover:scale-[102%]"
    >
      <RoomCardSection room={room} favoriteCheck={favoriteCheck} />
    </div>
  );
}
