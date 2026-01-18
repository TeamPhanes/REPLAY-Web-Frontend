import RoomCardSection from '@/components/@shared/cardList/RoomCardSection';
import { ThemeListDTO } from '@/types/theme/theme.types';

interface RoomCardProps {
  room: ThemeListDTO['get'];
  favoriteCheck?: boolean;
}

export default function RoomCard({ room, favoriteCheck }: RoomCardProps) {
  return (
    <div
      key={room.id}
      className="xl:max-w-[630px] relative flex flex-col md:flex-row items-start rounded-md bg-card-white p-5 transition-all hover:scale-[102%]"
    >
      <RoomCardSection room={room} favoriteCheck={favoriteCheck} />
    </div>
  );
}
