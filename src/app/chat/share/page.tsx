'use client';

import { useEffect, useState } from 'react';

import Skeleton from '@/components/common-components/skeleton';

import { OneRoomItem } from '@/components/chat/OneRoomItem';

import { useChatRoomsDirect } from '@/hooks/api/useChat';

import { SOCKET_URL } from '@/api';
import { ChatRoom } from '@/containers/chat/ChatRoom';
import { EmptyChat } from '@/containers/chat/EmptyChat';
import { RoomList } from '@/containers/chat/RoomList';
import { useChatStore } from '@/store/chatStore';
import { CompatClient, Stomp } from '@stomp/stompjs';

import SockJS from 'sockjs-client';

export default function ChatSharePage() {
  const { data, isLoading } = useChatRoomsDirect();

  const { setMyId } = useChatStore();

  const [directRoomId, setDirectRoomId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setMyId(data?.myId as number);
    setDirectRoomId(id); // roomId 담아주기
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
        title="배움 나누기 대화방"
        subTitle="1:1 대화를 통해 만남을 확정해보아요!"
      >
        {data?.directChatRoomResList.map((item, idx) => {
          return (
            <div
              key={idx}
              className="mr-[10px]"
              onClick={() => handleClick(item.id)}
            >
              {isLoading ? (
                <Skeleton width={470} height={170} />
              ) : (
                <OneRoomItem
                  data={item}
                  isSelected={directRoomId === item.id}
                />
              )}
            </div>
          );
        })}
      </RoomList>

      <section className="flex-1">
        {isSocketLoading ? (
          // TODO: 로딩 컴포넌트 넣기
          <div>로딩중입니다요</div>
        ) : directRoomId !== null ? (
          <ChatRoom roomId={directRoomId} stompClient={stompClient} />
        ) : (
          <EmptyChat />
        )}
      </section>
    </div>
  );
}
