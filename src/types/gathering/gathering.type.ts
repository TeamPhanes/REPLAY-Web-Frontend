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

export interface VisitGatheringDTO {
  get: {
    id: number;
    name: string;
    image: string;
    date: string;
    capacity: number;
    title: string;
    address: string;
    genres: string[];
    playtime: number;
    level: string;
    isLiked: boolean;
    participants: {
      email: null;
      id: null;
      nickname: string;
      profileImage: string;
      role: null;
    }[];
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
    id: number;
    name: string;
    capacity: number;
    date: string;
    address: string;
    registrationStart: string;
    registrationEnd: string;
    content: string;
    image: string;
    price: number;
    isIndividual: boolean; // 총액, 인당 결정 boolean
    participantCount: number;
    participants: [
      {
        id: number | null;
        profileImage: string;
        nickname: string;
        email: string;
        role: string;
      },
    ];
    themeId: number;
    title: string;
    genres: string[];
    isLiked: boolean;
  };
}
