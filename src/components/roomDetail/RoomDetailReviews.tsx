import { mockReviews } from '@/src/data/mockReviews';
import SortContainer from '@/src/components/@shared/layout/SortContainer';
import CountListValue from '@/src/components/@shared/cardList/CountListValue';
import SortDropdown from '@/src/components/@shared/cardList/SortDropdown';
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
