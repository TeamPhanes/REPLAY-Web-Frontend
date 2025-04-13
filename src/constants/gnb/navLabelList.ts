export interface ListType {
  label: string;
  value: string;
}

export const navLabelList: { [key: string]: ListType } = {
  room: {
    label: '방탈출',
    value: '/room',
  },
  gathering: {
    label: '모임',
    value: '/gathering',
  },
};

export const navLoginDropdownList: ListType[] = [
  { label: '마이 페이지', value: '/mypage' },
  { label: '1:1 문의', value: '/' },
];
