'use client';

import { useEffect, useState } from 'react';

import { RoomItem } from '@/components/chat/RoomItem';

import { useChatRoomsGroup } from '@/hooks/api/useChat';

import { ChatRoom } from '@/containers/chat/ChatRoom';
import { EmptyChat } from '@/containers/chat/EmptyChat';
import { RoomList } from '@/containers/chat/RoomList';
import { useChatStore } from '@/store/chatStore';

// export const dummyData: RoomItemProps[] = [
//   {
//     myId: 0,
//     roomId: 2,
//     imageUrl: '/assets/main/main_banner.png',
//     title: '채민채민서현',
//     lastMeetingDate: 30,
//     appointmentDate: '4월 30일',
//     lastMessage: '서현이가 짱',
//     lastMessageTime: '오후 12:14',
//   },
//   {
//     myId: 0,
//     roomId: 2,
//     imageUrl: '/assets/main/main_banner.png',
//     title: '채민채민서현',
//     lastMeetingDate: 30,
//     appointmentDate: '4월 30일',
//     lastMessage: '서현이가 짱',
//     lastMessageTime: '오후 12:14',
//   },
//   {
//     myId: 0,
//     roomId: 2,
//     imageUrl: '/assets/main/main_banner.png',
//     title: '채민채민서현',
//     lastMeetingDate: 30,
//     appointmentDate: '4월 30일',
//     lastMessage: '서현이가 짱',
//     lastMessageTime: '오후 12:14',
//   },
//   {
//     myId: 0,
//     roomId: 2,
//     imageUrl: '/assets/main/main_banner.png',
//     title: '채민채민서현',
//     lastMeetingDate: 30,
//     appointmentDate: '4월 30일',
//     lastMessage: '서현이가 짱',
//     lastMessageTime: '오후 12:14',
//   },
//   {
//     myId: 0,
//     roomId: 2,
//     imageUrl: '/assets/main/main_banner.png',
//     title: '채민채민서현',
//     lastMeetingDate: 30,
//     appointmentDate: '4월 30일',
//     lastMessage: '서현이가 짱',
//     lastMessageTime: '오후 12:14',
//   },
// ];

export default function ChatActivity() {
  const { data, isLoading } = useChatRoomsGroup();
  console.log('data:', data);

  // const myId = data?.myId;

  const { myId, setMyId } = useChatStore();

  // useEffect(() => {
  //   setMyId(data?.myId as number);
  //   console.log('myId', myId);
  // }, []);

  const [groupRoomId, setGroupRoomId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    // item.id가 들어옴
    /*
    1. roomId(id) 및 senderId(myId) 담기
    2. 채팅방이 열려야 함 -> /topic/chatting/${chatroomId}을 위해 
    3. roomId가 바뀔 때마다 ChatRoom이 바뀌어야 함

    */
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
              <RoomItem data={item} />
            </div>
          );
        })}
      </RoomList>

      <section className="flex-1">
        {groupRoomId !== null ? <ChatRoom /> : <EmptyChat />}
      </section>
    </div>
  );
}
