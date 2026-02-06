import Pagination from '@/components/@shared/pagination/Pagination';
import { ReviewDTO, ReviewSummaryDTO } from '@/types/review/review.type';
import EmptySearchResult from '../search/EmptySearchResult';
import ReviewCard from './ReviewCard';
import ReviewSummaryCard from './ReviewSummaryCard';

interface ReviewSectionProps {
  review: ReviewDTO['get'];
  reviewSummary: ReviewSummaryDTO['get'];
  page: number;
  totalPages: number;
  setPage: (value: number) => void;
}

export default function ReviewSection({
  review,
  reviewSummary,
  page,
  totalPages,
  setPage,
}: ReviewSectionProps) {
  if (review.content.length === 0)
    return <EmptySearchResult text="리뷰를 찾지 못했어요." />;
  return (
    <div className="rounded-lg bg-card-white">
      <ReviewSummaryCard reviewSummary={reviewSummary} />
      <ReviewCard review={review} />
      <div className="border-t-[1px] border-line-lightGray pb-10">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onChange={setPage}
        />
      </div>
    </div>
  );
}
