'user client';

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 flex flex-col flex-wrap justify-center content-center bt-0 pt-[34px] pb-[34px] text-gray-06 bg-gray-03">
      <div className="w-fit flex gap-[2px]">
        <Image
          src="/assets/ddoba_logo_black-footer.svg"
          alt="logo"
          width={32}
          height={26}
        />
        <div>또바</div>
      </div>
    </footer>
  );
};

export default Footer;
