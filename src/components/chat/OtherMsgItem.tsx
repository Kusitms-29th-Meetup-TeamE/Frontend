import { MsgItemProps } from './MyMsgItem';

import Image from 'next/image';

export const OtherMsgItem = (data: MsgItemProps) => {
  return (
    <div className="inline-flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <Image
          src={data.imageUrl ?? '/assets/main/main_banner.png'}
          alt=""
          width={48}
          height={48}
          className="object-cover w-[48px] h-[48px] rounded-full"
        />
        <span className="text-black text-body2">
          {data.nickname ?? '채민이'}
        </span>
      </div>

      <div className="flex gap-3 items-end">
        <span className="max-w-[365px] bg-primary-orange6 px-[18px] py-2 rounded-[20px] rounded-tl-none text-white text-h5">
          {data.message ?? '안녕하세요..'}
        </span>
        <span className="text-footer-regular text-gray-06">
          {data.time ?? '오후 12:14'}
        </span>
      </div>
    </div>
  );
};
