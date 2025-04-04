'use client';

import { useParams } from 'next/navigation';
import PageContainer from '@/src/components/@shared/layout/PageContainer';
import RoomDetailCard from '@/components/roomDetail/RoomDetailCard';
import RoomDetailGatherings from '@/components/roomDetail/RoomDetailGatherings';
import RoomDetailAllRating from '@/components/roomDetail/RoomDetailAllRating';
import RoomDetailReviews from '@/src/components/roomDetail/RoomDetailReviews';

export default function RoomDetailPage() {
  const { id } = useParams();

  return (
    <PageContainer>
      <RoomDetailCard id={id} />
      <RoomDetailGatherings id={id} />
      <RoomDetailAllRating />
      <RoomDetailReviews id={id} />
    </PageContainer>
  );
}
