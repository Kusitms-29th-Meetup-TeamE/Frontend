import { KakaoUserProps, UserInfoProps } from '@/types/user';

import { BASE_URL } from '.';

// [oauth] kakao - 사용자 로그인/회원가입 요청
export const getKakaoToken = async (code: string) => {
  try {
    const res = await fetch(`${BASE_URL}/login/kakao?code=${code}`);

    if (!res.ok) {
      throw new Error(`HTTP error in Kakao! Status: ${res.status}`);
    }

    // 로그인
    if (res.headers) {
      let jwtToken = res.headers.get('Authorization');
      jwtToken = jwtToken?.split(' ')[1] || ''; // Bearer 제거

      if (jwtToken) {
        sessionStorage.clear();
        sessionStorage.setItem('accessToken', jwtToken);
        return null;
      }
    }
    // 회원가입
    return res.json();
  } catch (error) {
    console.error('Error fetching Kakao token:', error);
    throw error;
  }
};

// [oauth] kakao - 사용자 정보 등록
export const postKakaoUserInfo = async ({
  email,
  name,
  profileImage,
  gender,
  birthyear,
  location,
}: KakaoUserProps) => {
  await fetch(`${BASE_URL}/sign-up`, {
    method: 'POST',
    headers: {
      // // 임의로 작성
      // Authorization: `Bearer ${sessionStorage.accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      imageUrl: profileImage,
      gender,
      birthyear,
      location,
    }),
  })
    .then((res) => {
      if (res.headers) {
        let jwtToken = res.headers.get('Authorization');
        jwtToken = jwtToken?.split(' ')[1] || ''; // Bearer 제거

        if (jwtToken) {
          sessionStorage.clear();
          sessionStorage.setItem('accessToken', jwtToken);
          return null;
        }
      }
      console.log(res.status);
      return res;
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
  birthyear,
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
      birthyear: birthyear,
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
