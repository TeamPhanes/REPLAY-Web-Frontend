const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_PATH = {
  auth: {
    default: `${BASE_URL}/auth`,
    signUp(social: string | number) {
      return `${BASE_URL}/auth/${social}`;
    },
    refresh: `${BASE_URL}/auth/refresh`,
    logout: `${BASE_URL}/auth/logout`,
  },
  theme: {
    default: `${BASE_URL}/theme`,
    search: `${BASE_URL}/theme/search`,
  },
  gathering: {
    default: `${BASE_URL}/gathering`,
  },
  gathering_member: {
    default: `${BASE_URL}/gathering/member`,
  },
  review: {
    default: `${BASE_URL}/review`,
    rating: `${BASE_URL}/review/rating`,
  },
  comment: {
    default: `${BASE_URL}/comment`,
  },
  user: {
    default: `${BASE_URL}/user`,
    me: `${BASE_URL}/user/me`,
    reviewTheme: `${BASE_URL}/user/me/theme`,
    likeTheme: `${BASE_URL}/user/me/theme/like`,
    reviewGathering: `${BASE_URL}/user/me/gathering`,
    likeGathering: `${BASE_URL}/user/me/gathering/like`,
    myComment: `${BASE_URL}/user/me/comment`,
  },
};
