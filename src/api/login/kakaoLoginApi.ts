import { BASE_URL } from '../index';

export const getKakaoToken = async (code: string) => {
  const res = await fetch(`${BASE_URL}/login/kakao?code=${code}`);

  if (!res.ok) {
    throw new Error(`HTTP error in Kakao! Status: ${res.status}`);
  }

  const headerData = (await res.headers.get('Authorization')) || null;
  const bodyData = await res.json();

  return [headerData, bodyData];
};
