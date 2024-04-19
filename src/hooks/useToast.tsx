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

export const useNotifyLoading = (text: string, myPromise: Promise<any>) => {
  toast.promise(myPromise, {
    loading: 'Loading',
    success: 'Got the data',
    error: 'Error when fetching',
  });
};
