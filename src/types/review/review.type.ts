// 리뷰 목록 조회 Response
export interface ReviewDTO {
  get: {
    themeId: number;
    user: {
      nickname: string;
      image: string;
    };
    content: string;
    image: string[];
    rating: number;
    success: boolean;
    themeReview: string;
    levelReview: string;
    storyReview: string;
    hint: number;
    createdAt: string;
    playUser: number;
    totalLikes: number;
  };
}

// 리뷰 총 평점 조회 Response
export interface ReviewAllRatingDTO {
  get: {
    scoreCount: number;
    averageScore: number;
    score: number[];
  };
}
