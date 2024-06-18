import { BASE_URL, apiRequest } from '.';

export const getMainData = async () => {
  // try {
  //   const headers: { [key: string]: string } = {
  //     'Content-Type': 'application/json',
  //   };

  //   const accessToken =
  //     typeof window !== 'undefined' && sessionStorage.getItem('accessToken');

  //   if (accessToken) {
  //     headers['Authorization'] = `Bearer ${accessToken}`;
  //   }

  //   const response = await fetch(`${BASE_URL}/users/main`, {
  //     method: 'GET',
  //     headers,
  //   });

  //   if (!response.ok) {
  //     throw new Error('Failed to fetch main data');
  //   }

  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error('Error fetching data:', error);
  //   throw error;
  // }
  return apiRequest('/users/main');
};
