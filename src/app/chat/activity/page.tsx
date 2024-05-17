'use client';

import { useEffect, useState } from 'react';

import Skeleton from '@/components/common-components/skeleton';

import { RoomItem } from '@/components/chat/RoomItem';

import { useChatRoomsGroup } from '@/hooks/api/useChat';

import { ChatRoom } from '@/containers/chat/ChatRoom';
import { EmptyChat } from '@/containers/chat/EmptyChat';
import { RoomList } from '@/containers/chat/RoomList';
import { useChatStore } from '@/store/chatStore';
import { CompatClient, Stomp } from '@stomp/stompjs';

import SockJS from 'sockjs-client';

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL;

export default function ChatActivity() {
  const { data, isLoading } = useChatRoomsGroup();

  const { setMyId } = useChatStore();

  const [groupRoomId, setGroupRoomId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setMyId(data?.myId as number);
    setGroupRoomId(id); // roomId 담아주기
  };
  const [stompClient, setStompClient] = useState<CompatClient | null>(null);
  const [isSocketLoading, setIsSocketLoading] = useState<boolean>(true); // 추가

  const connectToWebSocket = () => {
    const socket = new SockJS(`${SOCKET_URL}`);
    const client = Stomp.over(socket);

    client.connect(
      {},
      () => {
        console.log('Connection success');
        setIsSocketLoading(false);
      },
      () => {
        console.log('Connection failed');
        // setIsSocketLoading(false);
      },
    );

    setStompClient(client);

    return () => {
      if (client) {
        client.disconnect();
      }
    };
  };

  useEffect(connectToWebSocket, []);

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
              className="mr-[10px]"
              onClick={() => handleClick(item.id)}
            >
              {isLoading ? (
                <Skeleton width={470} height={170} />
              ) : (
                <RoomItem data={item} isSelected={groupRoomId === item.id} />
              )}
            </div>
          );
        })}
      </RoomList>

      <section className="flex-1">
        {isSocketLoading ? (
          // TODO: 로딩 컴포넌트 넣기
          <div>로딩중입니다요</div>
        ) : groupRoomId !== null ? (
          <ChatRoom roomId={groupRoomId} stompClient={stompClient} />
        ) : (
          <EmptyChat />
        )}
      </section>
    </div>
  );
}
