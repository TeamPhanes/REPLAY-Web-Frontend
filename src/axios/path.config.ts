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
    like: `${BASE_URL}/theme/like`,
    visit: `${BASE_URL}/theme/visit`,
    search: `${BASE_URL}/theme/search`,
    preview: `${BASE_URL}/theme/preview`,
  },
  gathering: {
    default: `${BASE_URL}/gathering`,
    likeGathering: `${BASE_URL}/gathering/like`,
    host: `${BASE_URL}/gathering/host`,
    date: `${BASE_URL}/gathering/date`,
  },
  gathering_member: {
    default: `${BASE_URL}/gathering/member`,
  },
  review: {
    default: `${BASE_URL}/review`,
    summary: `${BASE_URL}/review/summary`,
  },
  comment: {
    default: `${BASE_URL}/gathering/comment`,
  },
  user: {
    default: `${BASE_URL}/user`,
    me: `${BASE_URL}/user/me`,
    myProfile: `${BASE_URL}/user/me/profile`,
    reviewTheme: `${BASE_URL}/user/me/theme/visit`,
    likeTheme: `${BASE_URL}/user/me/theme/like`,
    reviewGathering: `${BASE_URL}/user/me/gathering/visit`,
    myComment: `${BASE_URL}/user/me/comment`,
  },
};
