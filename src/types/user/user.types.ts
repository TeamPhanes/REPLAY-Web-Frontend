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
    gender: string;
    email: string;
    comment: string;
    totalGathering: number;
    totalMakeGathering: number;
    totalTheme: number;
    successCount: number;
    failCount: number;
    createdAt: string;
    updatedAt: string;
    representAchievement: string[];
  };
}
