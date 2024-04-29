import Tag from '../common-components/tag';

export default function RecommendItem() {
  return (
    <div className="flex flex-col border border-black m-2">
      <div className="rounded-[20px] w-full h-[380px] border border-red-500">
        이미지
      </div>
      {/* text part */}
      <div className="flex flex-col mt-[14px]">
        <div className="flex items-center justify-between mb-[12px] border border-green-500">
          <Tag color="orange" text="잔잔한" />
          <div>하트 아이콘</div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[9px]">
            <span className="text-gray-11 text-body2">title만들어먹기</span>
            <span className="text-gray-07 text-h5">서브타이틀복지관어쩌구</span>
          </div>
          <div className="text-gray-11 text-h5">참여 인원</div>
        </div>

        <div className="mt-[20px]">4월 30일 화요일</div>
      </div>
    </div>
  );
}
