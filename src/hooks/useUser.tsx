import { useGlobalModal } from '@/components/common-components/global-modal';

import { UserInfoProps } from '@/types/user';

import { getKakaoToken } from '@/api/login/kakaoLoginApi';
import {
  postEmailAuth,
  postKakaoUserInfo,
  postLocalUserInfo,
} from '@/api/user';
import { useMutation, useQuery } from '@tanstack/react-query';

import { useNotifyError, useNotifySuccess } from './useToast';

import { useRouter } from 'next/navigation';

export const useKakaoToken = (kakaoCode: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['KAKAO_CODE', kakaoCode],
    queryFn: () => getKakaoToken(kakaoCode),
  });
  return { data, isLoading, error };
};

export const useKakaoUserInfo = (data: UserInfoProps) => {
  const { setSuccessModal, setErrorModal } = useGlobalModal();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => postKakaoUserInfo(data),
    onSuccess: (res) => {
      console.log(res);
      setSuccessModal({
        open: true,
        text: '회원 정보가 등록되었습니다.',
      });
    },
    onError: (err: any) => {
      console.log(err);
      setErrorModal({
        open: true,
        text: '예상치 못한 에러가 발생하였습니다.',
      });
    },
  });
  return { mutate, isPending, error };
};

export const useLocalUserInfo = (data: UserInfoProps) => {
  const { setSuccessModal, setErrorModal } = useGlobalModal();
  const router = useRouter();

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationFn: () => postLocalUserInfo(data),
    onSuccess: (res) => {
      setSuccessModal({
        open: true,
        text: '회원 정보가 등록되었습니다.',
      });
      // TODO: 회원가입 성공 시에만
      router.push('/login');
    },
    onError: (err: any) => {
      console.log(err);
      setErrorModal({
        open: true,
        text: '예상치 못한 에러가 발생하였습니다.',
      });
    },
  });
  return { mutate, isPending, error };
};
