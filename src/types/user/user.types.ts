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
