'use client';

import { getMainData } from '@/api/main';
import { useQuery } from '@tanstack/react-query';

export const useMainDataList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['mainDataList'],
    queryFn: () => getMainData(),
  });
  return { data, isLoading, error };
};
