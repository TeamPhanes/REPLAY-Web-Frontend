export interface ListType {
  label: string;
  value: string;
}

export const defaultGenreList = [
  { value: '전체', label: '전체' },
  { value: '공포', label: '공포' },
  { value: '스릴러', label: '스릴러' },
  { value: '추리', label: '추리' },
  { value: '판타지', label: '판타지' },
  { value: '드라마', label: '드라마' },
];

export const defaultLocationList = [
  { value: '홍대', label: '홍대' },
  { value: '건대', label: '건대' },
  { value: '강남', label: '강남' },
  { value: '부천', label: '부천' },
  { value: '강원', label: '강원' },
  { value: '수원', label: '수원' },
  { value: '대구', label: '대구' },
  { value: '더보기', label: '더보기' },
];

export const defaultNewList = [
  { value: 'NEW', label: 'NEW' },
  { value: '출시 예정', label: '출시 예정' },
];

export const favoriteTypeList = [
  { value: 'room', label: '찜한 방탈출' },
  { value: 'gathering', label: '찜한 모임' },
];

export const reviewTypeList = [
  { value: 'room', label: '참여한 방탈출' },
  { value: 'gathering', label: '참여한 모임' },
];

export const commentTypeList = [
  { value: 'new', label: '최신순' },
  { value: 'create', label: '등록순' },
];

export const successTypeList = [
  { value: 'true', label: '성공' },
  { value: 'false', label: '실패' },
];

export const themeReviewList = [
  { value: 'GOOD', label: '좋았어요' },
  { value: 'NORMAL', label: '보통이에요' },
  { value: 'BAD', label: '별로예요' },
];

export const levelReviewList = [
  { value: 'GOOD', label: '좋았어요' },
  { value: 'NORMAL', label: '보통이에요' },
  { value: 'BAD', label: '별로예요' },
];

export const storyReviewList = [
  { value: 'GOOD', label: '좋았어요' },
  { value: 'NORMAL', label: '보통이에요' },
  { value: 'BAD', label: '별로예요' },
];
