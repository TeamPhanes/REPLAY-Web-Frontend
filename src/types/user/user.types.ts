export interface UserDTO {
  image: string;
  updatedAt: string;
  createdAt: string;
  nickname: string;
  gender: string;
  email: string;
  comment: string;
  totalGatherings: number;
  totalMakeGatherings: number;
  totalRE: number;
  successCount: number;
  failCount: number;
  representAchievement: string[];
}
