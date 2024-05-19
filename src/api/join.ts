import { BASE_URL } from './index';

export type AllActivityProps = {
  page: number;
  agencyType?: string;
  personalities: string[];
};

export const getAllActivity = async ({
  page,
  agencyType,
  personalities,
}: AllActivityProps) => {
  if (agencyType) {
    const res = await fetch(
      `${BASE_URL}/activities?page=${page}&agencyType=${agencyType}&personalities=${personalities}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      },
    );

    if (!res.ok) {
      console.log('Error on fetching ');
    }

    const data = res.json();
    return data;
  } else {
    const res = await fetch(
      `${BASE_URL}/activities?page=${page}&personalities=${personalities}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      },
    );

    if (!res.ok) {
      console.log('Error on fetching ');
    }

    const data = res.json();
    return data;
  }
};
