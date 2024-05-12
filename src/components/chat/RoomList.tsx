'use client';

import { IoIosArrowBack } from 'react-icons/io';

export type RoomListProps = {
  title: string;
  subTitle: string;
  children?: React.ReactNode;
};

export const RoomList = (props: RoomListProps) => {
  const { title, subTitle, children } = props;

  const handlePrevClick = () => {};

  return (
    <aside className="border border-red-500 w-full max-w-[486px]">
      <div
        className="text-gray-08 text-body2 flex items-center gap-2 cursor-pointer"
        onClick={handlePrevClick}
      >
        <IoIosArrowBack />
        이전으로
      </div>
      <div className="text-black text-h2 mt-5 mb-[6px]">{title}</div>
      <span className="text-black text-h4 mt-[6px]">{subTitle}</span>

      <div className="mt-[30px] flex flex-col gap-4 max-h-[806px] overflow-y-auto">
        {children}
      </div>
    </aside>
  );
};
