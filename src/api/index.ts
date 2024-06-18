import { API_METHOD_TYPE } from '@/types';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL;

export const getHeaders = (): HeadersInit => ({
  Authorization: `Bearer ${sessionStorage.accessToken}`,
  'Content-Type': 'application/json',
});

export const apiRequest = async <T>(
  endpoint: string,
  method: API_METHOD_TYPE | undefined = 'GET',
  body?: object | null | undefined,
): Promise<T> => {
  const accessToken =
    typeof window !== 'undefined' && sessionStorage.getItem('accessToken');

  const options = {
    method,
    headers: accessToken ? getHeaders() : undefined,
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
