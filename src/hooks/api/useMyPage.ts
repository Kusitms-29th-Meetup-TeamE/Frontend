import { useGlobalModal } from '@/components/common-components/global-modal';

import {
  CalendarParams,
  LearnProfileProps,
  MyCalendarResponse,
  MyPageInfoProps,
} from '@/types/mypage';

import {
  getLearnProfile,
  getMyActivities,
  getMyCalendar,
  getMyPageInfo,
  getMyReviews,
  getRecievedReviews,
  getReviewsByMe,
  postLearnProfile,
  postMyReview,
  putMyPageInfo,
} from '@/api/mypage';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetMyPageInfo = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['myPageInfo'],
    queryFn: () => getMyPageInfo(),
  });
  return { data, isLoading, error };
};

export const usePutMyPageInfo = (data: MyPageInfoProps) => {
  const { setSuccessModal, setErrorModal } = useGlobalModal();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => putMyPageInfo(data),
    onSuccess: () => {
      setSuccessModal({
        open: true,
        text: '기본 정보가 수정되었습니다.',
      });
    },
    onError: () => {
      setErrorModal({
        open: true,
        text: '예기치 못한 에러가 발생하였습니다.',
      });
    },
  });
  return { mutate, isPending, error };
};

export const useGetLearnProfile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['learnProfile'],
    queryFn: () => getLearnProfile(),
  });
  return { data, isLoading, error };
};

export const usePostLearnProfile = (data: LearnProfileProps) => {
  const { setSuccessModal, setErrorModal } = useGlobalModal();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => postLearnProfile(data),
    onSuccess: () => {
      setSuccessModal({
        open: true,
        text: '배움 프로필이 생성되었습니다.',
      });
    },
    onError: () => {
      setErrorModal({
        open: true,
        text: '예기치 못한 에러가 발생하였습니다.',
      });
    },
  });
  return { mutate, isPending, error };
};

export const useGetReviewsByMe = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['reviewsByme'],
    queryFn: () => getReviewsByMe(),
  });
  return { data, isLoading, error };
};

export const useGetRecievedReviews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['recievedReviews'],
    queryFn: () => getRecievedReviews(),
  });
  return { data, isLoading, error };
};

export const useMyActivities = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['myActivities'],
    queryFn: () => getMyActivities(),
  });
  return { data, isLoading, error };
};

export const useMyReviews = (id: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['myReviews'],
    queryFn: () => getMyReviews(id),
  });
  return { data, isLoading, error };
};

export const usePostMyReview = (content: string, id: number) => {
  const { setSuccessModal, setErrorModal } = useGlobalModal();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => postMyReview(content, id),
    onSuccess: () => {
      setSuccessModal({
        open: true,
        text: '후기가 등록되었습니다.',
      });
    },
    onError: () => {
      setErrorModal({
        open: true,
        text: '예기치 못한 에러가 발생하였습니다.',
      });
    },
  });
  return { mutate, isPending, error };
};

export const useMyCalendar = (param: CalendarParams) => {
  const { data, isLoading, error } = useQuery<MyCalendarResponse>({
    queryKey: ['myCalendar'],
    queryFn: () => getMyCalendar(param),
  });
  return { data, isLoading, error };
};
