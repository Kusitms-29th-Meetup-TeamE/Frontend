'use client';

import { useState } from 'react';

import { RoomItem } from '@/components/chat/RoomItem';

import { useChatRoomsGroup } from '@/hooks/api/useChat';

import { ChatRoom } from '@/containers/chat/ChatRoom';
import { EmptyChat } from '@/containers/chat/EmptyChat';
import { RoomList } from '@/containers/chat/RoomList';
import { useChatStore } from '@/store/chatStore';

export default function ChatActivity() {
  const { data, isLoading } = useChatRoomsGroup();

  const { setMyId } = useChatStore();

  const [groupRoomId, setGroupRoomId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setMyId(data?.myId as number);
    setGroupRoomId(id); // roomId 담아주기
  };

  return (
    <div className="w-full mx-auto pt-[40px] max-w-[1200px] flex">
      <RoomList
        title="활동 대화방"
        subTitle="활동 대화방에서 약속을 또 잡아보아요!"
      >
        {data?.groupChatRoomResList.map((item, idx) => {
          // 여기서 item.id가 roomId
          return (
            <div
              key={idx}
              className="mr-[5px]"
              onClick={() => handleClick(item.id)}
            >
              <RoomItem data={item} isSelected={groupRoomId === item.id} />
            </div>
          );
        })}
      </RoomList>

      <section className="flex-1">
        {groupRoomId !== null ? (
          <ChatRoom roomId={groupRoomId} />
        ) : (
          <EmptyChat />
        )}
      </section>
    </div>
  );
}
