import { UserInfoProps } from '@/types/user';

import { BASE_URL } from '.';

// [oauth] kakao - 사용자 등록
export const postUserInfo = async ({
  email,
  name,
  imgUrl,
  gender,
  birthYear,
  location,
}: UserInfoProps) => {
  await fetch(`${BASE_URL}/sign-up`, {
    method: 'POST',
    headers: {
      // 임의로 작성
      Authorization: `Bearer ${localStorage.accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      imageUrl: imgUrl,
      gender: gender,
      birthyear: birthYear,
      location: location,
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
