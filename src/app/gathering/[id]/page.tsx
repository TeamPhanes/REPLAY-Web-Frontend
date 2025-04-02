'use client';

import { useParams } from 'next/navigation';
import PageContainer from '@/src/components/@shared/layout/PageContainer';
import GatheringDetailCard from '@/src/components/gatheringDetail/GatheringDetailCard';
import ParticipantList from '@/src/components/gatheringDetail/ParticipantList';
import CommentsContainer from '@/src/components/gatheringDetail/CommentsContainer';
import { mockGatherings } from '@/src/data/mockGatherings';
import { mockGatheringsDetail } from '@/src/data/mockGatheringsDetail';
import AnotherGatherings from '@/src/components/gatheringDetail/AnotherGatherings';

export default function GatheringDetailPage() {
  const { id } = useParams();
  const findDetailGathering = mockGatherings.find(
    (gathering) => gathering.gatheringId === Number(id)
  );
  if (!findDetailGathering) return <div>임시 오류처리</div>;

  const leaderAnotherGathering = mockGatherings
    .filter((gathering) => gathering.leader === findDetailGathering.leader)
    .slice(0, 2);
  const dateTimeAntherGathering = mockGatherings
    .filter((gathering) => gathering.dateTime === findDetailGathering.dateTime)
    .slice(0, 2);

  return (
    <PageContainer>
      <GatheringDetailCard
        list={findDetailGathering}
        detail={mockGatheringsDetail}
      />
      <ParticipantList />
      <CommentsContainer leaderCheck={mockGatheringsDetail.leader} />
      <AnotherGatherings
        title={`${findDetailGathering.leader}님이 만든 모임`}
        gatherings={leaderAnotherGathering}
      />
      <AnotherGatherings
        title="똑같은 일정 다른 모임"
        gatherings={dateTimeAntherGathering}
      />
    </PageContainer>
  );
}
