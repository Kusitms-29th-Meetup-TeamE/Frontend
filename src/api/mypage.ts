import { LearnProfileProps, MyPageInfoProps } from '@/types/mypage';

import { BASE_URL } from '.';

// 마이페이지 - 사용자 기본 정보 조회
export const getMyPageInfo = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/info`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// 마이페이지 - 사용자 기본 정보 수정
export const putMyPageInfo = async ({
  email,
  name,
  location,
  imageUrl,
}: MyPageInfoProps) => {
  try {
    const response = await fetch(`${BASE_URL}/users/info`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${sessionStorage.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location,
        name,
        email,
        imageUrl,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// 마이페이지 - 배움 프로필 조회
export const getLearnProfile = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/experience-profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// 마이페이지 - 배움 프로필 생성
export const postLearnProfile = async ({
  title,
  experienceType,
  description,
  introduce,
}: LearnProfileProps) => {
  try {
    const res = await fetch(`${BASE_URL}/users/experience-profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.accessToken}`,
      },
      body: JSON.stringify({
        title,
        experienceType,
        detail: description,
        introduce,
      }),
    });

    if (!res.ok) {
      throw new Error('Failed to patch Onboarding Info');
    }
    return res;
  } catch (err) {
    throw err;
  }
};
