import { LearningRequestType } from '@/types/learning';

import { BASE_URL } from './index';

export const getAllLearning = async ({
  page,
  sort,
  category,
}: LearningRequestType) => {
  const params = { page: page.toString(), sort, category };
  const queryString = new URLSearchParams(params).toString();

  const res = await fetch(`${BASE_URL}/experiences?${queryString}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionStorage.accessToken}`,
    },
  });

  if (!res.ok) {
    console.log('Error on fetching on All Learning');
  }

  return res.json();
};
