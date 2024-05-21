import { LearningRequestType } from '@/types/learning';

import { getAllLearning, getLearningDetail } from '@/api/share';
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

export const useLearningDetail = (experieceId: number) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['LERANING_DETAIL', experieceId],
    queryFn: () => getLearningDetail(experieceId),
  });
  return { data, isLoading, error, refetch };
};
