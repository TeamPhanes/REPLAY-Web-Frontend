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
  gathering: {
    default: `${BASE_URL}/gathering`,
  },
  user: {
    default: `${BASE_URL}/user`,
    me: `${BASE_URL}/user/me`,
  },
};
