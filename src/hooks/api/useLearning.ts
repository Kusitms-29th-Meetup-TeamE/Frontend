import { LearningRequestType } from '@/types/learning';

import {
  getAllLearning,
  getLearningDetail,
  getMyLearningProfile,
} from '@/api/share';
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

export const useMyLearningProfile = (experienceId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['MY_LEARNING_PROFILE', 'SHARE_PAGE', experienceId],
    queryFn: () => getMyLearningProfile(experienceId),
  });
  return { data, isLoading, error };
};
