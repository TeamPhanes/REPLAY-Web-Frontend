// 리뷰 목록 조회 Response
export interface ReviewDTO {
  get: {
    avgScore: number;
    createdGatheringCount: number;
    reviewCountSummary: {
      total: number;
      counts: {
        score: number;
        count: number;
      }[];
    };
    userEvaluation: {
      theme: {
        label: string;
        percent: number;
      };
      level: {
        label: string;
        percent: number;
      };
      story: {
        label: string;
        percent: number;
      };
    };
    contents: {
      content: string;
      createdAt: string;
      hint: number;
      id: number;
      image: string | null;
      isLiked: boolean;
      isSuccess: boolean;
      levelReview: string;
      likeCount: number;
      nickname: string;
      numberOfPlayer: number;
      profileImage: string;
      score: number;
      storyReview: string;
      themeReview: string;
    }[];
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
