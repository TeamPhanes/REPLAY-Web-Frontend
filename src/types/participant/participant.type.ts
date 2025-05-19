// 모임 참가자 목록 조회 Response
export interface GatheringMemberDTO {
  get: {
    image: string;
    nickname: string;
    updatedAt: string;
    createdAt: string;
    comment: string;
    representAchievement: string[];
  };
}
