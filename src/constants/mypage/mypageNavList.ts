export interface ListType {
  label: string;
  value: string;
}

export const mypageNavList: { [key: string]: ListType } = {
  '/mypage': {
    label: '내 프로필',
    value: '/mypage',
  },
  '/mypage/schedule': {
    label: '나의 일정',
    value: '/mypage/schedule',
  },
  '/mypage/favorite': {
    label: '찜한 목록',
    value: '/mypage/favorite',
  },
  '/mypage/review': {
    label: '참여한 목록',
    value: '/mypage/review',
  },
  '/mypage/comment': {
    label: '내가 쓴 댓글',
    value: '/mypage/comment',
  },
  '/mypage/achievements': {
    label: '나의 업적',
    value: '/mypage/achievements',
  },
};
