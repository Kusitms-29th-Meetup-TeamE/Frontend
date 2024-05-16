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
export const postEmailAuth = async (email: string) => {
  try {
    const response = await fetch(`${BASE_URL}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    const reader = response.body?.getReader();
    const content = await reader?.read();

    // 텍스트로 변환
    const text = new TextDecoder().decode(content?.value);

    // console.log('응답 데이터:', text);
    return text;
  } catch (error) {
    console.error('오류 발생:', error);
  }
};

// [user] 유저 - 온보딩 정보 등록
export const postOnboardingInfo = async (personalities: string[]) => {
  try {
    const res = await fetch(`${BASE_URL}/users/onboarding`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.accessToken}`,
      },
      body: JSON.stringify({
        personalities,
      }),
    });

    if (!res.ok) {
      throw new Error('Failed to patch Onboarding Info');
    }
    return res;
  } catch (err) {
    // console.error('Error fetching Onboarding Info:', err);
    throw err;
  }
};
