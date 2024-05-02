'use client';

import toast from 'react-hot-toast';

export type ToastProps = {
  text: string;
  icon: string;
};

export const useNotifyToast = ({ text, icon }: ToastProps) => {
  toast.success(text, { duration: 800, icon: icon });
};

export const useNotifySuccess = (text: string) => {
  toast.success(text);
};

export const useNotifyError = (text: string) => {
  toast.error(text);
};

// TOFIX: 추후 api 작성하면서 수정 필요
export const useNotifyLoading = (text: string, myPromise: Promise<any>) => {
  toast.promise(myPromise, {
    loading: 'Loading',
    success: 'Got the data',
    error: 'Error when fetching',
  });
};

export const useNotifyLogin = () => {
  toast.success('로그인이 필요한 서비스입니다.', { duration: 800, icon: '🙂' });
};
