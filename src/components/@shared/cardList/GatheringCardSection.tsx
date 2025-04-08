import { mockGatherings, mockLikedGatherings } from '@/src/data/mockGatherings';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';

interface GatheringCardSectionProps {
  type?: 'mypage' | 'liked';
  review?: boolean;
}

export default function GatheringCardSection({
  type,
  review,
}: GatheringCardSectionProps) {
  let forwardingList;

  if (type === 'mypage') {
    forwardingList = mockLikedGatherings.filter((liked) => liked.isLiked);
  } else {
    forwardingList = type === 'liked' ? mockLikedGatherings : mockGatherings;
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-5">
      <GatheringCardContainer data={forwardingList} reviewCheck={review} />
    </div>
  );
}
