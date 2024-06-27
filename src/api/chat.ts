import { apiRequest } from '.';

// [chatrooms] 활동 대화방(단체 채팅방) 목록 조회
export const getChatRoomsGroup = async () => {
  const res = (await apiRequest('/chatrooms/group')).json();
  return res;
};

// [chatrooms] 경험 나누기 대화방(1:1 대화방) 목록 조회
export const getChatRoomsDirect = async () => {
  const res = (await apiRequest('/chatrooms/direct')).json();
  return res;
};

// [chatrooms] 활동 대화방 참여
export const postChatRoomsGroup = async (activityId: number) => {
  const res = (
    await apiRequest(`/chatrooms/group/${activityId}`, 'POST')
  ).json();
  return res;
};

// [chatrooms] 배움 나누기 대화방 참여
export const postChatRoomsDirect = async (experienceId: number) => {
  const res = (
    await apiRequest(`/chatrooms/direct/${experienceId}`, 'POST')
  ).json();
  return res;
};
