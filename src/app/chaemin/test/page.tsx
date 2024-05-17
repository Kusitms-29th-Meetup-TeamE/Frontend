import Sidebar from '@/components/mypage/Sidebar';

export default function ChaemTest() {
  return (
    <div className="w-full max-w-[1200px] m-auto flex flex-col">
      <Sidebar />
      <div className="ml-[282px]">
        <div className="flex gap-2">
          <button className="border p-2 rounded-md">button1</button>
          <button className="border p-2 rounded-md">button2</button>
          <button className="border p-2 rounded-md">button3</button>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-h1">안녕하세요 원티드 산스입니다.</div>
          <div className="text-h2">안녕하세요 원티드 산스입니다.</div>
          <div className="text-h3">안녕하세요 원티드 산스입니다.</div>
          <div className="text-h4">안녕하세요 원티드 산스입니다.</div>
          <div className="text-body1">안녕하세요 원티드 산스입니다.</div>
          <div className="text-body2">안녕하세요 원티드 산스입니다.</div>
          <div className="text-chip-bold">안녕하세요 원티드 산스입니다.</div>
          <div className="text-chip-medium">안녕하세요 원티드 산스입니다.</div>
          <div className="text-footer-bold">안녕하세요 원티드 산스입니다.</div>
          <div className="text-footer-medium">
            안녕하세요 원티드 산스입니다.
          </div>
          <div className="text-footer-regular">
            안녕하세요 원티드 산스입니다.
          </div>
        </div>

        <h1 className="font-bold">font test - bold(700)</h1>
        <h1 className="font-semibold">font test - semibold(600)</h1>
        <h1 className="font-medium">font test - medium(500)</h1>
        <h1 className="font-regular">font test - regular(400)</h1>

        <br />
        <h1 className="font-semibold">color test - primary</h1>
        <div className="bg-primary-orange1 inline-flex">color test</div>
        <div className="bg-primary-orange2 inline-flex">color test</div>
        <div className="bg-primary-orange3 inline-flex">color test</div>
        <div className="bg-primary-orange4 inline-flex">color test</div>
        <div className="bg-primary-orange5 inline-flex">color test</div>
        <div className="bg-primary-orange6 inline-flex">color test</div>
        <div className="bg-primary-orange7 inline-flex">color test</div>
        <div className="bg-primary-orange8 inline-flex">color test</div>
        <div className="bg-primary-orange9 inline-flex">color test</div>
        <div className="bg-primary-orange10 inline-flex">color test</div>

        <h1 className="font-semibold">color test - secondary</h1>
        <div className="bg-secondary-violet1 inline-flex">color test</div>
        <div className="bg-secondary-violet2 inline-flex">color test</div>
        <div className="bg-secondary-violet3 inline-flex">color test</div>
        <div className="bg-secondary-violet4 inline-flex">color test</div>
        <div className="bg-secondary-violet5 inline-flex">color test</div>
        <div className="bg-secondary-violet6 inline-flex">color test</div>
        <div className="bg-secondary-violet7 inline-flex">color test</div>
        <div className="bg-secondary-violet8 inline-flex">color test</div>
        <div className="bg-secondary-violet9 inline-flex">color test</div>
      </div>
      <div className="border border-green-500">sdiasjdlfajeifja</div>
    </div>
  );
}
