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
    success: '성공' | '실패'; // boolean 형태로 변경
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
