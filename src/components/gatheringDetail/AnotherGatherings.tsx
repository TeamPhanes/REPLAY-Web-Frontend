import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import { GatheringDTO } from '@/types/gathering/gathering.type';

interface AnotherGatheringsProps {
  title: string;
  gatherings: GatheringDTO['get']['data'];
}

export default function AnotherGatherings({
  title,
  gatherings,
}: AnotherGatheringsProps) {
  return (
    <div className="mt-14">
      <p className="ml-1 text-2xl font-semibold text-white">{title}</p>
      <div>
        <div className="flex justify-between">
          <GatheringCardContainer data={gatherings} />
        </div>
      </div>
    </div>
  );
}
