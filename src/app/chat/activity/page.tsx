import { RoomItem, RoomItemProps } from '@/components/chat/RoomItem';
import { RoomList } from '@/components/chat/RoomList';

export const dummyData: RoomItemProps[] = [
  {
    myId: 0,
    roomId: 2,
    imageUrl: '/assets/main/main_banner.png',
    title: '채민채민서현',
    lastMeetingDate: 30,
    appointmentDate: '4월 30일',
    lastMessage: '서현이가 짱',
    lastMessageTime: '오후 12:14',
  },
  {
    myId: 0,
    roomId: 2,
    imageUrl: '/assets/main/main_banner.png',
    title: '채민채민서현',
    lastMeetingDate: 30,
    appointmentDate: '4월 30일',
    lastMessage: '서현이가 짱',
    lastMessageTime: '오후 12:14',
  },
  {
    myId: 0,
    roomId: 2,
    imageUrl: '/assets/main/main_banner.png',
    title: '채민채민서현',
    lastMeetingDate: 30,
    appointmentDate: '4월 30일',
    lastMessage: '서현이가 짱',
    lastMessageTime: '오후 12:14',
  },
  {
    myId: 0,
    roomId: 2,
    imageUrl: '/assets/main/main_banner.png',
    title: '채민채민서현',
    lastMeetingDate: 30,
    appointmentDate: '4월 30일',
    lastMessage: '서현이가 짱',
    lastMessageTime: '오후 12:14',
  },
  {
    myId: 0,
    roomId: 2,
    imageUrl: '/assets/main/main_banner.png',
    title: '채민채민서현',
    lastMeetingDate: 30,
    appointmentDate: '4월 30일',
    lastMessage: '서현이가 짱',
    lastMessageTime: '오후 12:14',
  },
];

export default function ChatActivity() {
  return (
    <div className="w-full mx-auto pt-[40px] max-w-[1200px] border border-black flex">
      <RoomList
        title="활동 대화방"
        subTitle="활동 대화방에서 약속을 또 잡아보아요!"
      >
        {dummyData.map((item, idx) => {
          return (
            <div key={idx}>
              <RoomItem data={item as RoomItemProps} />
            </div>
          );
        })}
      </RoomList>

      <section className="flex-1 border border-blue-500">asdfadsf</section>
    </div>
  );
}
