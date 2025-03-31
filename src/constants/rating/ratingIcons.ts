export interface IconType {
  line: string;
  full: string;
}

export const ratingIcons: { [key: string]: IconType } = {
  Room: {
    line: '/icons/rating/room_rating_line.svg',
    full: '/icons/rating/room_rating_full.svg',
  },
  Review: {
    line: '/icons/rating/review_rating_line.svg',
    full: '/icons/rating/review_rating_full.svg',
  },
  User: {
    line: '/icons/rating/user_rating_line.svg',
    full: '/icons/rating/user_rating_full.svg',
  },
};
