import { ActivityRequestProps } from '@/types/activity';

import { BASE_URL } from './index';

export const getAllActivity = async ({
  page,
  agencyTypes,
  personalities,
}: ActivityRequestProps) => {
  const url = agencyTypes
    ? `${BASE_URL}/activities?page=${page}&agencyTypes=${agencyTypes}&personalities=${personalities}`
    : `${BASE_URL}/activities?page=${page}&personalities=${personalities}`;

  const res = await fetch(`${url}`, {
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
    },
  });

  if (!res.ok) {
    console.log('Error on fetching on Liked Activities');
  }

  return res.json();
};

export const getActivityDetail = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}/activity-details`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionStorage.accessToken}`,
    },
  });

  if (!res.ok) {
    console.log('Error on fetching Activity Detail');
  }

  return res.json();
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
