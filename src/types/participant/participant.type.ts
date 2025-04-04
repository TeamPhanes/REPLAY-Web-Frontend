// 모임 참가자 목록 조회 Response
export interface ParticipantDTO {
  get: {
    image: string;
    nickname: string;
    updateAt: string;
    createdAt: string;
    comment: string;
    representAchievement: string[];
  };
}
