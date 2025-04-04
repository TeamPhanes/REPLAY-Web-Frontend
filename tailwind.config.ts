import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#1E1E1E',
        mainBlue: '#2227F7',
        basefont: '#111111',
        grayFont: '#767676',
        homeFont: '#DCDCDC',
        setfont: '#C0C0C0',
        detailButton: '#B9B9B9',
        tag: '#505050',
        homeCard: '#606060',
        card: '#EAEAEA',
        ratingCard: '#D9D9D9',
        spot: '#999999',
        progressBar: '#F0F0F0',
        comment: '#FEFEFE',
        commentButton: '#686868',
        social: {
          kakao: '#FEE500',
          google: '#FFFFFF',
          naver: '#03C75A',
        },
      },
      width: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    fontFamily: {
      sans: 'var(--font-pretendard), -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
    },
  },
  safelist: [
    'bg-social-kakao', // kakao 색상 클래스
    'bg-social-google', // google 색상 클래스
    'bg-social-naver', // naver 색상 클래스
  ],
  plugins: [],
};

export default config;
