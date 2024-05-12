import { BASE_URL } from '../index';

export const getKakaoToken = async (code: string) => {
  try {
    const res = await fetch(`${BASE_URL}/login/kakao?code=${code}`);

    if (!res.ok) {
      throw new Error(`HTTP error in Kakao! Status: ${res.status}`);
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
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching Kakao token:', error);
    throw error;
  }
};
