export interface IconType {
  label: string;
  value: string;
  color: string;
}

export const easyLoginIcons: { [key: string]: IconType } = {
  kakao: {
    label: 'KAKAO',
    value: '/icons/kakao.svg',
    color: 'bg-[#FEE500]',
  },
  google: {
    label: 'GOOGLE',
    value: '/icons/google.svg',
    color: 'bg-[#FFFFFF]',
  },
  naver: {
    label: 'NAVER',
    value: '/icons/naver.svg',
    color: 'bg-[#03C75A]',
  },
};
