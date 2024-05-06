import SignUpTitle from '@/components/signUp/SignUpTitle';

import Image from 'next/image';

const style = {
  title: 'text-primary-orange6 text-h2 text-center',
  content: 'text-gray-08 text-body2 text-center',
  background:
    'cursor-pointer w-full border border-white flex flex-col max-w-[384px] h-[372px] bg-white px-[96px] py-[46px] rounded-[40px] shadow-[0_4px_20px_5px_rgba(0,0,0,0.08)] hover:border hover:border-primary-orange6 hover:bg-primary-orange1',
};

export default function FirstForm() {
  return (
    <div className="m-auto border border-black w-full max-w-[800px] flex flex-col justify-center items-center">
      <Image
        src={'/assets/signup/form1.png'}
        width={618}
        height={42}
        alt=""
        className="mb-[96px]"
      />

      <SignUpTitle
        title={'회원가입'}
        subTitle={'어떤 유형의 이용자이신가요?'}
      />

      <div className="flex gap-6 mt-[104px]">
        <div className={style.background}>
          <div>이미지</div>
          <div className={style.title}>일반 회원</div>
          <div className={style.content}>
            또바를 통해 다양한 만남과 경험을 만들어 갈 회원님!
          </div>
        </div>
        <div className={style.background}>
          <div>이미지</div>
          <div className={style.title}>단체/기관 회원</div>
          <div className={style.content}>
            또바 이용자에게 활동을 제공하는 회원 계정
          </div>
        </div>
      </div>
    </div>
  );
}
