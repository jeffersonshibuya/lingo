import { create } from 'zustand'

type PracticesModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const usePracticeModal = create<PracticesModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))