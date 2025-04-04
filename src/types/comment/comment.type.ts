export interface CommentDTO {
  get: {
    commentId: number;
    nickname: string;
    image: string;
    content: string;
    createdAt: string;
    reComments: {
      reCommentsId: number;
      nickname: string;
      image: string;
      content: string;
      createdAt: string;
    }[];
  };
}
