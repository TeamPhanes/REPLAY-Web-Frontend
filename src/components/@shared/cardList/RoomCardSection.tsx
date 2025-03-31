import { mockRooms } from '@/data/mockRooms';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';

export default function RoomCardSection() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-5">
      <RoomCardContainer data={mockRooms} />
    </div>
  );
}
