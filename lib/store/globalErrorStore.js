import { create } from 'zustand';
export const useGlobalErrorStore = create((set) => ({
    fatalError: null,
    setFatalError: (error) => set({ fatalError: { error } }),
    clearFatalError: () => set({ fatalError: null }),
}));
