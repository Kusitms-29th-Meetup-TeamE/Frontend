import { UserProps } from '@/types/user';

import Image from 'next/image';

export interface ShareProfileProps extends UserProps {
  content: string;
}

export default function ShareProfile(props: ShareProfileProps) {
  const { content, name, age, gender, address, img } = props;

  return (
    <div className="p-4 bg-white max-h-[400px] rounded-[20px] max-w-[282px] w-full shadow-[0_4px_30px_10px_rgba(0,0,0,0.08)]">
      <Image
        // src="/assets/main/how2.png"
        src={img ?? ''}
        alt=""
        width={250}
        height={250}
        className="rounded-xl border border-red-500"
      />
      <div className="flex justify-between mt-5">
        <div className="text-footer-bold text-gray-09">{name}</div>
        <div className="flex gap-[15px] px-[14px] py-1 bg-gray-03 rounded-[18px] text-footer-regular text-gray-08">
          <span>{age}세</span>
          <span>|</span>
          <span>{gender}</span>
          <span>|</span>
          <span>{address}</span>
        </div>
      </div>
      <div className="mt-[18px] text-gray-07 text-body3 border max-h-[52px] border-red-500 overflow-hidden text-ellipsis">
        {content}
      </div>
    </div>
  );
}
