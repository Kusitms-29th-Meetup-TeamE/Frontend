import MainTitle from '@/components/main/MainTitle';
import RecommendItem from '@/components/main/RecommendItem';

export default function RecommendActivity() {
  const data = [
    {
      title: '안녕하세요 타이틀이요',
      subTitle: '서브타이틀인데요하하하하하',
      img: 'alss',
      joinNum: 2,
      totalNum: 11,
      date: '2024.04.30',
      likeStatus: false,
    },
    {
      title: '안녕하세요 타이틀이요',
      subTitle: '서브타이틀인데요하하하하하',
      img: 'alss',
      joinNum: 2,
      totalNum: 11,
      date: '2024.04.30',
      likeStatus: false,
    },
    {
      title: '안녕하세요 타이틀이요',
      subTitle: '서브타이틀인데요하하하하하',
      img: 'alss',
      joinNum: 2,
      totalNum: 11,
      date: '2024.04.30',
      likeStatus: false,
    },
  ];

  return (
    <div className="border border-black max-w-[1200px] w-full">
      <MainTitle
        title="또바 추천 활동"
        subTitle="내가 선택한 성격을 바탕으로 나에게 맞는 활동을 추천드려요."
      />

      <div className="flex gap-6 border border-green-500 justify-center max-w-[1200px]">
        {data.map((item, idx) => {
          return (
            <RecommendItem
              key={idx}
              title={item.title}
              subTitle={item.subTitle}
              img={item.img}
              joinNum={item.joinNum}
              totalNum={item.totalNum}
              date={item.date}
              likeStatus={item.likeStatus}
            />
          );
        })}
      </div>
    </div>
  );
}
