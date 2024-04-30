import { useState } from 'react';

import Tag from '../common-components/tag';

export type RecommendItemProps = {
  title: string;
  subTitle: string;
  totalNum: number;
  joinNum: number;
  date: string;
  img: string;
  likeStatus: boolean; // TODO: 백엔드랑 논의 필요
};

export default function RecommendItem(props: RecommendItemProps) {
  const { title, subTitle, totalNum, joinNum, date, img, likeStatus } = props;

  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col border border-black cursor-pointer w-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="rounded-[20px] w-full h-[380px] border border-red-500">
        이미지{img}
      </div>
      <div className="flex flex-col mt-[14px]">
        <div className="flex items-center justify-between mb-[12px] border border-green-500">
          <Tag color="orange" text="잔잔한" />
          <div>{likeStatus ? '' : ''}하트 아이콘</div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[9px]">
            <span className="text-gray-11 text-body2">{title}</span>
            <span className="text-gray-07 text-h5">{subTitle}</span>
          </div>

          {hover && (
            <div className="text-gray-11 text-h5">
              참여 인원: {joinNum}/{totalNum}
            </div>
          )}
        </div>

        <div className="mt-[20px]">{date}</div>
      </div>
    </div>
  );
}
