import { ActivityRequestProps } from '@/types/activity';

import { apiRequest } from './index';

export const getAllActivity = async ({
  page,
  agencyTypes,
  personalities,
}: ActivityRequestProps) => {
  const params = { page: page.toString() };
  const queryParams = new URLSearchParams(params);
  if (agencyTypes) {
    queryParams.append('agencyTypes', agencyTypes);
  }
  personalities.forEach((p) => queryParams.append('personalities', p));
  const queryString = queryParams.toString();

  return apiRequest(`/activities?${queryString}`);
};

export const getLikedActivity = async ({
  page,
  agencyTypes,
  personalities,
}: ActivityRequestProps) => {
  const queryParams =
    `page=${page}&personalities=${personalities}` +
    (agencyTypes ? `&agencyTypes=${agencyTypes}` : '');
  const url = `/activities/liked?${queryParams}`;

  return apiRequest(url);
};

export const getActivityDetail = async (id: number) => {
  return apiRequest(`/${id}/activity-details`);
};

export const getOnboardingInfo = async () => {
  return apiRequest(`/users/personalities`);
};

export const postActivityLike = async (id: number) => {
  return apiRequest(`/activate-like/${id}`, 'POST');
};

export const postActivityNotLike = async (id: number) => {
  return apiRequest(`/deactivate-like/${id}`, 'POST');
};
