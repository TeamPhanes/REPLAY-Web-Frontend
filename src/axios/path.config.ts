export const API_PATH = {
  auth: {
    default: '/auth',
    signUp(social: string) {
      return `/auth${social}`;
    },
  },
};
