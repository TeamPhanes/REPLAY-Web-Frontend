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
