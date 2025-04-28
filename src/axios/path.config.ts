const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_PATH = {
  auth: {
    default: '/auth',
    signUp(social: string | number) {
      return `${BASE_URL}/auth/${social}`;
    },
  },
  gathering: {
    default: `${BASE_URL}/gathering`,
  },
};
