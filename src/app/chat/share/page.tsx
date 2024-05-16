'use client';

import { OneRoomItem } from '@/components/chat/OneRoomItem';

import { useChatRoomsDirect } from '@/hooks/api/useChat';

import { ChatRoom } from '@/containers/chat/ChatRoom';
import { RoomList } from '@/containers/chat/RoomList';

export default function ChatSharePage() {
  const { data, isLoading } = useChatRoomsDirect();
  // console.log('data:', data);

  return (
    <div className="w-full mx-auto pt-[40px] max-w-[1200px] border border-black flex">
      <RoomList
        title="배움 나누기 대화방"
        subTitle="1:1 대화를 통해 만남을 확정해보아요!"
      >
        {data?.directChatRoomResList.map((item, idx) => {
          return (
            <div key={idx} className="mr-[5px]">
              <OneRoomItem data={item} />
            </div>
          );
        })}
      </RoomList>

      <section className="flex-1">
        {/* <EmptyChat /> */}
        <ChatRoom />
      </section>
    </div>
  );
}
