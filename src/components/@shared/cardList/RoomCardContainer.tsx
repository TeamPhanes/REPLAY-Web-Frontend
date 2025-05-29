import RoomCard from '@/components/@shared/cardList/RoomCard';
import { RoomDTO } from '@/types/room/room.types';

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
      {data &&
        data.map((room) => (
          <RoomCard key={room.themeId} room={room} reviewCheck={reviewCheck} />
        ))}
    </div>
  );
}
