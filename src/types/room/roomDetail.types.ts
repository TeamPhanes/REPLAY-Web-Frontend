// Response
export interface RoomDetailDTO {
  get: {
    id: number;
    title: string;
    story: string;
    playtime: number;
    level: string;
    image: string;
    minPlayer: number;
    maxPlayer: number;
    note: string | null;
    cafeName: string;
    spotName: string;
    address: string;
    phone: string;
    link: string;
    genres: string[];
    isLiked: boolean;
    isVisited: boolean;
  };
}
