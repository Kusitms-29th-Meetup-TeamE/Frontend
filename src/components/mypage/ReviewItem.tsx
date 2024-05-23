import Chip from '../common-components/chip';

import Image from 'next/image';

export interface ReviewItemProps {
  id: number;
  type: string;
  title: string;
  experienceDetail?: string;
  appointmentDate: string;
  imageUrl: string;
  review: string;
  name: string;
}

export default function ReviewItem(props: { data: ReviewItemProps }) {
  const { data } = props;

  return (
    <div>
      <div className="inline-flex items-center gap-[10px] bg-gray-02 rounded-[20px] py-3 px-4">
        <Chip type={data.type} className="border border-primary-orange5" />
        <span className="text-body2 text-gray-09">{data.title}</span>
      </div>
      <div className="-mt-7 pt-[40px] px-[30px] pb-[20px] flex gap-4 rounded-[20px] rounded-tl-none bg-gray-02 w-full max-w-[894px]">
        <Image
          src={data.imageUrl || '/assets/main/main_banner.png'}
          alt=""
          width={56}
          height={56}
          className="w-[56px] h-[56px] object-cover rounded-full"
        />
        <div className="w-full flex flex-col gap-2">
          <span className="text-gray-09 text-body2">{data.name}</span>
          <span
            className="flex-1 max-h-[90px] overflow-hidden text-ellipsis break-words text-notification-b1 text-gray-08 pl-[15px]"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {data.review}
          </span>
          <span className="text-body2 text-gray-06 flex justify-end">
            {data.appointmentDate}
          </span>
        </div>
      </div>
    </div>
  );
}
