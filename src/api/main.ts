import { apiRequest } from '.';

export const getMainData = async () => {
  return (await apiRequest('/users/main')).json();
};
