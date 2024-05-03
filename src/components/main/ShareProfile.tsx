import { UserProps } from '@/types/user';

import clsx from 'clsx';
import Image from 'next/image';

export interface ShareProfileProps extends UserProps {
  message: string;
  className?: string;
  type: string;
}

export default function ShareProfile(props: ShareProfileProps) {
  const { message, name, age, type, gender, location, imgUrl, className } =
    props;

  return (
    <div
      className={clsx(
        'cursor-pointer p-4 bg-white max-h-[400px] rounded-[20px] max-w-[282px] w-full shadow-[0_4px_30px_10px_rgba(0,0,0,0.08)]',
        className,
      )}
    >
      <div
        className="rounded-xl h-[250px] object-cover py-4 px-[11px]"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
        }}
      >
        {/* TODO: 칩 컴포넌트 만들기 */}
        <span className="inline-flex px-[14px] py-2 rounded-[30px] text-white text-chip-bold bg-primary-orange4 bg-opacity-80">
          {type}
        </span>
      </div>

      <div className="flex justify-between mt-5">
        <div className="text-footer-bold text-gray-09">{name}</div>
        <div className="flex gap-[15px] px-[14px] py-1 bg-gray-03 rounded-[18px] text-footer-regular text-gray-08">
          <span>{age}세</span>
          <span>|</span>
          <span>{gender}</span>
          <span>|</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="mt-[18px] text-gray-07 text-body3 max-h-[52px] overflow-hidden text-ellipsis">
        {message}
      </div>
    </div>
  );
}
