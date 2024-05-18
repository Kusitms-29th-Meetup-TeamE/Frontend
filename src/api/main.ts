import { BASE_URL } from '.';

export const getMainData = async () => {
  const res = await fetch(`${BASE_URL}/users/main`);

  if (!res.ok) {
    throw new Error('Failed to fetch main data');
  }

  console.log(res);
  console.log(res.body);
  // console.log(res.json());
  return res.json();
};
