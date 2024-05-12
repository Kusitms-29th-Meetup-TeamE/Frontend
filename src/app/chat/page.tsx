'use client';

import { useState } from 'react';

import Button from '@/components/common-components/button';

import SignUpTitle from '@/components/signUp/SignUpTitle';

import clsx from 'clsx';
import Image from 'next/image';

const style = {
  title: 'text-primary-orange6 text-h2 text-center',
  content: 'text-gray-08 text-body2 text-center',
  background:
    'cursor-pointer w-full border border-white flex flex-col max-w-[384px] h-[372px] bg-white px-[80px] py-[46px] rounded-[40px] shadow-[0_4px_20px_5px_rgba(0,0,0,0.08)] hover:border hover:border-primary-orange6 hover:bg-primary-orange1',
  clicked: '!border !border-primary-orange6 !bg-primary-orange1',
};

export default function Chat() {
  const [room, setRoom] = useState<string>('');

  const handleClick = (option: string) => {
    setRoom(option);
  };

  const handleNextClick = () => {};

  const disabledBtn = () => {
    if (room !== 'activity' && room !== 'share') return true;

    return false;
  };

  return (
    <div className="m-auto mt-[160px] w-full max-w-[800px] flex flex-col justify-center items-center">
      <SignUpTitle
        title={'함께 대화하기'}
        subTitle={'대화를 통해 소중한 인연을 이어가보세요!'}
      />
      <div className="flex gap-6 mt-[104px]">
        <div
          className={clsx(
            style.background,
            room === 'activity' && style.clicked,
          )}
          onClick={() => handleClick('activity')}
        >
          <Image
            src={'/assets/main/how3.png'}
            width={618}
            height={42}
            alt=""
            className=""
          />

          <div className={style.title}>활동 대화방</div>
          <div className={style.content}>
            활동에 참여하면 대화방에서 <br />
            바로 소통이 가능해요
          </div>
        </div>
        <div
          className={clsx(style.background, room === 'share' && style.clicked)}
          onClick={() => handleClick('share')}
        >
          <Image
            src={'/assets/main/how3.png'}
            width={618}
            height={42}
            alt=""
            className=""
          />
          <div className={style.title}>배움 나누기 대화방</div>
          <div className={style.content}>
            활동에 참여하면 대화방에서 <br />
            바로 소통이 가능해요
          </div>
        </div>
      </div>
      <Button
        color={disabledBtn() ? 'disabled' : 'default'}
        shape="rounded"
        size="lg"
        onClick={handleNextClick}
        disabled={disabledBtn()}
        type="submit"
        className="mt-[104px]"
      >
        다음
      </Button>
    </div>
  );
}
