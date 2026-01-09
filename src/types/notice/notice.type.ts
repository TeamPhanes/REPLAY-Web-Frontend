// 공지사항 목록 Response
export interface NoticeDTO {
  get: {
    content: {
      id: number;
      title: string;
      createdAt: string;
    }[];
  };
}
