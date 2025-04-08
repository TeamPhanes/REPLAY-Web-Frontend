// Response
export interface RoomDTO {
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
    isMarked?: true;
    isLiked?: boolean;
    myRating?: number;
    level: '쉬움' | '보통' | '어려움';
  };
}
