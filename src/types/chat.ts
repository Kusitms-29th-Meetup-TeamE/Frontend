interface ChatRoomRes {
  id: number;
  imageUrl: string;
  lastMeetingDate: number;
  appointmentDate: string;
}

// groupChatRoomResList의 항목들을 정의하는 인터페이스
interface GroupChatRoom extends ChatRoomRes {
  title: string;
}

// directChatRoomResList의 항목들을 정의하는 인터페이스
interface DirectChatRoom extends ChatRoomRes {
  opponent: string;
}

interface GroupChatRoomsResponse {
  myId: number;
  groupChatRoomResList: GroupChatRoom[];
}

interface DirectChatRoomsResponse {
  myId: number;
  directChatRoomResList: DirectChatRoom[];
}
