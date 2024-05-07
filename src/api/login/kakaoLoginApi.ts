import { HTTP_URL } from '../index';

export const kakaoLogin = async (code: string) => {
  const res = await fetch(`${HTTP_URL}/api/login/kakao?code=${code}`);

  if (!res.ok) {
    throw new Error(`HTTP error in Kakao! Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};
