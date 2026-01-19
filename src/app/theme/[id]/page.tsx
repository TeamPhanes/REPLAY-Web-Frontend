'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import PageContainer from '@/components/@shared/layout/PageContainer';
import Loading from '@/components/@shared/loading/Loading';
import AddGatheringModal from '@/components/@shared/modal/AddGathering/AddGatheringModal';
import ReviewSection from '@/components/review/ReviewSection';
import RoomDetailCard from '@/components/roomDetail/RoomDetailCard';
import RoomDetailGatherings from '@/components/roomDetail/RoomDetailGatherings';
import { useGetOtherGathering } from '@/hooks/reactQuery/useGetOtherGathering';
import { useGetReview } from '@/hooks/reactQuery/useGetReview';
import { useGetReviewSummary } from '@/hooks/reactQuery/useGetReviewSummary';
import { useGetThemeDetail } from '@/hooks/reactQuery/useGetTheme';
import { useOpen } from '@/hooks/useOpen';
import { usePagination } from '@/hooks/usePagination';
import WhitePencil from '@/public/icons/mypage/white_pencil.svg';

export default function RoomDetailPage() {
  const [page, setPage] = useState(0);
  const { isOpen, openModal, closeModal } = useOpen();
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

  const { reviewSummary, isLoading: reviewSummaryLoading } =
    useGetReviewSummary(id);
  const totalItems = review ? review.totalCount : 0;
  const { totalPages } = usePagination(page, totalItems, 10);

  if (
    themeDetailLoading ||
    otherGatheringLoading ||
    reviewLoading ||
    !themeDetail ||
    !otherGathering ||
    !review ||
    !reviewSummary
  )
    return (
      <Loading
        isLoading={
          themeDetailLoading ||
          otherGatheringLoading ||
          reviewLoading ||
          reviewSummaryLoading
        }
      />
    );

  return (
    <PageContainer>
      <button
        type="button"
        className="rounded-full p-4 bg-brand-main500 fixed bottom-10 right-10 z-50 shadow-xl"
        onClick={openModal}
      >
        <Image
          src={WhitePencil}
          alt="모임 생성"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </button>
      <AddGatheringModal
        isOpen={isOpen}
        onClose={closeModal}
        themeNameProps={themeDetail.title}
        themeIdProps={themeDetail.id}
      />
      <RoomDetailCard data={themeDetail} />
      <RoomDetailGatherings data={otherGathering.content} />
      <div className="flex items-center gap-2 mt-10 xl:mt-16 mb-6">
        <span className="w-1 h-[30px] bg-line-lightGray" />
        <p className="text-[28px]/[38px] tracking-[-2.5%] text-font-baseWhite font-semibold">
          리뷰
        </p>
      </div>
      <ReviewSection
        review={review}
        reviewSummary={reviewSummary}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </PageContainer>
  );
}
