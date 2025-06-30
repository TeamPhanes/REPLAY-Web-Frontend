export interface CommentDTO {
  get: {
    commentId: number;
    nickname: string;
    image: string;
    content: string;
    createdAt: string;
    reComments: {
      reCommentId: number;
      nickname: string;
      image: string;
      content: string;
      createdAt: string;
    }[];
  };
}

export interface MyCommentDTO {
  get: {
    [key: string]: {
      gatheringId: number;
      gatheringName: string;
      dateTime: string;
      content: string;
      createdAt: string;
    }[];
  };
}
