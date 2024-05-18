'use client';

import { IoIosArrowBack } from 'react-icons/io';

import { useRouter } from 'next/navigation';

export type RoomListProps = {
  title: string;
  subTitle: string;
  children?: React.ReactNode;
};

export const RoomList = (props: RoomListProps) => {
  const { title, subTitle, children } = props;
  const router = useRouter();

  const handlePrevClick = () => {
    router.back();
  };

  return (
    <aside className="w-full max-w-[486px]">
      <div
        className="text-gray-08 text-body2 inline-flex items-center gap-2 cursor-pointer hover:bg-gray-03 px-2 py-1 rounded-[10px] box-border"
        onClick={handlePrevClick}
      >
        <IoIosArrowBack />
        이전으로
      </div>
      <div className="text-black text-h2 mt-5 mb-[6px]">{title}</div>
      <span className="text-black text-h4 mt-[6px]">{subTitle}</span>

      <div className="mt-[30px] flex flex-col gap-4 max-h-[806px] overflow-y-auto gray-scroll-container">
        {children}
      </div>
    </aside>
  );
};
