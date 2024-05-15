import Image from 'next/image';

export const EmptyChat = () => {
  return (
    <div className="ml-[5px] rounded-[20px] border border-gray-04 w-full max-w-[690px] h-[940px]">
      <div className="h-full flex flex-col items-center justify-center">
        <Image
          src={'/assets/main/how3.png'}
          width={230}
          height={300}
          alt=""
          className="object-cover w-[230px] h-[250px]"
        />

        <div className="-mt-[40px]">
          <p className="text-primary-orange6 text-h2 text-center">나의 대화</p>
          <span className="text-h4 text-gray-08 text-center">
            대화방을 클릭하여 대화를 시작해보세요!
          </span>
        </div>
      </div>
    </div>
  );
};
