import { BASE_URL } from '../index';

export const getKakaoToken = async (code: string) => {
  const res = await fetch(`${BASE_URL}/api/login/kakao?code=${code}`);

  if (!res.ok) {
    throw new Error(`HTTP error in Kakao! Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};
