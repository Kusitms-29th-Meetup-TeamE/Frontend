import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary color
        'primary-orange1': '#fff1ea',
        'primary-orange2': '#feddcb',
        'primary-orange3': '#fdc3a3',
        'primary-orange4': '#fca778',
        'primary-orange5': '#fb8c4f',
        'primary-orange6': '#fa7328', // main
        'primary-orange7': '#d56222',
        'primary-orange8': '#b2521c',
        'primary-orange9': '#8f4217',
        'primary-orange10': '#703412',

        // secondary color
        'secondary-violet1': '#f8f6ff',
        'secondary-violet2': '#e8e2ff',
        'secondary-violet3': '#ddd4ff',
        'secondary-violet4': '#cdc1fe',
        'secondary-violet5': '#c4b5fe',
        'secondary-violet6': '#b5a2fe', // main
        'secondary-violet7': '#a593e7',
        'secondary-violet8': '#8173b4',
        'secondary-violet9': '#64598c',
        'secondary-violet10': '#4c446b',

        // gray scale
        'gray-01': '#fdfdfd',
        'gray-02': '#f6f6f6',
        'gray-03': '#f1f1f2',
        'gray-04': '#dcdddd',
        'gray-05': '#c4c6c7',
        'gray-06': '#95989a',
        'gray-07': '#666a6d',
        'gray-08': '#53575b',
        'gray-09': '#373c40',
        'gray-10': '#303539',
        'gray-11': '#272b30',

        // error color
        'error-main': '#FF465C',
      },
      fontSize: {
        h1: [
          '1.875rem', // 30px
          {
            fontWeight: 'bold',
            lineHeight: '50px',
          },
        ],
        h2: [
          '1.125rem', //18px
          {
            fontWeight: '600',
            lineHeight: '30px',
          },
        ],
        h3: [
          '1.125rem', // 18px
          {
            fontWeight: '400',
            lineHeight: '28px',
          },
        ],
        h4: [
          '1rem', // 16px
          {
            fontWeight: '500',
            lineHeight: '26px',
          },
        ],
        body1: [
          '1.125rem', // 18px
          {
            fontWeight: '600',
            lineHeight: '30px',
          },
        ],
        body2: [
          '1rem', // 16px
          {
            fontWeight: '500',
            lineHeight: '26px',
          },
        ],
        'chip-bold': [
          '0.875rem', // 14px
          {
            fontWeight: 'bold',
            lineHeight: '20px',
          },
        ],
        'chip-medium': [
          '0.875rem', // 14px
          {
            fontWeight: '500',
            lineHeight: '20px',
          },
        ],
        'footer-bold': [
          '1.25rem', // 20px
          {
            fontWeight: 'bold',
            lineHeight: '26px',
          },
        ],
        'footer-medium': [
          '0.875rem', // 14px
          {
            fontWeight: '500',
            lineHeight: '26px',
          },
        ],
        'footer-regular': [
          '0.875rem', // 14px
          {
            fontWeight: '400',
            lineHeight: '18px',
          },
        ],
      },
      fontFamily: {
        wantedSans: ['var(--font-wantedSans)'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
};
export default config;
