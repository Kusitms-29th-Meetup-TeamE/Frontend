import { MsgLogProps } from '@/types/chat';

import { trimDateString } from '@/utils';

export const MyMsgItem = (props: { data: MsgLogProps }) => {
  const { data } = props;

  return (
    <div className="inline-flex gap-3 items-end">
      <span className="text-footer-regular text-gray-06">
        {trimDateString(data.createdAt)}
      </span>
      <span className="max-w-[365px] bg-gray-03 px-[18px] py-2 rounded-[20px] rounded-tr-none text-gray-10 text-h5">
        {data.text}
      </span>
    </div>
  );
};
