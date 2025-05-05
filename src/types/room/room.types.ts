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
    address: string;
    isMarked?: true;
    isLiked?: boolean;
    myRating?: number;
    level: '쉬움' | '보통' | '어려움';
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
