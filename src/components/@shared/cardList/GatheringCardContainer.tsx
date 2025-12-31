import GatheringCard from '@/components/@shared/cardList/GatheringCard';
import EmptySearchResult from '@/components/search/EmptySearchResult';
import { GatheringDTO } from '@/types/gathering/gathering.type';

interface GatheringCardContainerProps {
  data: GatheringDTO['get'][];
  favoriteCheck?: boolean;
}

export default function GatheringCardContainer({
  data,
  favoriteCheck,
}: GatheringCardContainerProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        {data &&
          data.map((gathering) => (
            <GatheringCard
              key={gathering.id}
              gathering={gathering}
              favoriteCheck={favoriteCheck}
            />
          ))}
      </div>
      <div className="w-full">
        {data && data.length === 0 && (
          <EmptySearchResult text="모임을 찾지 못했어요." />
        )}
      </div>
    </>
  );
}
