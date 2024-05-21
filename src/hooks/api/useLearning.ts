import { LearningRequestType } from '@/types/learning';

import { getAllLearning } from '@/api/share';
import { useQuery } from '@tanstack/react-query';

export const useAllLearning = ({
  page,
  sort,
  category,
}: LearningRequestType) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['ALL_LEARNING', page],
    queryFn: () => getAllLearning({ page, sort, category }),
  });
  return { data, isLoading, error, refetch };
};
