import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

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
        loading: '#333333',
        mainBlue: '#2227F7',
        mainBlueHover: '#060AAC',
        mainPurple: '#8487fb',
        mainPurpleHover: '#5357F9',
        mainPink: '#FFB0B2',
        basefont: '#111111',
        grayFont: '#767676',
        homeFont: '#DCDCDC',
        setfont: '#C0C0C0',
        detailButton: '#B9B9B9',
        tag: '#505050',
        homeCard: '#606060',
        card: '#EAEAEA',
        cardActive: '#5357F9',
        cardHover: '#B5B7FC',
        ratingCard: '#D9D9D9',
        darkSearch: '#9D9D9D',
        spot: '#999999',
        buttonColor200: '#5357F9',
        buttonColor200Hover: '#E6E7FE',
        progressBar: '#F0F0F0',
        comment: '#FEFEFE',
        commentButton: '#686868',
        error: '#EF4444',
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
      keyframes: {
        dropdownIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        dropdownOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        modalIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        modalOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        dropdownIn: 'dropdownIn 300ms ease-out forwards',
        dropdownOut: 'dropdownOut 200ms ease-in forwards',
        modalIn: 'modalIn 300ms ease-out forwards',
        modalOut: 'modalOut 200ms ease-in forwards',
        typing: 'typing 2s steps(20) infinite alternate, blink .7s infinite',
        pop: 'pop 0.3s ease',
      },
    },
    fontFamily: {
      sans: 'var(--font-pretendard), -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
    },
  },
  safelist: ['bg-social-kakao', 'bg-social-google', 'bg-social-naver'],
  plugins: [
    plugin(function myPlugin({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    }),
  ],
};

export default config;
