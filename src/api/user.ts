import { KakaoUserProps, UserInfoProps } from '@/types/user';

import { BASE_URL, apiRequest } from '.';

// [oauth] kakao - 사용자 로그인/회원가입 요청
export const getKakaoToken = async (code: string) => {
  const res = await apiRequest(`/login/kakao?code=${code}`);

  if (!res.ok) {
    throw new Error(`HTTP error in Kakao! Status: ${res.status}`);
  }

  // 로그인
  if (res.headers) {
    let jwtToken = res.headers.get('Authorization');
    jwtToken = jwtToken?.split(' ')[1] || ''; // Bearer 제거
    // console.log('jwtToken', jwtToken);

    if (jwtToken) {
      // sessionStorage.clear();
      sessionStorage.setItem('accessToken', jwtToken);
      return null;
    }
  }

  const data = await res.json();
  // console.log('카카오 회원가입 데이터: ', data);

  if (data) {
    console.log('api쪽 실행됨');
    sessionStorage.setItem('name', data.name);
    sessionStorage.setItem('email', data.email || '');
    sessionStorage.setItem('birthyear', data.birthyear || '');
    sessionStorage.setItem('gender', data.gender);
    sessionStorage.setItem('imgUrl', data.profileImage || '');
  }

  return data;
  //  catch (error) {
  //   console.error('Error fetching Kakao token:', error);
  //   throw error;
  // }
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
  await apiRequest('/sign-up', 'POST', {
    name,
    email,
    imageUrl: profileImage,
    gender,
    birthyear,
    location,
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
  await apiRequest('/register', 'POST', {
    name: name,
    email: email,
    password: password,
    gender: gender,
    birthyear: birthyear,
    location: location,
  })
    .then((res) => {
      if (res.status === 500) {
        throw new Error('Internal Server Error');
      }

      if (res.headers) {
        let jwtToken = res.headers.get('Authorization');
        jwtToken = jwtToken?.split(' ')[1] || ''; // Bearer 제거

        if (jwtToken) {
          sessionStorage.clear();
          sessionStorage.setItem('accessToken', jwtToken);
          return null;
        }
      }
      return res;
    })
    .catch((err) => {
      console.log('err', err);
      throw err; // 오류를 다시 던져서 리액트 쿼리의 onError로 가도록
    });
};

// [register] 로컬 - 이메일 인증 번호 발송
export const postEmailAuth = async (email: string) => {
  try {
    const response = await apiRequest('/send-email', 'POST', {
      email,
    });

    const reader = response.body?.getReader();
    const content = await reader?.read();

    // 텍스트로 변환
    const text = new TextDecoder().decode(content?.value);

    if (text === '이미 등록된 사용자 입니다.') {
      throw new Error('이미 등록된 사용자입니다.');
    }

    return text;
  } catch (error) {
    console.error('오류 발생:', error);
  }
};

// [login] 로컬 - 사용자 로그인 요청
export const postLocalLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await apiRequest('/login/local', 'POST', {
      email,
      password,
    });

    if (!res.ok) {
      throw new Error(`HTTP error in Login! Status: ${res.status}`);
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
    const reader = res.body?.getReader();
    const content = await reader?.read();

    // 텍스트로 변환
    const text = new TextDecoder().decode(content?.value);

    return text;
  } catch (error) {
    console.error('Error fetching Local Login:', error);
    throw error;
  }
};

// [user] 유저 - 온보딩 정보 등록
export const postOnboardingInfo = async (personalities: string[]) => {
  return apiRequest('/users/onboarding', 'PATCH', { personalities });
};
