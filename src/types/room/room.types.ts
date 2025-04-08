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
    isLiked?: boolean;
    level: '쉬움' | '보통' | '어려움';
  };
}
