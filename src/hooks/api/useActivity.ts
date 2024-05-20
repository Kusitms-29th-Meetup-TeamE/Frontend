import {
  AllActivityProps,
  getActivityDetail,
  getAllActivity,
  getLikedActivity,
} from '@/api/join';
import { useQuery } from '@tanstack/react-query';

export const useAllActivity = ({
  page,
  agencyTypes,
  personalities,
}: AllActivityProps) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['ALL_ACTIVITY', page],
    queryFn: () => getAllActivity({ page, agencyTypes, personalities }),
  });
  return { data, isLoading, error, refetch };
};

export const useLikedActivity = ({
  page,
  agencyTypes,
  personalities,
}: AllActivityProps) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['LIKED_ACTIVITY', page],
    queryFn: () => getLikedActivity({ page, agencyTypes, personalities }),
  });
  return { data, isLoading, error, refetch };
};

export const useActivityDetail = (id: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['ACTIVITY_DETAIL', id],
    queryFn: () => getActivityDetail(id),
  });
  return { data, isLoading, error };
};
