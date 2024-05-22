import { useGlobalModal } from '@/components/common-components/global-modal';

import { DirectChatRoomsResponse, GroupChatRoomsResponse } from '@/types/chat';

import {
  getChatRoomsDirect,
  getChatRoomsGroup,
  postChatRoomsDirect,
  postChatRoomsGroup,
} from '@/api/chat';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useChatRoomsGroup = (accessToken?: string) => {
  const { data, isLoading, error } = useQuery<GroupChatRoomsResponse>({
    queryKey: ['chatroomsGroup', accessToken],
    queryFn: () => getChatRoomsGroup(),
  });
  return { data, isLoading, error };
};

export const useChatRoomsDirect = () => {
  const { data, isLoading, error } = useQuery<DirectChatRoomsResponse>({
    queryKey: ['chatroomsDirect'],
    queryFn: () => getChatRoomsDirect(),
  });
  return { data, isLoading, error };
};

export const usePostChatRoomsGroup = (id: number) => {
  const { setSuccessModal, setErrorModal } = useGlobalModal();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => postChatRoomsGroup(id),
    onSuccess: () => {
      setSuccessModal({
        open: true,
        text: '신청이 완료되었습니다.',
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

export const usePostChatRoomsDirect = (id: number) => {
  const { setSuccessModal, setErrorModal } = useGlobalModal();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => postChatRoomsDirect(id),
    onSuccess: () => {
      setSuccessModal({
        open: true,
        text: '1:1 대화방이 만들어졌어요!',
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
