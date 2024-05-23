import { ActivityRequestProps } from '@/types/activity';

import { BASE_URL } from './index';

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

  const res = await fetch(`${BASE_URL}/activities?${queryString}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionStorage.accessToken}`,
    },
  });

  if (!res.ok) {
    console.log('Error on fetching on Liked Activities');
  }

  return res.json();
};

export const getLikedActivity = async ({
  page,
  agencyTypes,
  personalities,
}: ActivityRequestProps) => {
  const url = agencyTypes
    ? `${BASE_URL}/activities/liked?page=${page}&agencyTypes=${agencyTypes}&personalities=${personalities}`
    : `${BASE_URL}/activities/liked?page=${page}&personalities=${personalities}`;

  const res = await fetch(`${url}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionStorage.accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    console.log('Error on fetching on Liked Activities');
  }

  return res.json();
};

export const getActivityDetail = async (id: number) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/activity-details`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.log('Error on fetching Activity Detail');
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log('err:', err);
  }
};

export const getOnboardingInfo = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users/personalities`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.log('Error on fetching Activity Detail');
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log('err:', err);
  }
};

export const postActivityLike = async (id: number) => {
  const res = await fetch(`${BASE_URL}/activate-like/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionStorage.accessToken}`,
    },
  });

  if (!res.ok) {
    console.log('Error on posting Activity Like');
  }

  return res;
};

export const postActivityNotLike = async (id: number) => {
  const res = await fetch(`${BASE_URL}/deactivate-like/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionStorage.accessToken}`,
    },
  });

  if (!res.ok) {
    console.log('Error on canceling Activity Like');
  }

  return res;
};
