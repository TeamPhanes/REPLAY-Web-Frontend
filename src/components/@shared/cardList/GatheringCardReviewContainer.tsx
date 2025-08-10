import GatheringCardReview from '@/components/@shared/cardList/GatheringCardReview';
import { GatheringDTO } from '@/types/gathering/gathering.type';

interface GatheringCardContainerProps {
  data: GatheringDTO['get']['data'];
}

export default function GatheringCardReviewContainer({
  data,
}: GatheringCardContainerProps) {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
      {data.map((gathering) => (
        <GatheringCardReview
          key={gathering.gatheringId}
          gathering={gathering}
        />
      ))}
    </div>
  );
}
