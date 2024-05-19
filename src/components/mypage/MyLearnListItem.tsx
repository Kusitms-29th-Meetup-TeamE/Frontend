import { IoLocationOutline } from 'react-icons/io5';
import { LuCalendarClock } from 'react-icons/lu';
import { SlPencil } from 'react-icons/sl';

import { ReviewsByMeItem } from '@/types/mypage';

import Button from '../common-components/button';
import Chip from '../common-components/chip';

import Image from 'next/image';

export default function MyLearnListItem(props: { data: ReviewsByMeItem }) {
  const { data } = props;
  // console.log('props', data);

  return (
    <div className="bg-gray-02 w-full max-w-[894px] rounded-[20px]">
      <div className="border-b border-gray-04 flex items-center justify-between px-7 py-[14px]">
        <div className="flex gap-[10px] items-center">
          <Chip type={data.type} />
          <span className="text-body2 text-gray-09">{data.title}</span>
        </div>
        <div className="flex gap-5">
          <span className="text-body3 text-gray-06 flex items-center gap-[6px]">
            <IoLocationOutline />
            {data.appointmentLocation}
          </span>
          <span className="text-body3 text-gray-06 flex items-center gap-[6px]">
            <LuCalendarClock />
            {data.appointmentDate}
          </span>
        </div>
      </div>
      <div className="px-7 py-6 h-full flex items-center justify-between">
        <div className="flex gap-5">
          <Image
            // src="/assets/main/main_banner.png"
            src={data.imageUrl}
            alt=""
            width={80}
            height={80}
            className="w-[80px] h-[80px] object-cover rounded-full"
          />
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <p className="text-footer-bold text-[#000]">{data.name}</p>
              {/* <span>김또바</span> */}
              <div className="flex gap-2 px-[14px] py-1 bg-gray-03 rounded-[18px] text-footer-regular text-gray-08">
                <span>{data.age}세</span>
                <span>|</span>
                <span>{data.gender}</span>
                <span>|</span>
                <span>{data.location}</span>
              </div>
            </div>
            <span className="text-body3 text-black">
              {data.experienceDetail}
            </span>
          </div>
        </div>
        <Button
          color={data.isWritten ? 'darkGray' : 'default'}
          size="md"
          className="!px-1 gap-2 !h-[42px]"
        >
          <SlPencil />
          {data.isWritten ? '후기 작성 완료' : '후기 보내기'}
        </Button>
      </div>
      {data.isWritten ? (
        <div className="flex flex-col gap-1 py-6 px-7 border-t border-gray-04">
          <span className="text-notification-b1 text-gray-08">
            {data.review}
          </span>
          <span className="flex justify-end text-body3 text-gray-06">
            작성일 {data.reviewDate}
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
