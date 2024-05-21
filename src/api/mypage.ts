import {
  CalendarParams,
  LearnProfileProps,
  MyPageInfoProps,
} from '@/types/mypage';

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

// 마이페이지 - 나의 배움 내역 보기
export const getReviewsByMe = async () => {
  try {
    const response = await fetch(`${BASE_URL}/reviews/byme`, {
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

// 마이페이지 - 나의 후기 확인하기
export const getRecievedReviews = async (type?: string) => {
  try {
    const response = await fetch(`${BASE_URL}/users/reviews`, {
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

// 마이페이지 - 내 활동 참여 목록 조회
export const getMyActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/activities`, {
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

// 마이페이지 - 후기 페이지에서 해당 배움 정보 확인
export const getMyReviews = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/reviews/${id}`, {
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

// 마이페이지 - 후기 등록하기
export const postMyReview = async (content: string, id: number) => {
  try {
    const res = await fetch(`${BASE_URL}/reviews/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.accessToken}`,
      },
      body: JSON.stringify({
        content,
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

// 마이페이지 - 마이페이지 캘린더 조회
export const getMyCalendar = async (readCalenderReq: CalendarParams) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/mypage/calender?year=${readCalenderReq.year}&month=${readCalenderReq.month}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
          'Content-Type': 'application/json',
        },
      },
    );

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
