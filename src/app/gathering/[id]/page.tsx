'use client';

import { useParams, useRouter } from 'next/navigation';
import { useGatheringStore } from '@/store/useGatheringStore';
import PageContainer from '@/components/@shared/layout/PageContainer';
import Loading from '@/components/@shared/loading/Loading';
import GatheringDetailCard from '@/components/gatheringDetail/GatheringDetailCard';
import ParticipantList from '@/components/gatheringDetail/ParticipantList';
import CommentsContainer from '@/components/gatheringDetail/comment/CommentsContainer';
import { useGetGatheringDetail } from '@/hooks/reactQuery/useGetGathering';
import { useGetGatheringMember } from '@/hooks/reactQuery/useGetGatheringMember';

export default function GatheringDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { gatheringMember } = useGetGatheringMember(id);
  const { selectedGathering } = useGatheringStore();
  const { gatheringDetail, isLoading, showLoading } = useGetGatheringDetail(id);

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
  if (gatheringDetail.gatheringId !== selectedGathering.gatheringId) {
    router.replace('/not-found');
    return null;
  }
  return (
    <PageContainer>
      <GatheringDetailCard
        list={selectedGathering}
        detail={gatheringDetail}
        leader={gatheringMember[0].nickname}
      />
      <ParticipantList gatheringMember={gatheringMember} />
      <CommentsContainer id={id} leaderCheck={gatheringMember[0].nickName} />
      {/* <AnotherGatherings
        title={`${gatheringMember[0].nickName}님이 만든 모임`}
        gatherings={leaderAnotherGathering}
      />
      <AnotherGatherings
        title="똑같은 일정 다른 모임"
        gatherings={dateTimeAntherGathering}
      /> */}
    </PageContainer>
  );
}
