import { create } from 'zustand';

export type ThemeColor = {
  btnColor: string;
  btnBorderColor?: string;
  btnIconColor?: string;
  themeColor: string;
  btnTextColor: string;
  screenBgColor?: string;
};

export type ThemeMode = 'light' | 'dark';

export type ThemeColors = {
  light: ThemeColor;
  dark: ThemeColor;
};

export interface ThemeStore {
  colors: ThemeColors;
  tcbsTheme: ThemeMode;
  setTcbsColor: (colors: Partial<ThemeColor> & { light?: Partial<ThemeColor>; dark?: Partial<ThemeColor> }) => void;
  setTcbsTheme: (mode: ThemeMode) => void;
}

const defaultColors: ThemeColors = {
  light: {
    // btnColor: '#007AFF',
    // btnBorderColor: '#007AFF',
    // btnIconColor: '#16a62bff',
    // themeColor: '#007AFF',
    // btnTextColor: '#FFFFFF',
  },
  dark: {
    // btnColor: '#222222',
    // btnBorderColor: '#222222',
    // btnIconColor: '#FFFFFF',
    // themeColor: '#222222',
    // btnTextColor: '#FFFFFF',
  },
};

const defaultTheme: ThemeMode = 'light';

export const useTcbsColorStore = create<ThemeStore>((set: (fn: (state: ThemeStore) => Partial<ThemeStore>) => void, get) => ({
  colors: defaultColors,
  tcbsTheme: defaultTheme,
  setTcbsColor: (colors: Partial<ThemeColor> & { light?: Partial<ThemeColor>; dark?: Partial<ThemeColor> }) => {
    set((state: ThemeStore) => {
      let newColors = { ...state.colors };
      // If colors for both themes are provided
      if (colors.light || colors.dark) {
        if (colors.light) {
          newColors.light = { ...newColors.light, ...colors.light };
        }
        if (colors.dark) {
          newColors.dark = { ...newColors.dark, ...colors.dark };
        }
      } else {
        // If only one set, update both themes
        newColors.light = { ...newColors.light, ...colors };
        newColors.dark = { ...newColors.dark, ...colors };
      }
      return { colors: newColors };
    });
  },
  setTcbsTheme: (newTheme: ThemeMode) => set(() =>  ({ tcbsTheme: newTheme })) 
}));