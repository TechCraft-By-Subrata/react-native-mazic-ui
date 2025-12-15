import {create} from 'zustand';

export interface GlobalErrorState {
  fatalError: null | { error: any };
  setFatalError: (error: any) => void;
  clearFatalError: () => void;
}

export const useGlobalErrorStore = create<GlobalErrorState>((set) => ({
  fatalError: null,
  setFatalError: (error) => set({ fatalError: { error } }),
  clearFatalError: () => set({ fatalError: null }),
}));
