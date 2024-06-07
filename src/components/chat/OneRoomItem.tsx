import { useState } from 'react';

import { DirectChatRoom } from '@/types/chat';

import clsx from 'clsx';
import Image from 'next/image';

// 이벤트 적용 시 활용할 스타일 옵션
const bgStyle = {
  default: 'border-gray-04 bg-white',
  clicked: 'border-primary-orange6 bg-primary-orange1',
};

export const OneRoomItem = (props: {
  data: DirectChatRoom;
  isSelected: boolean;
}) => {
  const { data, isSelected } = props;

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const currentBgStyle =
    isSelected || isHovered ? bgStyle.clicked : bgStyle.default;

  return (
    <div
      className={clsx(
        'cursor-pointer border w-full max-w-[486px] rounded-[20px] flex flex-col',
        currentBgStyle,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-5 p-5">
        <Image
          src={data.imageUrl ?? '/assets/ddoba_profile.png'}
          width={76}
          height={76}
          alt=""
          className="rounded-full object-cover h-[76px] w-[76px] min-w-[76px] min-h-[76px]"
        />
        <div className="flex flex-col justify-around w-full max-w-[350px]">
          <div className="flex items-center justify-between">
            <p className="text-black text-footer-bold">
              {data.opponentName ?? '초급 영어 회화 배우기'}
            </p>
            {data.appointmentDate && (
              <span className="px-4 py-1 rounded-[20px] bg-primary-orange4 text-chip-medium text-white">
                약속 {data.appointmentDate ?? '3월 18일'}
              </span>
            )}
          </div>

          <div className="flex justify-between">
            <span className="max-w-[255px] text-h5 text-gray-08 overflow-hidden text-ellipsis whitespace-nowrap">
              {data.lastMessage}
            </span>
            <span className="text-gray-06 text-h5">{data.lastChatTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
