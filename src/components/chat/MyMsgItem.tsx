import { trimDateString } from '@/utils';

export type MsgItemProps = {
  message: string;
  nickname?: string;
  imageUrl?: string; // profile-image
  time: string;
  appointmentTime?: string;
  location?: string;
  experienceType?: string;
};

export const MyMsgItem = (data: MsgItemProps) => {
  return (
    <div className="inline-flex gap-3 items-end">
      <span className="text-footer-regular text-gray-06">
        {trimDateString(data.time)}
      </span>
      <span className="max-w-[365px] bg-gray-03 px-[18px] py-2 rounded-[20px] rounded-tr-none text-gray-10 text-h5">
        {data.message}
      </span>
    </div>
  );
};
