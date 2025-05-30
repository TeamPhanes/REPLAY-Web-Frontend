import RoomCard from '@/components/@shared/cardList/RoomCard';
import EmptySearchResult from '@/components/search/EmptySearchResult';
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
    <>
      <div className="mt-6 grid grid-cols-2 gap-5">
        {data &&
          data.map((room) => (
            <RoomCard
              key={room.themeId}
              room={room}
              reviewCheck={reviewCheck}
            />
          ))}
      </div>
      {data && data.length === 0 && <EmptySearchResult />}
    </>
  );
}
