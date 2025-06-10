// 모임 목록 조회 Response
export interface GatheringDTO {
  get: {
    gatheringId: number;
    listImage: string;
    genres: string[];
    playtime: number;
    name: string;
    cafe: string;
    spot: string;
    themeId: number;
    dateTime: string;
    registrationEnd: string;
    capacity: number;
    participantCount: number;
    participants: { name: string; image: string }[];
    address: string;
    isLiked?: boolean;
    level: '쉬움' | '보통' | '어려움';
  };
}

// 모임 상세 조회 Response
export interface GatheringDetailDTO {
  get: {
    gatheringId: number;
    name: string;
    detailImage: string;
    capacity: number;
    dateTime: string;
    price: number;
    registrationStart: string;
    registrationEnd: string;
    content: string;
    isIndividual: boolean;
  };
}
