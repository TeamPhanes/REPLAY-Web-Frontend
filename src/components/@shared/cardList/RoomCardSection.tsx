import { mockRooms, mockLikedRooms } from '@/data/mockRooms';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';

interface RoomCardSectionProps {
  type?: 'mypage' | 'liked';
}

export default function RoomCardSection({ type }: RoomCardSectionProps) {
  let forwardingList;

  if (type === 'mypage') {
    forwardingList = mockLikedRooms.filter((liked) => liked.isLiked);
  } else {
    forwardingList = type === 'liked' ? mockLikedRooms : mockRooms;
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-5">
      <RoomCardContainer data={forwardingList} />
    </div>
  );
}
