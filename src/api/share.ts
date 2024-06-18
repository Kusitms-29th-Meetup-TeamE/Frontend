import { LearningRequestType } from '@/types/learning';

import { apiRequest } from './index';

export const getAllLearning = async ({
  page,
  sort,
  category,
}: LearningRequestType) => {
  const params = { page: page.toString(), sort, category };
  const queryString = new URLSearchParams(params).toString();

  return apiRequest(`/experiences?${queryString}`);
};

export const getLearningDetail = async (experienceId: number) => {
  return apiRequest(`/experiences?${experienceId}`);
};

export const getMyLearningProfile = async () => {
  return apiRequest(`/experiences/profile`);
};
