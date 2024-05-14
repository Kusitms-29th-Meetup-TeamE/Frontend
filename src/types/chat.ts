// groupChatRoomResList의 항목들을 정의하는 인터페이스
interface GroupChatRoom {
  id: number;
  imageUrl: string;
  title: string;
  lastMeetingDate: number;
  appointmentDate: string;
}

// directChatRoomResList의 항목들을 정의하는 인터페이스
interface DirectChatRoom {
  id: number;
  imageUrl: string;
  opponent: string;
  lastMessage: string;
  appointmentDate: string;
}

interface ChatRoomsResponse {
  myId: number;
  groupChatRoomResList: GroupChatRoom[];
  directChatRoomResList: DirectChatRoom[];
}
