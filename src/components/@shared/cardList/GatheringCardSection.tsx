import { mockGatherings } from '@/src/data/mockGatherings';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';

export default function GatheringCardSection() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-5">
      <GatheringCardContainer data={mockGatherings} />
    </div>
  );
}
