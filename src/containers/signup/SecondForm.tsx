import { IoIosArrowForward } from 'react-icons/io';

import Image from 'next/image';

const checkData = [
  { type: '[필수]', text: '만 15세 이상입니다.' },
  { type: '[필수]', text: '개인회원 이용약관 동의' },
  { type: '[필수]', text: '개인정보 수집 및 이용 동의' },
  { type: '[선택]', text: '마케팅 수신 동의' },
];

export default function SecondForm() {
  return (
    <div className="m-auto border border-black w-full max-w-[800px] flex flex-col justify-center items-center gap-[60px]">
      <Image src={'/assets/signup/form2.png'} width={618} height={42} alt="" />
      {/* TODO: 컴포넌트로 붙이기 */}
      <div>회원가입 어쩌구</div>

      <div className="w-full max-w-[588px]">
        <div className="text-gray-06 border border-gray-05 text-h3 px-7 py-5 rounded-[20px]">
          <span>아이콘</span>
          <span className="ml-[18px]">
            전체동의 (선택 항목에 대한 동의 포함)
          </span>
        </div>
        <div className="pt-[30px] px-7 flex flex-col gap-[22px]">
          {checkData.map((item, idx) => {
            return (
              <div className="flex items-center justify-between" key={idx}>
                <div>
                  <span>아이콘</span>
                  <span className="ml-[18px] mr-[10px] text-gray-06 text-h3">
                    {item.type}
                  </span>
                  <span className="text-gray-06 text-h4">{item.text}</span>
                </div>

                <IoIosArrowForward className="text-gray-06" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
