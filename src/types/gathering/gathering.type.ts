// 모임 목록 조회 Response
export interface GatheringDTO {
  get: {
    id: number;
    name: string;
    image: string;
    date: string;
    participantCount: number;
    capacity: number;
    title: string;
    address: string;
    genres: string[];
    playtime: number;
    level: string;
    isLiked: boolean;
  };
}

export interface OtherGatheringDTO {
  get: {
    totalPages: number;
    number: number;
    data: {
      id: number;
      name: string;
      image: string;
      date: string;
      title: string;
      address: string;
      genres: string[];
      playtime: number;
      level: string;
      participantCount: number;
      capacity: number;
      isLiked: boolean;
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
