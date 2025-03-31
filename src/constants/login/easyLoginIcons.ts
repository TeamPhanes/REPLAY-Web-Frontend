export interface IconType {
  label: string;
  value: string;
  color: string;
}

export const easyLoginIcons: { [key: string]: IconType } = {
  kakao: {
    label: 'KAKAO',
    value: '/icons/login/kakao.svg',
    color: 'bg-social-kakao',
  },
  google: {
    label: 'GOOGLE',
    value: '/icons/login/google.svg',
    color: 'bg-social-google',
  },
  naver: {
    label: 'NAVER',
    value: '/icons/login/naver.svg',
    color: 'bg-social-naver',
  },
};
