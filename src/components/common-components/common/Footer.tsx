'user client';

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full h-[264px]  fixed bottom-0 flex flex-col flex-wrap justify-center content-center items-center text-gray-06 bg-gray-03">
      <div className="w-fit flex gap-[2px] text-body1">
        <Image
          src="/assets/ddoba_logo_black-footer.svg"
          alt="logo"
          width={32}
          height={26}
        />
        <span>또바</span>
      </div>
      <span className="w-fit flex mt-[15px] text-center text-chip-medium">
        나중에 수정 예정,<br></br>새로운 만남의 기회를 제공하는 서비스
      </span>
      <ul className="flex gap-[40px] items-center mt-[24px] text-footer-regular">
        <li>서비스 이용 가이드</li>
        <span className="w-[1px] h-[12px] bg-gray-06" />
        <li>이용약관</li>
        <span className="w-[1px] h-[12px] bg-gray-06" />
        <li>개인정보 처리방침</li>
      </ul>
      <span className="mt-[24px] text-footer-medium">
        마케팅 제휴 문의: ddoba_contact@gmail.com
      </span>
      <span className="mt-[24px] text-footer-regular">
        C 2024 ddoba, All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
