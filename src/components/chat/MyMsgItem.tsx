export type MsgItemProps = {
  message: string;
  nickname?: string;
  imageUrl?: string; // profile-image
  time: string;
};

export const MyMsgItem = (data: MsgItemProps) => {
  return (
    <div className="inline-flex gap-3 items-end">
      <span className="text-footer-regular text-gray-06">
        {data.time ?? '오후 12:14'}
      </span>
      <span className="max-w-[365px] bg-gray-03 px-[18px] py-2 rounded-[20px] rounded-tr-none text-gray-10 text-h5">
        {data.message ??
          '텍스트 한줄 서현이짱 최고 멋쟁이 텍스트 한줄 서현이짱 최고 멋쟁이 텍스트 한줄 서현이짱 최고 멋쟁이 텍스트 한줄 서현이짱 최고 멋쟁이'}
      </span>
    </div>
  );
};
