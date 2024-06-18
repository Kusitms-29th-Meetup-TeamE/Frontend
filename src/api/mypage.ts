import {
  CalendarParams,
  LearnProfileProps,
  MyPageInfoProps,
} from '@/types/mypage';

import { apiRequest } from '.';

// 마이페이지 - 사용자 기본 정보 조회
export const getMyPageInfo = async () => apiRequest('/users/info');

// 마이페이지 - 사용자 기본 정보 수정
export const putMyPageInfo = async ({
  email,
  name,
  location,
  imageUrl,
}: MyPageInfoProps) => {
  return apiRequest('/users/info', 'PUT', {
    location,
    name,
    email,
    imageUrl,
  });
};

// 마이페이지 - 배움 프로필 조회
export const getLearnProfile = async () => {
  return apiRequest('/users/experience-profile');
};

// 마이페이지 - 배움 프로필 생성
export const postLearnProfile = async ({
  title,
  experienceType,
  description,
  introduce,
}: LearnProfileProps) => {
  return apiRequest('/users/experience-profile', 'POST', {
    title,
    experienceType,
    detail: description,
    introduce,
  });
};

// 마이페이지 - 나의 배움 내역 보기
export const getReviewsByMe = async () => {
  return apiRequest('/reviews/byme');
};

// 마이페이지 - 나의 후기 확인하기
export const getRecievedReviews = async (type?: string) => {
  const queryParams = type ? `type=${type}` : '';
  return apiRequest(`/users/reviews?${queryParams}`);
};

// 마이페이지 - 내 활동 참여 목록 조회
export const getMyActivities = async () => {
  return apiRequest('/users/activities');
};

// 마이페이지 - 후기 페이지에서 해당 배움 정보 확인
export const getMyReviews = async (id: number) => {
  return apiRequest(`/reviews/${id}`);
};

// 마이페이지 - 후기 등록하기
export const postMyReview = async (content: string, id: number) => {
  return apiRequest(`/reviews/${id}`, 'POST', {
    content,
  });
};

// 마이페이지 - 마이페이지 캘린더 조회
export const getMyCalendar = async (readCalenderReq: CalendarParams) => {
  return apiRequest(
    `/users/mypage/calender?year=${readCalenderReq.year}&month=${readCalenderReq.month}`,
  );
};
