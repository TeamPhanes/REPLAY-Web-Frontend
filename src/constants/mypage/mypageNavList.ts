export interface ListType {
  label: string;
  value: string;
}

export const mypageNavList: { [key: string]: ListType } = {
  myschedule: {
    label: '나의 일정',
    value: '/mypage/schedule',
  },
  myfavorite: {
    label: '찜한 목록',
    value: '/mypage/favorite',
  },
  myreview: {
    label: '참여한 목록',
    value: '/mypage/review',
  },
  mycomment: {
    label: '내가 쓴 댓글',
    value: '/mypage/comment',
  },
  allachievements: {
    label: '모든 업적',
    value: '/mypage/achievements',
  },
};
