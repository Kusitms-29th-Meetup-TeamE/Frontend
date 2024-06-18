import { apiRequest } from '.';

export const getMainData = async () => {
  return apiRequest('/users/main');
};
