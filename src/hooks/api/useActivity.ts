import { AllActivityProps, getAllActivity, getLikedActivity } from '@/api/join';
import { useQuery } from '@tanstack/react-query';

export const useAllActivity = ({
  page,
  agencyType,
  personalities,
}: AllActivityProps) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['ALL_ACTIVITY', page],
    queryFn: () => getAllActivity({ page, agencyType, personalities }),
  });
  return { data, isLoading, error, refetch };
};

export const useLikedActivity = ({
  page,
  agencyType,
  personalities,
}: AllActivityProps) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['LIKED_ACTIVITY', page],
    queryFn: () => getLikedActivity({ page, agencyType, personalities }),
  });
  return { data, isLoading, error, refetch };
};
