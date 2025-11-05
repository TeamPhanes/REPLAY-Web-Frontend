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

export interface OtherUserDTO {
  get: {
    image: string;
    nickname: string;
    emailMark: boolean;
    email: string;
    comment: string;
    createdAt: string;
    updatedAt: string;
    totalMakeGathering: number;
    totalGathering: number;
    totalTheme: number;
    successCount: number;
    ranking: string;
    representAchievement: string[];
  };
}
