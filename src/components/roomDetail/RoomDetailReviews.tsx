import { useState } from 'react';
import { mockReviews } from '@/data/mockReviews';
import CountListValue from '@/components/@shared/cardList/CountListValue';
import SortDropdown from '@/components/@shared/cardList/SortDropdown';
import SortContainer from '@/components/@shared/layout/SortContainer';
import Loading from '@/components/@shared/loading/Loading';
import ReviewSection from '@/components/review/ReviewSection';
import { useGetReview } from '@/hooks/reactQuery/useGetReview';

interface RoomDetailReviewsProps {
  id: string | string[];
}

export default function RoomDetailReviews({ id }: RoomDetailReviewsProps) {
  const [sort, setSort] = useState('인기순');
  const sortList = ['인기순', '최신순'];
  const { review, isLoading, showLoading } = useGetReview(id);

  // if (showLoading) return <Loading isLoading={isLoading} />;
  return (
    <>
      <div className="flex items-center gap-2 mt-16">
        <span className="w-1 h-[30px] bg-line-lightGray" />
        <p className="text-[28px]/[38px] tracking-[-2.5%] text-font-baseWhite font-semibold">
          리뷰
        </p>
      </div>
      <ReviewSection />
    </>
  );
}
