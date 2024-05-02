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
      <div className="px-[60px]">
        <div
          className="w-full rounded-[20px] mx-auto max-w-[1800px] px-[60px] h-[700px] flex justify-center"
          style={{
            backgroundImage: "url('/assets/main/main_banner.png')",
            backgroundSize: 'cover',
          }}
        />
        <HowTo />
      </div>
      <RecommendActivity />
      <ShareExperience />
    </main>
  );
}
