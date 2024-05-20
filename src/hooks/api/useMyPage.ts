import { useGlobalModal } from '@/components/common-components/global-modal';

import { LearnProfileProps, MyPageInfoProps } from '@/types/mypage';

import {
  getLearnProfile,
  getMyPageInfo,
  getRecievedReviews,
  getReviewsByMe,
  postLearnProfile,
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
