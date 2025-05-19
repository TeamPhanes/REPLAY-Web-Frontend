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
    dateTime: string;
    registrationEnd: string;
    capacity: number;
    participantCount: number;
    address: string;
    isLiked?: boolean;
    level: '쉬움' | '보통' | '어려움';
  };
}

export interface GatheringLikedDTO {
  get: {
    gatheringId: number;
    name: string;
    address: string;
    spot: string;
    cafe: string;
    dateTime: string;
    registrationEnd: string;
    themeId: number;
    listImage: string;
    themeName: string;
    genres: string[];
    playtime: number;
    capacity: number;
    participantCount?: number;
    level: '쉬움' | '보통' | '어려움';
  };
}

export interface GatheringReviewDTO {
  get: {
    address: string;
    cafe: string;
    capacity: number;
    dateTime: string;
    gatheringId: number;
    genres: string[];
    level: '쉬움' | '보통' | '어려움';
    listImage: string;
    name: string;
    participants: {
      name: string;
      image: string;
    }[];
    playtime: number;
    registrationEnd: string;
    isLiked: boolean;
    spot: string;
    themeId: number;
    themeName: string;
    userId: number;
  };
}

// 모임 상세 조회 Response
export interface GatheringDetailDTO {
  get: {
    gatheringId: number;
    detailImage: string;
    price: number;
    content: string;
  };
}
