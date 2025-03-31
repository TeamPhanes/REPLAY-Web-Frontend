// Response
export interface GatheringDTO {
  get: {
    gatheringId: number;
    listImage: string;
    detailImage: string;
    genres: string[];
    playtime: number;
    themeId: number;
    themeName: string;
    name: string;
    spot: string;
    dateTime: string;
    registrationEnd: string;
    capacity: number;
    participantCount: number;
    address: string;
    level: '쉬움' | '보통' | '어려움';
  };
}
