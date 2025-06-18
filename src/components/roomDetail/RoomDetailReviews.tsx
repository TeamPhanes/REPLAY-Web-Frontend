import { useState } from 'react';
import CountListValue from '@/components/@shared/cardList/CountListValue';
import SortDropdown from '@/components/@shared/cardList/SortDropdown';
import SortContainer from '@/components/@shared/layout/SortContainer';
import Loading from '@/components/@shared/loading/Loading';
import ReviewCard from '@/components/review/ReviewCard';
import { useGetReview } from '@/hooks/reactQuery/useGetReview';

interface RoomDetailReviewsProps {
  id: string | string[];
}

export default function RoomDetailReviews({ id }: RoomDetailReviewsProps) {
  const [sort, setSort] = useState('인기순');
  const sortList = ['인기순', '최신순'];
  const { review, isLoading, showLoading } = useGetReview(id);

  if (showLoading) return <Loading isLoading={isLoading} />;
  return (
    <>
      <SortContainer>
        <CountListValue value={review.totalCount} />
        <SortDropdown sort={sort} sortList={sortList} sortChange={setSort} />
      </SortContainer>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <ReviewCard data={review} />
      </div>
    </>
  );
}
