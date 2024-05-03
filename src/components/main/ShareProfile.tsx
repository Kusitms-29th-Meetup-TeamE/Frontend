import { UserProps } from '@/types/user';

import Chip from '../common-components/chip';

import clsx from 'clsx';

export interface ShareProfileProps extends UserProps {
  message: string;
  className?: string;
  type: string;
}

const style = {
  triangle:
    'h-0 w-0 border-b-[15px] border-l-transparent border-r-transparent border-l-[10px] border-r-[10px] border-solid border-gray-03',
};

export default function ShareProfile(props: ShareProfileProps) {
  const { message, name, age, type, gender, location, imgUrl, className } =
    props;

  return (
    <div
      className={clsx(
        'cursor-pointer h-full max-h-[453px] w-full pb-6 rounded-[20px]',
        className,
      )}
    >
      <div
        className="rounded-[20px] h-[282px] object-cover py-[10px] px-[10px]"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
        }}
      >
        <Chip type={type} />
      </div>

      <div className="flex justify-between mt-5 px-5">
        <div className="text-footer-bold text-gray-09">{name}</div>
        <div className="flex gap-[15px] px-[14px] py-1 bg-gray-03 rounded-[18px] text-footer-regular text-gray-08">
          <span>{age}세</span>
          <span>|</span>
          <span>{gender}</span>
          <span>|</span>
          <span>{location}</span>
        </div>
      </div>
      <div className={clsx(style.triangle, 'mx-[10px] mt-1 ml-[30px]')} />
      <div className="bg-gray-03 rounded-[20px] mx-[10px] p-4 text-body3 text-gray-07 overflow-hidden text-ellipsis">
        {message}
      </div>
    </div>
  );
}
