export interface ListType {
  label: string;
  value: string;
}

export const favoriteTypeList = [
  { value: 'room', label: '찜한 방탈출' },
  { value: 'gathering', label: '찜한 모임' },
];

export const reviewTypeList = [
  { value: 'room', label: '참여한 방탈출' },
  { value: 'gathering', label: '참여한 모임' },
];

export const commentTypeList = [
  { value: 'desc', label: '최신순' },
  { value: 'asc', label: '등록순' },
];

export const successTypeList = [
  { value: 'true', label: '성공' },
  { value: 'false', label: '실패' },
];

export const themeReviewList = [
  { value: 'LIKE', label: '적절함' },
  { value: 'NORMAL', label: '보통' },
  { value: 'DISLIKE', label: '부적절함' },
];

export const levelReviewList = [
  { value: 'LIKE', label: '적절함' },
  { value: 'NORMAL', label: '보통' },
  { value: 'DISLIKE', label: '부적절함' },
];

export const storyReviewList = [
  { value: 'LIKE', label: '좋음' },
  { value: 'NORMAL', label: '보통' },
  { value: 'DISLIKE', label: '아쉬움' },
];
