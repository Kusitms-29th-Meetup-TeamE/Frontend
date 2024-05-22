import { useGlobalModal } from '@/components/common-components/global-modal';

import { KakaoUserProps, UserInfoProps } from '@/types/user';

import {
  getKakaoToken,
  postEmailAuth,
  postKakaoUserInfo,
  postLocalLogin,
  postLocalUserInfo,
  postOnboardingInfo,
} from '@/api/user';
import { useMutation, useQuery } from '@tanstack/react-query';

import { useNotifyError, useNotifySuccess } from '../useToast';

import { useRouter } from 'next/navigation';

export const useKakaoToken = (kakaoCode: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['KAKAO_CODE', kakaoCode],
    queryFn: () => getKakaoToken(kakaoCode),
  });
  return { data, isLoading, error };
};

export const useKakaoUserInfo = (data: KakaoUserProps) => {
  const { setSuccessModal, setErrorModal } = useGlobalModal();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => postKakaoUserInfo(data),
    onSuccess: () => {
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

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => postLocalUserInfo(data),
    onSuccess: (res) => {
      setSuccessModal({
        open: true,
        text: '회원가입이 완료되었습니다.',
      });
      sessionStorage.clear();
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

export const useLocalLogin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const router = useRouter();
  const { setErrorModal } = useGlobalModal();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => postLocalLogin({ email, password }),
    onSuccess: (res) => {
      if (res === '등록되지 않은 이메일입니다.') {
        setErrorModal({
          open: true,
          text: '가입되지 않은 이메일입니다.',
        });
      } else if (res === '잘못된 비밀번호입니다.') {
        setErrorModal({
          open: true,
          text: '비밀번호를 다시 입력해주세요.',
        });
      } else {
        router.push('/');
      }
    },
    onError: (err: any) => {
      console.log(err);
      setErrorModal({
        open: true,
        text: '로그인에 실패하였습니다.',
      });
    },
  });
  return { mutate, isPending, error };
};

export const useOnboardingInfo = (data: string[]) => {
  const { setSuccessModal, setErrorModal } = useGlobalModal();
  const router = useRouter();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => postOnboardingInfo(data),
    onSuccess: () => {
      setSuccessModal({
        open: true,
        text: '온보딩 정보가 등록되었습니다',
      });
    },
    onError: () => {
      setErrorModal({
        open: true,
        text: '회원가입 후 이용할 수 있는 서비스입니다',
      });
      router.push('/login');
    },
  });
  return { mutate, isPending, error };
};
