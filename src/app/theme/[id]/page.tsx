'use client';

import { useParams } from 'next/navigation';
import PageContainer from '@/components/@shared/layout/PageContainer';
import RoomDetailAllRating from '@/components/roomDetail/RoomDetailAllRating';
import RoomDetailCard from '@/components/roomDetail/RoomDetailCard';
import RoomDetailGatherings from '@/components/roomDetail/RoomDetailGatherings';
import RoomDetailReviews from '@/components/roomDetail/RoomDetailReviews';

export default function RoomDetailPage() {
  const { id } = useParams();

  return (
    <PageContainer>
      <RoomDetailCard id={id} />
      <RoomDetailGatherings id={id} />
      <RoomDetailReviews id={id} />
    </PageContainer>
  );
}
