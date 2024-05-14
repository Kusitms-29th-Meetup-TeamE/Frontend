'use client';

import { useState } from 'react';

import Button from '@/components/common-components/button';
import Input from '@/components/common-components/input';

import Image from 'next/image';

export const ChatRoom = () => {
  const [value, setValue] = useState<string>('');

  const disabledBtn = () => {
    if (value.length === 0) return true;
    else return false;
  };

  return (
    <div className="flex flex-col ml-[5px] rounded-[20px] border border-gray-04 w-full max-w-[690px] h-[940px]">
      <div className="border-b border-b-gray-04 flex justify-between items-center max-h-[118px] px-[30px] py-[22px]">
        <div className="flex gap-5 items-center">
          <Image
            src={'/assets/main/how3.png'}
            width={76}
            height={76}
            alt=""
            className="object-cover w-[76px] h-[76px] rounded-[10px]"
          />
          <p className="text-black text-body1">서울 근교 등산 동호회</p>
        </div>
        <button>약속 잡기</button>
      </div>

      <div className="border border-red-500 flex-1 p-[30px]">대화방</div>
      <div className="flex gap-4 h-[94px] px-[30px] py-[18px]">
        <Input
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          size="lg"
          placeholder="메시지를 입력하세요."
          shape="square"
          type="text"
          className="!bg-gray-02 border-gray-04"
        />
        <Button
          size="sm"
          shape="square"
          color={disabledBtn() ? 'disabled' : 'default'}
          disabled={disabledBtn()}
        >
          전송
        </Button>
      </div>
    </div>
  );
};
