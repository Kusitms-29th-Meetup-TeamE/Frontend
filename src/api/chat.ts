import { BASE_URL } from '.';

// [chatrooms] 활동 대화방(단체 채팅방) 목록 조회
export const getChatRoomsGroup = async () => {
  try {
    const response = await fetch(`${BASE_URL}/chatrooms/group`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// [chatrooms] 경험 나누기 대화방(1:1 대화방) 목록 조회
export const getChatRoomsDirect = async () => {
  try {
    const response = await fetch(`${BASE_URL}/chatrooms/direct`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// [chatrooms] 활동 대화방 참여
export const postChatRoomsGroup = async (activityId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/chatrooms/group/${activityId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// [chatrooms] 배움 나누기 대화방 참여
export const postChatRoomsDirect = async (experienceId: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/chatrooms/direct/${experienceId}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // throw error;
  }
};
