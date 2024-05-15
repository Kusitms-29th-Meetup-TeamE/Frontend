import { IoIosArrowForward } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { LuCalendarClock } from 'react-icons/lu';

import { trimDateString } from '@/utils';

import Image from 'next/image';

export type MsgLogProps = {
  type: string;
  createdAt: string;
  text: string | null;
  emoticon: null;
  experienceType: string | null;
  appointmentTime: string | null;
  location: string | null;
  senderId: number;
  senderName: string;
  senderImageUrl: string;
};

export const AppointmentMsgItem = (props: { data: MsgLogProps }) => {
  const { data } = props;
  return (
    <div className="inline-flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <Image
          src={'/assets/main/main_banner.png'}
          //   src={data.senderImageUrl ?? '/assets/main/main_banner.png'}
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
        <div className="flex max-w-[320px] border border-gray-04 rounded-[5px]">
          <div className="border-l-[6px] rounded-[4px] border-primary-orange6 py-[14px] px-5">
            <span className="text-gray-10 text-h5">
              약속이 확정되어 캘린더에 등록되었어요!
            </span>

            <div className="flex mt-[10px]">
              <span className="flex items-center gap-[6px] mr-[17px] text-gray-08 text-chip-medium">
                <IoLocationOutline />
                위치
              </span>
              <span className="text-footer-medium text-black">
                {data.location}
              </span>
            </div>

            <div className="flex">
              <span className="flex gap-[6px] items-center mr-[17px] text-gray-08 text-chip-medium">
                <LuCalendarClock />
                일시
              </span>
              <span className="text-footer-medium text-black">
                {data.appointmentTime}
              </span>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center gap-1 py-1 px-2 rounded hover:bg-gray-03 mt-[18px]">
                캘린더로 이동하기
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
        <span className="text-footer-regular text-gray-06">
          {trimDateString(data.createdAt)}
        </span>
      </div>
    </div>
  );
};
