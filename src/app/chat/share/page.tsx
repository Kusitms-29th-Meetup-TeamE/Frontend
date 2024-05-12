import { OneRoomItem } from '@/components/chat/OneRoomItem';
import { RoomItem } from '@/components/chat/RoomItem';
import { RoomList } from '@/components/chat/RoomList';

import { dummyData } from '../activity/page';

export default function ChatShare() {
  return (
    <div className="w-full mx-auto max-w-[1200px] border border-black flex">
      <RoomList
        title="배움 나누기 대화방"
        subTitle="1:1 대화를 통해 만남을 확정해보아요!"
      >
        {/* <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem /> */}
        {dummyData.map((item, idx) => {
          return (
            <div key={idx}>
              <OneRoomItem data={item} />
            </div>
          );
        })}
      </RoomList>

      <section className="flex-1 border border-blue-500">asdfadsf</section>
    </div>
  );
}
