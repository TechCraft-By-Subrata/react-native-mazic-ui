import { create } from 'zustand';
import { Appearance } from 'react-native';
import { MMKV } from 'react-native-mmkv';
// MMKV instance for theme persistence
const storage = new MMKV();
const THEME_KEY = 'tcbsTheme';
// Store the listener subscription so we can remove it
let appearanceListener: { remove: () => void } | null = null;

export type ThemeColor = {
  btnColor: string;
  btnBorderColor?: string;
  btnIconColor?: string;
  themeColor: string;
  btnTextColor: string;
  screenBgColor?: string;
};

export type ThemeMode = 'light' | 'dark' | 'system';

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

// Try to load persisted theme, fallback to 'light'. If 'system', use current system color scheme.
const persistedTheme = storage.getString(THEME_KEY) as ThemeMode | undefined;
let defaultTheme: ThemeMode = 'light';
if (persistedTheme === 'system') {
  const colorScheme = Appearance.getColorScheme();
  defaultTheme = colorScheme === 'dark' ? 'dark' : 'light';
} else if (persistedTheme === 'light' || persistedTheme === 'dark') {
  defaultTheme = persistedTheme;
}

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
  setTcbsTheme: (newTheme: ThemeMode) => {
    // Persist user selection
    storage.set(THEME_KEY, newTheme);
    // Remove previous listener if exists
    if (appearanceListener) {
      appearanceListener.remove();
      appearanceListener = null;
    }
    if (newTheme === 'system') {
      const colorScheme = Appearance.getColorScheme();
      set(() => ({ tcbsTheme: colorScheme === 'dark' ? 'dark' : 'light' }));
      appearanceListener = Appearance.addChangeListener(({ colorScheme }) => {
        set(() => ({ tcbsTheme: colorScheme === 'dark' ? 'dark' : 'light' }));
      });
    } else {
      set(() => ({ tcbsTheme: newTheme }));
    }
  }
}));