import { DirectChatRoomsResponse, GroupChatRoomsResponse } from '@/types/chat';

import { getChatRoomsDirect, getChatRoomsGroup } from '@/api/chat';
import { useQuery } from '@tanstack/react-query';

export const useChatRoomsGroup = () => {
  const { data, isLoading, error } = useQuery<GroupChatRoomsResponse>({
    queryKey: ['chatroomsGroup'],
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
