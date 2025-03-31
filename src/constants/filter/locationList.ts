export interface ListType {
  label: string;
  value: string[];
}

export const locationList: { [key: string]: ListType } = {
  state: {
    label: '시.도',
    value: ['서울', '경기'],
  },
  city: {
    label: '시.군.구',
    value: ['강동구', '구리시'],
  },
};
