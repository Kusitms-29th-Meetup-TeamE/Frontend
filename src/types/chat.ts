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

export type MsgLogProps = {
  type?: string;
  createdAt: string;
  text: string | null;
  emoticon?: null;
  experienceType?: string | null;
  appointmentTime?: string | null;
  location?: string | null;
  senderId?: number;
  senderName?: string;
  senderImageUrl?: string;
};
