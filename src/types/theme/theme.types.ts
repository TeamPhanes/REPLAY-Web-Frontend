export interface ThemeListDTO {
  get: {
    id: number; // 고유값
    title: string; // 테마명
    playtime: number; // 플레이타임
    level: string; // 난이도
    image: string; // 테마 이미지
    minPlayer: number; // 최소 인원
    maxPlayer: number; // 최대 인원
    note: string | null; // 비고
    cafeName: string; // 방탈출 카페
    spotName: string; // 지점
    address: string; // 주소
    genres: string[]; // 장르
    reviewCount: number; // 리뷰 총 갯수
    avgScore: number; // 리뷰 평균 점수
    isVisited: boolean; // 참여 여부
    isLiked: boolean; // 좋아요 여부
  };
}

export interface VisitThemeListDTO {
  get: {
    content: string;
    genres: string[];
    hint: number;
    id: number;
    image: string;
    isSuccess: true;
    levelReview: string;
    numberOfPlayer: number;
    reviewImages: { id: number; image: string }[];
    score: number;
    cafeName: string;
    spotName: string;
    storyReview: string;
    themeReview: string;
    title: string;
    visitDate: string;
  };
}

export interface PreviewThemeListDTO {
  get: {
    id: number;
    image: string;
    title: string;
  };
}

export interface SuggestThemeListDTO {
  get: {
    id: number;
    spotName: string;
    title: string;
  };
}
