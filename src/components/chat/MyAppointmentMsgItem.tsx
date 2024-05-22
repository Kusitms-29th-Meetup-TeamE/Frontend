import { IoIosArrowForward } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { LuCalendarClock } from 'react-icons/lu';

import { MsgLogProps } from '@/types/chat';

import { trimDateString } from '@/utils';

import { useRouter } from 'next/navigation';

export const MyAppointmentMsgItem = (props: { data: MsgLogProps }) => {
  const { data } = props;
  const router = useRouter();

  return (
    <div className="inline-flex flex-col gap-3">
      <div className="flex gap-3 items-end">
        <span className="text-footer-regular text-gray-06">
          {trimDateString(data.createdAt)}
        </span>
        <div className="flex max-w-[320px] border border-gray-04 rounded-[5px]">
          <div className="border-r-[6px] rounded-[4px] border-primary-orange6 py-[14px] px-5">
            <span className="text-gray-10 text-h5">
              약속이 확정되어 캘린더에 등록되었어요!
            </span>

            <div className="flex mt-[10px]">
              <span className="flex items-center gap-[6px] mr-[17px] text-gray-08 text-chip-medium">
                <IoLocationOutline />
                장소
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
              <button
                onClick={() => router.push('/mypage/calendar')}
                className="flex items-center gap-1 py-1 px-2 rounded hover:bg-gray-03 mt-[18px]"
              >
                일정 확인하기
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
