'use client';

import { useParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import PageContainer from '@/components/@shared/layout/PageContainer';
import Loading from '@/components/@shared/loading/Loading';
import AnotherGatherings from '@/components/gatheringDetail/AnotherGatherings';
import GatheringDetailCard from '@/components/gatheringDetail/GatheringDetailCard';
import ParticipantList from '@/components/gatheringDetail/ParticipantList';
import CommentsContainer from '@/components/gatheringDetail/comment/CommentsContainer';
import {
  useGetDateGathering,
  useGetGatheringDetail,
} from '@/hooks/reactQuery/useGetGatheringDetail';

export default function GatheringDetailPage() {
  const { id } = useParams();
  const { accessToken } = useAuthStore();
  const { gatheringDetail, isLoading: gatheringDetailLoading } =
    useGetGatheringDetail(accessToken, id);
  const { dateGathering, isLoading: dateGatheringLoading } =
    useGetDateGathering(accessToken, gatheringDetail?.date, {
      enabled: !!gatheringDetail,
    });

  if (
    gatheringDetailLoading ||
    dateGatheringLoading ||
    !gatheringDetail ||
    !dateGathering
  )
    return (
      <Loading
        isLoading={
          gatheringDetailLoading ||
          dateGatheringLoading ||
          !gatheringDetail ||
          !dateGathering
        }
      />
    );

  return (
    <PageContainer>
      <GatheringDetailCard data={gatheringDetail} />
      <ParticipantList
        capacity={gatheringDetail.capacity}
        gatheringMember={gatheringDetail.participants}
      />
      <CommentsContainer
        id={id}
        gatheringMember={gatheringDetail.participants}
      />
      <AnotherGatherings
        title="비슷한 일정 다른 모임"
        data={dateGathering.content}
      />
    </PageContainer>
  );
}
