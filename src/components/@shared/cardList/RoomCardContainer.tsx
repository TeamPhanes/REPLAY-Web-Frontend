import RoomCard from '@/components/@shared/cardList/RoomCard';
import EmptySearchResult from '@/components/search/EmptySearchResult';
import { RoomDTO } from '@/types/room/room.types';
import { ThemeListDTO } from '@/types/theme/theme.types';

interface RoomCardContainerProps {
  data: ThemeListDTO['get'][];
  favoriteCheck?: boolean;
  className: string;
}

export default function RoomCardContainer({
  data,
  favoriteCheck,
  className,
}: RoomCardContainerProps) {
  return (
    <>
      <div className={`${className} mt-6 grid gap-5`}>
        {data &&
          data.map((room) => (
            <RoomCard key={room.id} room={room} favoriteCheck={favoriteCheck} />
          ))}
      </div>
      {data && data.length === 0 && <EmptySearchResult />}
    </>
  );
}
