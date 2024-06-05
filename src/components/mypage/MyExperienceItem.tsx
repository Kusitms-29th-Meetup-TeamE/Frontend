import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

import { categoryItem } from '@/constants/object';
import { useNotifyLater } from '@/hooks/useToast';
import { LearnProfileProps } from '@/types/mypage';

import SelectBox from '../common-components/select-box/SelectBox';

export default function MyExperienceItem(props: {
  data?: LearnProfileProps;
  profileData?: any;
  setProfileData: Dispatch<SetStateAction<any>>;
}) {
  const { data, profileData, setProfileData } = props;

  const [text, setText] = useState<string>('');
  const [title, setTitle] = useState<string>('탁구');

  const [experienceType, setExperienceType] = useState<string | number>('');

  useEffect(() => {
    if (data) {
      setExperienceType(data.experienceType);
      setTitle(data.title);
      setText(data.description);
    }
  }, [data]);

  useEffect(() => {
    setProfileData({
      title: title,
      experienceType: experienceType,
      // introduce: data.introduce,
      description: text,
    });
  }, [title, text, experienceType]);

  return (
    <div className="border border-gray-04 w-full max-w-[540px] rounded-[20px]">
      <div className="border-b border-gray-04 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-[10px]">
          <SelectBox
            initText={experienceType as string}
            items={categoryItem}
            size="sm"
            setParams={setExperienceType}
          />

          <input
            className="text-body2 text-gray-09 bg-gray-02 placeholder:text-gray-06 placeholder:text-body2 focus:outline-primary-orange5"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="소분류를 입력해주세요"
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
          placeholder="나의 경험 나누기의 진행 방식, 원하는 장소나 시간, 관련된 나의 경험 등의 상세내용을 자유롭게 적어주세요 (500자 이내)"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          maxLength={500}
          className="bg-gray-02 min-h-[100px] w-full h-full placeholder:text-h4 placeholder:text-gray-06 focus-visible:outline-primary-orange6"
        />
      </div>
    </div>
  );
}
