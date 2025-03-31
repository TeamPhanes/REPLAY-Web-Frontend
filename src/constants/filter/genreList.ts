export interface ListType {
  label: string;
  value: string[];
}

export const genreList: { [key: string]: ListType } = {
  genre: {
    label: '테마',
    value: ['전체', '미스터리'],
  },
};
