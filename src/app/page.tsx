import { ScrollContainer } from '@/components/common-components/animation/ScrollContainer';

import HowTo from '@/containers/main/HowTo';
import RecommendActivity from '@/containers/main/RecommendActivity';
import ShareExperience from '@/containers/main/ShareExperience';

export const metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_ORIGIN),
  title: '또바',
  description: '또바는 또바',
};

export default function Home() {
  return (
    <main className="flex flex-col gap-[160px]">
      <div>
        <div
          className="w-full mx-auto max-w-[1920px] h-[761px] flex justify-center items-center"
          style={{
            backgroundImage: "url('/assets/main/main_banner.png')",
            backgroundSize: 'cover',
          }}
        >
          <span className="flex flex-col gap-8 text-h1 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <span>나의 일생을 더 아름답고 따뜻하게</span>
            <span className="">
              지역 기반 사회 참여 서비스,&nbsp;
              <span className="bg-primary-orange5 px-2">또바</span>
            </span>
          </span>
        </div>
        <ScrollContainer>
          <HowTo />
        </ScrollContainer>
      </div>

      <ScrollContainer>
        <RecommendActivity />
      </ScrollContainer>
      <ScrollContainer>
        <ShareExperience />
      </ScrollContainer>
    </main>
  );
}
