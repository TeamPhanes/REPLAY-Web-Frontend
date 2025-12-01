export interface CommentDTO {
  get: {
    id: number;
    userId: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    nickname: string;
    profileImage: string;
    email: string;
    comments: {
      id: number;
      userId: number;
      content: string;
      createdAt: string;
      updatedAt: string;
      nickname: string;
      profileImage: string;
      email: string;
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
      nickName: string;
    }[];
  };
}
