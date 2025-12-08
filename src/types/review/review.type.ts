// 리뷰 목록 조회 Response
export interface ReviewDTO {
  get: {
    content: {
      content: string;
      createdAt: string;
      hint: number;
      id: number;
      title: string;
      images: string[];
      genres: string[];
      isLiked: boolean;
      isSuccess: boolean;
      levelReview: string;
      note: string | null;
      profileImage: string;
      cafeName: string;
      spotName: string;
      likeCount: number;
      nickname: string;
      numberOfPlayer: number;
      reviewImage: string;
      score: number;
      storyReview: string;
      themeReview: string;
    }[];
  };
}

// 리뷰 요약 정보 조회 Response
export interface ReviewSummaryDTO {
  get: {
    avgScore: number;
    createdGatheringCount: number;
    reviewCountSummary: {
      total: number;
      counts: [
        {
          score: number;
          count: number;
        },
      ];
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
  };
}
