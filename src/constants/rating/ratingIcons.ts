export interface IconType {
  empty: string;
  line: string;
  full: string;
}

export const ratingIcons: { [key: string]: IconType } = {
  Room: {
    empty: '/icons/rating/room_rating_line.svg',
    line: '/icons/rating/room_rating_line.svg',
    full: '/icons/rating/room_rating_full.svg',
  },
  Review: {
    empty: '/icons/rating/review_rating_empty.svg',
    line: '/icons/rating/review_rating_line.svg',
    full: '/icons/rating/review_rating_full.svg',
  },
  User: {
    empty: '/icons/rating/user_rating_empty.svg',
    line: '/icons/rating/user_rating_line.svg',
    full: '/icons/rating/user_rating_full.svg',
  },
};
