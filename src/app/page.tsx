import { ScrollContainer } from '@/components/common-components/animation/ScrollContainer';

import HowTo from '@/containers/main/HowTo';
import Notice from '@/containers/main/Notice';
import Point from '@/containers/main/Point';
import RecommendActivity from '@/containers/main/RecommendActivity';
import ShareExperience from '@/containers/main/ShareExperience';
import SubBannerSlider from '@/containers/main/SubBannerSlider';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col gap-[160px]">
      <div>
        <div
          className="relative w-full mx-auto max-w-[1920px] h-[761px] flex justify-center items-center"
          style={{
            backgroundImage: "url('/assets/main/main_banner.png')",
            backgroundSize: 'cover',
          }}
        >
          <ScrollContainer>
            <Image
              src="/assets/main/banner_tail.svg"
              alt=""
              className="absolute right-0 top-[-100px]"
              width={65}
              height={57}
            />
            <span className="flex flex-col gap-8 text-h1 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
              <span>나의 일생을 더 아름답고 따뜻하게</span>
              <span className="">
                지역 기반 사회 참여 서비스,&nbsp;
                <span className="bg-primary-orange5 px-2">또바</span>
              </span>
            </span>
          </ScrollContainer>
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
      <ScrollContainer>
        <Point />
      </ScrollContainer>
      <ScrollContainer>
        <SubBannerSlider
          imgs={[
            '/assets/main/subBanner1.svg',
            '/assets/main/subBanner1.svg',
            '/assets/main/subBanner1.svg',
          ]}
        />
      </ScrollContainer>
      <ScrollContainer>
        <Notice />
      </ScrollContainer>
    </main>
  );
}
