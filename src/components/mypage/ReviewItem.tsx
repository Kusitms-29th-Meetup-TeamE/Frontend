import Image from 'next/image';

export interface ReviewItemProps {
  id: number;
  type: string;
  title: string;
  experienceDetail?: string;
  appointmentDate: string;
  imageUrl: string;
  review: string;
  name: string;
}

export default function ReviewItem(props: { data: ReviewItemProps }) {
  const { data } = props;

  return (
    <>
      <div className="inline-flex items-center gap-[10px] bg-gray-02 rounded-[20px] py-3 px-4">
        <div>{data.type}</div>
        <span className="text-body2 text-gray-09">{data.title}</span>
      </div>
      <div className="-mt-7 pt-[30px] px-[30px] pb-[20px] flex gap-4 rounded-[20px] rounded-tl-none bg-gray-02 h-[214px] w-full max-w-[894px]">
        <Image
          src="/assets/main/main_banner.png"
          alt=""
          width={56}
          height={56}
          className="w-[56px] h-[56px] object-cover rounded-full"
        />
        <div className="w-full flex flex-col gap-2">
          <span className="text-gray-09 text-body2">{data.name}</span>
          <span
            className="flex-1 max-h-[90px] overflow-hidden text-ellipsis break-words text-notification-b1 text-gray-08 pl-[15px]"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {data.review}
            선생님이 탁구를 정말 잘 가르쳐주세요! 처음이라 많이 긴장했는데도
            편하고 재미있게 즐겼습니다~ 다음에도 선생님과 함께 탁구를 치고
            편하고 재미있게 즐겼습니다~ 다음에도 선생님과 함께 탁구를 치고
            편하고 재미있게 즐겼습니다~ 다음에도 선생님과 함께 탁구를 치고
            편하고 재미있게 즐겼습니다~ 다음에도 선생님과 함께 탁구를 치고
            싶어서 다음 약속도 또 잡았습니다^^ 다들 처음이라고 망설이지 마시고
            배움 나누기 선배님과 함께 배워보셔요~~
          </span>
          <span className="text-body2 text-gray-06 flex justify-end">
            {data.appointmentDate}
          </span>
        </div>
      </div>
    </>
  );
}
