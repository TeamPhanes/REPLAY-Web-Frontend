export interface ThemeListDTO {
  get: {
    id: number; // 고유값
    title: string; // 테마명
    playtime: number; // 플레이타임
    level: string; // 난이도
    image: string; // 테마 이미지
    minPlayer: number; // 최소 인원
    maxPlayer: number; // 최대 인원
    note: string; // 비고
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
