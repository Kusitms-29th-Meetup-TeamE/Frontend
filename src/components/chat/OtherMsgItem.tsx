import { trimDateString } from '@/utils';

import { MsgLogProps } from './AppointmentMsgItem';
import { MsgItemProps } from './MyMsgItem';

import Image from 'next/image';

export const OtherMsgItem = (props: { data: MsgLogProps }) => {
  const { data } = props;

  return (
    <div className="inline-flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <Image
          src={'/assets/main/main_banner.png'}
          // src={data.senderImageUrl ?? '/assets/main/main_banner.png'}
          alt=""
          width={48}
          height={48}
          className="object-cover w-[48px] h-[48px] rounded-full"
        />
        <span className="text-black text-body2">
          {data.senderName ?? '채민이'}
        </span>
      </div>

      <div className="flex gap-3 items-end">
        <span className="max-w-[365px] bg-primary-orange6 px-[18px] py-2 rounded-[20px] rounded-tl-none text-white text-h5">
          {data.text ?? '안녕하세요..'}
        </span>
        <span className="text-footer-regular text-gray-06">
          {trimDateString(data.createdAt)}
        </span>
      </div>
    </div>
  );
};
