import { GatheringDTO } from '@/src/types/gathering/gathering.type';
import GatheringCardContainer from '../@shared/cardList/GatheringCardContainer';

interface AnotherGatheringsProps {
  title: string;
  gatherings: GatheringDTO['get'][];
}

export default function AnotherGatherings({
  title,
  gatherings,
}: AnotherGatheringsProps) {
  return (
    <div className="mt-14">
      <p className="ml-1 text-2xl font-semibold text-white">{title}</p>
      <div>
        <div className="mt-3 flex justify-between">
          <GatheringCardContainer data={gatherings} />
        </div>
      </div>
    </div>
  );
}
