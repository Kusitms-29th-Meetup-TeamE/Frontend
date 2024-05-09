import { UserInfoProps } from '@/types/user';

import { BASE_URL } from '.';

// [oauth] kakao - 사용자 정보 등록
export const postKakaoUserInfo = async ({
  email,
  name,
  imgUrl,
  gender,
  birthYear,
  location,
}: UserInfoProps) => {
  await fetch(`${BASE_URL}/api/sign-up`, {
    method: 'POST',
    headers: {
      // 임의로 작성
      Authorization: `Bearer ${sessionStorage.accessToken}`,
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

// [register] 로컬 - 사용자 정보 등록
export const postLocalUserInfo = async ({
  email,
  name,
  gender,
  birthYear,
  location,
  password,
}: UserInfoProps) => {
  await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      // 임의로 작성
      Authorization: `Bearer ${sessionStorage.accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
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

// [register] 로컬 - 이메일 인증 번호 발송
export const postEmailAuth = async ({ email }: { email: string }) => {
  await fetch(`${BASE_URL}/send-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
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
