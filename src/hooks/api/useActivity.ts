import {
  AllActivityProps,
  getActivityDetail,
  getAllActivity,
  getLikedActivity,
  postActivityLike,
  postActivityNotLike,
} from '@/api/join';
import { useMutation, useQuery } from '@tanstack/react-query';

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

export const usePostActivityLike = (id: number) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['LIKE', id],
    mutationFn: () => postActivityLike(id),
  });
  return { mutate, isPending };
};

export const usePostActivityNotLike = (id: number) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['NO_LIKE', id],
    mutationFn: () => postActivityNotLike(id),
  });
  return { mutate, isPending };
};
