import GatheringCardReview from '@/components/@shared/cardList/GatheringCardReview';
import { VisitGatheringDTO } from '@/types/gathering/gathering.type';

interface GatheringCardContainerProps {
  data: VisitGatheringDTO['get'][];
}

export default function GatheringCardReviewContainer({
  data,
}: GatheringCardContainerProps) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
      {data.map((gathering) => (
        <GatheringCardReview key={gathering.id} gathering={gathering} />
      ))}
    </div>
  );
}
