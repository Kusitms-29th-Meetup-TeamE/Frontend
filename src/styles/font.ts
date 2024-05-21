import localFont from 'next/font/local';

const wantedSans = localFont({
  src: [
    {
      path: '../../public/assets/fonts/WantedSans-Bold.woff2',
      weight: '700',
    },
    {
      path: '../../public/assets/fonts/WantedSans-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../../public/assets/fonts/WantedSans-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/assets/fonts/WantedSans-Regular.woff2',
      weight: '400',
    },
  ],
  variable: '--font-wantedSans',
});

export default wantedSans;
