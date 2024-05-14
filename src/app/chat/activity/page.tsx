'use client';

import { RoomItem } from '@/components/chat/RoomItem';

import { useChatRoomsGroup } from '@/hooks/api/useChat';

import { ChatRoom } from '@/containers/chat/ChatRoom';
import { EmptyChat } from '@/containers/chat/EmptyChat';
import { RoomList } from '@/containers/chat/RoomList';

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
  // console.log('data:', data);

  return (
    <div className="w-full mx-auto pt-[40px] max-w-[1200px] flex">
      <RoomList
        title="활동 대화방"
        subTitle="활동 대화방에서 약속을 또 잡아보아요!"
      >
        {data?.groupChatRoomResList.map((item, idx) => {
          return (
            <div key={idx} className="pr-[5px]">
              <RoomItem data={item} />
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
