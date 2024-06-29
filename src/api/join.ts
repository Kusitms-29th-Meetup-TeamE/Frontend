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

  return (await apiRequest(`/activities?${queryString}`)).json();
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

  return (await apiRequest(url)).json();
};

export const getActivityDetail = async (id: number) => {
  return (await apiRequest(`/${id}/activity-details`)).json();
};

export const getOnboardingInfo = async () => {
  return (await apiRequest(`/users/personalities`)).json();
};

export const postActivityLike = async (id: number) => {
  return (await apiRequest(`/activate-like/${id}`, 'POST')).json();
};

export const postActivityNotLike = async (id: number) => {
  return (await apiRequest(`/deactivate-like/${id}`, 'POST')).json();
};
