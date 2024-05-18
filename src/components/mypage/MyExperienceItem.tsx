import { useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

import { categoryItem } from '@/constants/object';
import { useNotifyLater } from '@/hooks/useToast';

import SelectBox from '../common-components/select-box/SelectBox';

export default function MyExperienceItem() {
  const [text, setText] = useState<string>('');
  const [title, setTitle] = useState<string>('탁구');

  const [selectItem, setSelectItem] = useState<string | number>('');

  return (
    <div className="border border-gray-04 w-full max-w-[540px] rounded-[20px]">
      <div className="border-b border-gray-04 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-[10px]">
          <SelectBox
            initText="분야"
            items={categoryItem}
            size="sm"
            setParams={setSelectItem}
          />

          <input
            className="text-body2 text-gray-09"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div
          onClick={() => useNotifyLater()}
          className="cursor-pointer flex items-center justify-center bg-[#666A6D] py-[5px] px-[14px] text-white text-h5 rounded-[20px]"
        >
          <HiOutlineTrash />
          삭제
        </div>
      </div>
      <div className="p-5 h-full">
        <textarea
          // ref={ref}
          placeholder="나의 경험 나누기의 진행 방식, 원하는 장소나 시간, 관련된 나의 경험 등의 상세내용을 자유롭게 적어주세요 (500자 내외)"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          className="min-h-[56px] w-full h-full placeholder:text-h4 placeholder:text-gray-06 focus-visible:outline-primary-orange6"
        />
      </div>
    </div>
  );
}
