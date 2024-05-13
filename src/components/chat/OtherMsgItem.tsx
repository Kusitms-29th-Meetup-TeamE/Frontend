import Image from 'next/image';

export const OtherMsgItem = () => {
  return (
    <div className="inline-flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <Image
          src={'/assets/main/main_banner.png'}
          alt=""
          width={48}
          height={48}
          className="object-cover w-[48px] h-[48px] rounded-full"
        />
        <span className="text-black text-body2">닉네임</span>
      </div>

      <div className="flex gap-3 items-end">
        <span className="max-w-[365px] bg-primary-orange6 px-[18px] py-2 rounded-[20px] rounded-tl-none text-white text-h5">
          텍스트 한줄 서현이짱 최고 멋쟁이 텍스트 한줄 서현이짱 최고 멋쟁이
          텍스트 한줄 서현이짱 최고 멋쟁이 텍스트 한줄 서현이짱 최고 멋쟁이
        </span>
        <span className="text-footer-regular text-gray-06">오후 12:14</span>
      </div>
    </div>
  );
};
