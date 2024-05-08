import { BASE_URL } from '.';

// TODO: param 추가 및 타입 정의 필요
export const postUserInfo = async () => {
  await fetch(`${BASE_URL}/api/sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: '',
      email: '',
      imageUrl: '',
      gender: '',
      birthyear: '',
      location: '',
    }),
  })
    .then((res) => {
      console.log(res.json);
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
