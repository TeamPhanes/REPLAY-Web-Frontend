'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import PageContainer from '@/components/@shared/layout/PageContainer';
import Loading from '@/components/@shared/loading/Loading';
import ReviewSection from '@/components/review/ReviewSection';
import RoomDetailCard from '@/components/roomDetail/RoomDetailCard';
import RoomDetailGatherings from '@/components/roomDetail/RoomDetailGatherings';
import { useGetOtherGathering } from '@/hooks/reactQuery/useGetOtherGathering';
import { useGetReview } from '@/hooks/reactQuery/useGetReview';
import { useGetThemeDetail } from '@/hooks/reactQuery/useGetTheme';
import { usePagination } from '@/hooks/usePagination';

export default function RoomDetailPage() {
  const [page, setPage] = useState(0);
  const { id } = useParams();
  const { accessToken } = useAuthStore();
  const { themeDetail, isLoading: themeDetailLoading } = useGetThemeDetail(
    accessToken,
    id
  );
  const { otherGathering, isLoading: otherGatheringLoading } =
    useGetOtherGathering(accessToken, id, 2);
  const { review, isLoading: reviewLoading } = useGetReview(
    accessToken,
    id,
    page,
    10
  );
  const totalItems = review ? review.totalCount : 0;
  const { totalPages } = usePagination(page, totalItems);

  if (
    themeDetailLoading ||
    otherGatheringLoading ||
    reviewLoading ||
    !themeDetail ||
    !otherGathering ||
    !review
  )
    return (
      <Loading
        isLoading={themeDetailLoading || otherGatheringLoading || reviewLoading}
      />
    );

  return (
    <PageContainer>
      <RoomDetailCard data={themeDetail} />
      <RoomDetailGatherings data={otherGathering.content} />
      <div className="flex items-center gap-2 mt-16">
        <span className="w-1 h-[30px] bg-line-lightGray" />
        <p className="text-[28px]/[38px] tracking-[-2.5%] text-font-baseWhite font-semibold">
          리뷰
        </p>
      </div>
      <ReviewSection
        data={review}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </PageContainer>
  );
}
