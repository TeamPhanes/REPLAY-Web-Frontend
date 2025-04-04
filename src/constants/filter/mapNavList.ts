export interface ListType {
  value: string;
}

export const mapNavList: { [key: string]: ListType } = {
  room: {
    value: '/room-map',
  },
  gathering: {
    value: '/gathering-map',
  },
};
