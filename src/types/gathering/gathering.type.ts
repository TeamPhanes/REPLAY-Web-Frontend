// 모임 목록 조회 Response
export interface GatheringDTO {
  get: {
    totalCount: number;
    currentPage: number;
    data: {
      gatheringId: number;
      isLiked?: boolean;
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
      level: string;
    }[];
  };
}

// 모임 상세 조회 Response
export interface GatheringDetailDTO {
  get: {
    gatheringId: number;
    detailImage: string;
    genres: string[];
    registrationStart: string;
    registrationEnd: string;
    name: string;
    themeId: number;
    themeName: string;
    content: string;
    dateTime: string;
    price: number;
    address: string;
    participantCount: number;
    capacity: number;
  };
}
