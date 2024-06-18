import { apiRequest } from '.';

// [chatrooms] 활동 대화방(단체 채팅방) 목록 조회
export const getChatRoomsGroup = async () => {
  return apiRequest('/chatrooms/group');
};

// [chatrooms] 경험 나누기 대화방(1:1 대화방) 목록 조회
export const getChatRoomsDirect = async () => {
  return apiRequest('/chatrooms/direct');
};

// [chatrooms] 활동 대화방 참여
export const postChatRoomsGroup = async (activityId: number) => {
  return apiRequest(`/chatrooms/group/${activityId}`, 'POST');
};

// [chatrooms] 배움 나누기 대화방 참여
export const postChatRoomsDirect = async (experienceId: number) => {
  return apiRequest(`/chatrooms/direct/${experienceId}`, 'POST');
};
