import React from 'react';

// 활동 참여하기, 배움 나누기에서 공통으로 사용 위함
export type ActivityHeaderProps = {
    title:string;
    content: string;
}
const ActivityHeader = (props: ActivityHeaderProps) => {
    const {title, content} = props;
  return (
    <div className="w-full h-60 flex flex-col justify-center items-center border bg-center bg-cover bg-[url('/assets/components/activity-top-banner.png')]">
      <div className="text-white text-h2 mb-4">{title}</div>
      <div className="text-gray-02 text-h3">
        {content}
      </div>
    </div>
  );
};

export default ActivityHeader;
