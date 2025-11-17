// 모임 참가자 목록 조회 Response
export interface GatheringMemberDTO {
  get: {
    id: number | null;
    profileImage: string;
    nickname: string | null;
    email: string;
    role: string;
  };
}
