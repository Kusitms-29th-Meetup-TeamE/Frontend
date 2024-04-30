import { IoIosArrowForward } from 'react-icons/io';

import HowTo from '@/containers/main/HowTo';
import RecommendActivity from '@/containers/main/RecommendActivity';

import Image from 'next/image';

export const metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_ORIGIN),
  title: '또바',
  description: '또바는 또바',
};

export default function Home() {
  return (
    <main>
      {/* <div
        className="w-full mx-auto max-w-[1800px] px-[60px] h-[700px] flex justify-center"
        style={{
          backgroundImage: "url('/assets/main/main_banner.png')",
          backgroundSize: 'cover',
        }}
      /> */}
      <HowTo />
      <RecommendActivity />

      <div className="mt-[70px] w-full mx-auto max-w-[1200px] text-center text-body3 text-gray-10">
        <div className="inline-flex items-center gap-[2px] cursor-pointer">
          더 많은 활동 보기
          <IoIosArrowForward />
        </div>
      </div>
    </main>
  );
}
