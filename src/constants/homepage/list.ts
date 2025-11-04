export interface ListType {
  label: string;
  value: string;
}

export const defaultGenreList = [
  '미스터리',
  '성인',
  '스릴러',
  '아케이드',
  '액션',
  '어드벤처',
  '역사',
  '잠입',
  '감성',
  '공포',
  '드라마',
  '동화',
  '로맨스',
  '문제방',
  '미공개',
  '미션',
  '코믹',
  '판타지',
  '퍼즐',
  'SF',
  '추리',
  '기타',
];

export const defaultLocationList = [
  { value: '홍대', label: '홍대' },
  { value: '건대', label: '건대' },
  { value: '강남', label: '강남' },
  { value: '부천', label: '부천' },
  { value: '강원', label: '강원' },
];

export const defaultNewList = [
  { value: 'NEW', label: 'NEW' },
  { value: '출시 예정', label: '출시 예정' },
];
