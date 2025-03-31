import { ReviewAllRatingDTO } from '../types/review/review.type';

export const mockReviewAllRating: ReviewAllRatingDTO['get'] = {
  scoreCount: 1024,
  averageScore: 3.5,
  score: [200, 212, 512, 60, 40],
};
