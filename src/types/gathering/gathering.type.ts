// 모임 목록 조회 Response
export interface GatheringDTO {
  get: {
    gatheringId: number;
    listImage: string;
    genres: string[];
    playtime: number;
    themeId: number;
    themeName: string;
    name: string;
    leader: string;
    spot: string;
    dateTime: string;
    registrationEnd: string;
    capacity: number;
    participantCount: number;
    address: string;
    level: '쉬움' | '보통' | '어려움';
  };
}

// 모임 상세 조회 Response
export interface GatheringDetailDTO {
  get: {
    gatheringId: number;
    detailImage: string;
    price: number;
    content: string;
    leader: string;
  };
}
