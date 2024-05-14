import { BASE_URL } from '.';

// [chatrooms] 활동 대화방(단체 채팅방) 목록 조회
export const getChatRoomsGroup = async () => {
  await fetch(`${BASE_URL}/chatrooms/group`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionStorage.accessToken}`,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      console.log(res.json);
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// [chatrooms] 경험 나누기 대화방(1:1 대화방) 목록 조회
export const getChatRoomsDirect = async () => {
  await fetch(`${BASE_URL}/chatrooms/direct`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionStorage.accessToken}`,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      console.log(res.json);
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
