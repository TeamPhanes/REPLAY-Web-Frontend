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
        brand: '#515151',
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
  },
  safelist: [
    'bg-social-kakao', // kakao 색상 클래스
    'bg-social-google', // google 색상 클래스
    'bg-social-naver', // naver 색상 클래스
  ],
  plugins: [],
};

export default config;
