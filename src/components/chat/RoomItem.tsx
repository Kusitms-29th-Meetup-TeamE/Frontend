import { useState } from 'react';
import { MdAccessTime } from 'react-icons/md';

import { GroupChatRoom } from '@/types/chat';

import clsx from 'clsx';
import Image from 'next/image';

// 이벤트 적용 시 활용할 스타일 옵션
const bgStyle = {
  default: 'border-gray-04 bg-white',
  clicked: 'border-primary-orange6 bg-primary-orange1',
};

const appointmentStyle = {
  gray: 'text-gray-06',
  orange: 'text-primary-orange6',
};

export const RoomItem = (props: {
  data: GroupChatRoom;
  isSelected: boolean;
}) => {
  const { data, isSelected } = props;

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const currentBgStyle = isSelected ? bgStyle.clicked : bgStyle.default;

  return (
    <div
      className={clsx(
        'cursor-pointer border w-full max-w-[486px] min-h-[170px] rounded-[20px] flex flex-col',
        currentBgStyle,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-5 p-5">
        <Image
          src={'/assets/main/main_banner.png'}
          // TODO: 바꿔야함
          // src={`${data.imageUrl}` ?? '/assets/main/main_banner.png'}
          width={76}
          height={76}
          alt=""
          className="rounded-[10px] object-cover h-[76px]"
        />
        <div className="flex flex-col justify-around w-full max-w-[350px]">
          <div className="flex items-center justify-between">
            <p className="text-black text-footer-bold">
              {data.title ?? '초급 영어 회화 배우기'}
            </p>
            {data.appointmentDate && (
              <span className="px-4 py-1 rounded-[20px] bg-primary-orange4 text-chip-medium text-white">
                약속 {data.appointmentDate ?? '3월 18일'}
              </span>
            )}
          </div>

          <div className="flex justify-between">
            <span className="max-w-[220px] text-h5 text-gray-08 overflow-hidden text-ellipsis whitespace-nowrap">
              {data.lastMessage}
            </span>
            <span className="text-gray-06 text-h5">{data.lastChatTime}</span>
          </div>
        </div>
      </div>
      <hr />
      <div
        className={clsx(
          'text-body2 my-auto flex justify-center items-center',
          data.lastMeetingDate
            ? appointmentStyle.orange
            : appointmentStyle.gray,
        )}
      >
        <MdAccessTime className="mr-2" />
        {data.lastMeetingDate !== null
          ? `최근 만남이 ${data.lastMeetingDate}일 전이에요!`
          : data.appointmentDate
            ? '만남이 예정되어 있어요!'
            : '만남을 잡아보세요!'}
      </div>
    </div>
  );
};
