'use client';

import { useParams } from 'next/navigation';
import { mockGatherings } from '@/data/mockGatherings';
import { mockGatheringsDetail } from '@/data/mockGatheringsDetail';
import PageContainer from '@/components/@shared/layout/PageContainer';
import Loading from '@/components/@shared/loading/Loading';
import AnotherGatherings from '@/components/gatheringDetail/AnotherGatherings';
import GatheringDetailCard from '@/components/gatheringDetail/GatheringDetailCard';
import ParticipantList from '@/components/gatheringDetail/ParticipantList';
import CommentsContainer from '@/components/gatheringDetail/comment/CommentsContainer';
import { useGetGatheringMember } from '@/hooks/reactQuery/useGetGatheringMember';

export default function GatheringDetailPage() {
  const { id } = useParams();
  const { gatheringMember, isLoading, showLoading } = useGetGatheringMember(id);
  const findDetailGathering = mockGatherings.find(
    (gathering) => gathering.gatheringId === Number(id)
  );
  if (!findDetailGathering) return <div>임시 오류처리</div>;

  if (showLoading) return <Loading isLoading={isLoading} />;

  const minLength = 6;
  while (gatheringMember.length < minLength) {
    gatheringMember.push({
      image: '',
      updatedAt: '',
      createdAt: '',
      nickname: '',
      comment: '',
      representAchievement: [''],
    });
  }

  const leaderAnotherGathering = mockGatherings.slice(0, 2);
  const dateTimeAntherGathering = mockGatherings
    .filter((gathering) => gathering.dateTime === findDetailGathering.dateTime)
    .slice(0, 2);
  return (
    <PageContainer>
      <GatheringDetailCard
        list={findDetailGathering}
        detail={mockGatheringsDetail}
      />
      <ParticipantList gatheringMember={gatheringMember} />
      <CommentsContainer id={id} leaderCheck={gatheringMember[0].nickName} />
      <AnotherGatherings
        title={`${gatheringMember[0].nickName}님이 만든 모임`}
        gatherings={leaderAnotherGathering}
      />
      <AnotherGatherings
        title="똑같은 일정 다른 모임"
        gatherings={dateTimeAntherGathering}
      />
    </PageContainer>
  );
}
