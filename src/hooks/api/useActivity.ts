import { AllActivityProps, getAllActivity } from '@/api/join';
import { useQuery } from '@tanstack/react-query';

export const useAllActivity = ({
  page,
  agencyType,
  personalities,
}: AllActivityProps) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['ALL_ACTIVITY'],
    queryFn: () => getAllActivity({ page, agencyType, personalities }),
  });
  return { data, isLoading, error, refetch };
};
