import { mockReviews } from '@/data/mockReviews';
import CountListValue from '@/components/@shared/cardList/CountListValue';
import SortDropdown from '@/components/@shared/cardList/SortDropdown';
import SortContainer from '@/components/@shared/layout/SortContainer';
import ReviewCard from '@/components/review/ReviewCard';

interface RoomDetailReviewsProps {
  id: string | string[];
}

export default function RoomDetailReviews({ id }: RoomDetailReviewsProps) {
  const filteredReviews = mockReviews.filter(
    (review) => review.themeId === Number(id)
  );
  return (
    <>
      <SortContainer>
        <CountListValue value={300} />
        <SortDropdown />
      </SortContainer>
      <div className="mt-6 grid grid-cols-2">
        <ReviewCard data={filteredReviews} />
      </div>
    </>
  );
}
