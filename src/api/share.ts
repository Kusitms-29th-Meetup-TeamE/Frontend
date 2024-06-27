import { LearningRequestType } from '@/types/learning';

import { apiRequest } from './index';

export const getAllLearning = async ({
  page,
  sort,
  category,
}: LearningRequestType) => {
  const params = { page: page.toString(), sort, category };
  const queryString = new URLSearchParams(params).toString();

  return (await apiRequest(`/experiences?${queryString}`)).json();
};

export const getLearningDetail = async (experienceId: number) => {
  return (await apiRequest(`/experiences?${experienceId}`)).json();
};

export const getMyLearningProfile = async () => {
  return (await apiRequest(`/experiences/profile`)).json();
};
