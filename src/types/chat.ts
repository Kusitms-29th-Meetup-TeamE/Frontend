export interface ChatRoomRes {
  id: number;
  imageUrl: string;
  lastMeetingDate: number;
  appointmentDate: string;
  lastChatTime: string;
  lastMessage: string;
}

// groupChatRoomResList의 항목들을 정의하는 인터페이스
export interface GroupChatRoom extends ChatRoomRes {
  title: string;
}

// directChatRoomResList의 항목들을 정의하는 인터페이스
export interface DirectChatRoom extends ChatRoomRes {
  opponentName: string;
  isMentor: boolean;
  experienceType: string;
}

export interface GroupChatRoomsResponse {
  myId: number;
  groupChatRoomResList: GroupChatRoom[];
}

export interface DirectChatRoomsResponse {
  myId: number;
  directChatRoomResList: DirectChatRoom[];
}
