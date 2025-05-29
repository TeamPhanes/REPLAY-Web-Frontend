import GatheringCard from '@/components/@shared/cardList/GatheringCard';
import { GatheringDTO } from '@/types/gathering/gathering.type';

interface GatheringCardContainerProps {
  data: GatheringDTO['get'][];
}

export default function GatheringCardContainer({
  data,
}: GatheringCardContainerProps) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-5">
      {data &&
        data.map((gathering) => (
          <GatheringCard key={gathering.gatheringId} gathering={gathering} />
        ))}
    </div>
  );
}
