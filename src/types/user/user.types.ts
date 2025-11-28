export interface GnvMeDTO {
  get: {
    image: string;
    nickname: string;
  };
}

export interface UserDTO {
  get: {
    comment: string;
    createdAt: string;
    email: string;
    emailMark: boolean;
    failCount: number;
    gender: string | null;
    genderMark: boolean;
    image: string;
    nickname: string;
    successCount: number;
    totalGathering: number;
    totalMakeGathering: number;
    totalTheme: number;
    updatedAt: string;
    representAchievement: string[];
  };
}

export interface MyProfileDTO {
  get: {
    achievements: {
      id: number;
      progress: number;
      isRepresentative: boolean;
      completedAt: string;
    }[];
    createGatheringCount: number;
    createdAt: string;
    email: string;
    nickname: string;
    profileComment: string;
    profileImage: string;
    successThemeCount: number;
    updatedAt: string;
    visitGatheringCount: number;
    visitThemeCount: number;
  };
}

export interface OtherUserDTO {
  get: {
    achievements: string[];
    createGatheringCount: number;
    createdAt: string;
    email: string;
    nickname: string;
    profileComment: string;
    profileImage: string;
    successThemeCount: number;
    updatedAt: string;
    visitGatheringCount: number;
    visitThemeCount: number;
  };
}
