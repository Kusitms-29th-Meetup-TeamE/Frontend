import { create } from 'zustand';

interface ChatStoreState {
  myId: number | undefined;
  setMyId: (id: number) => void;
}

export const useChatStore = create<ChatStoreState>((set) => ({
  myId: -1,
  setMyId: (id: number) => set((state) => ({ myId: id })),
}));
