// Response
export interface RoomDTO {
  get: {
    themeId: number;
    listImage: string;
    genres: string[];
    playtime: number;
    themeName: string;
    cafe: string;
    spot: string;
    reviewCount: number;
    rating: number;
    minPlayer: number;
    maxPlayer: number;
    address: string;
    isMarked?: boolean;
    isLiked?: boolean;
    reviewId?: number;
    myRating?: number;
    hint?: number;
    numberOfPlayer?: number;
    themeReview?: string;
    levelReview?: string;
    storyReview?: string;
    reviewComment?: string;
    reviewImage?: string | null;
    success?: boolean;
    totalLikes?: number;
    level: string;
  };
}

export interface MyPageRoomDTO {
  get: {
    themeId: number;
    listImage: string;
    genres: string[];
    playtime: number;
    themeName: string;
    spot: string;
    reviewCount: number;
    rating: number;
    address: string;
    isMarked: true;
    isLiked: boolean;
    myRating: number;
    useHint: number;
    numberOfPlayer: number;
    success: boolean;
    themeReview: '좋았어요' | '보통이에요' | '별로예요';
    levelReview: '좋았어요' | '보통이에요' | '별로예요';
    playReview: '좋았어요' | '보통이에요' | '별로예요';
    reviewComment: 'string';
    level: '쉬움' | '보통' | '어려움';
  };
}
