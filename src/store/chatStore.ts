import { create } from 'zustand';

interface ChatStoreState {
  myId: number | undefined;
  setMyId: (id: number) => void;
}

export const useChatStore = create<ChatStoreState>((set) => ({
  myId: undefined,
  setMyId: (id: number) => set({ myId: id }),
}));
