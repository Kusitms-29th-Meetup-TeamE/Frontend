'use client';

import { useEffect, useState } from 'react';

import Skeleton from '@/components/common-components/skeleton';
import Spinner from '@/components/common-components/spinner';

import { RoomItem } from '@/components/chat/RoomItem';

import { useChatRoomsGroup } from '@/hooks/api/useChat';
import { GroupChatRoom } from '@/types/chat';

import { SOCKET_URL } from '@/api';
import { ChatRoom } from '@/containers/chat/ChatRoom';
import { EmptyChat } from '@/containers/chat/EmptyChat';
import { RoomList } from '@/containers/chat/RoomList';
import { useChatStore } from '@/store/chatStore';
import { CompatClient, Stomp } from '@stomp/stompjs';

import SockJS from 'sockjs-client';

export default function ChatActivity() {
  const { data, isLoading } = useChatRoomsGroup();

  const { setMyId } = useChatStore();

  const [groupRoomId, setGroupRoomId] = useState<number | null>(null);

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

  const [roomInfo, setRoomInfo] = useState<GroupChatRoom>();

  const handleClick = (item: GroupChatRoom) => {
    setMyId(data?.myId as number);
    setGroupRoomId(item.id); // roomId 담아주기
    setRoomInfo(item);
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
              className="mr-[10px]"
              onClick={() => handleClick(item)}
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
          <Spinner />
        ) : groupRoomId !== null ? (
          <ChatRoom
            roomInfo={roomInfo as GroupChatRoom}
            roomId={groupRoomId}
            stompClient={stompClient}
          />
        ) : (
          <EmptyChat />
        )}
      </section>
    </div>
  );
}
