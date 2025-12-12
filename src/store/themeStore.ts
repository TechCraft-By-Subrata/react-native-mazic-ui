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
  tabBarIconActiveColor?: string;
  tabBarIconInactiveColor?: string;
  modalBgColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  screenBgColor?: string;
  modalHeaderBgColor?: string;
  modalCardBgColor?: string;
  modalTitleColor?: string;
  textPrimary?: string;
  textSecondary?: string;
  borderColor?: string;
  dividerColor?: string;
  inputBgColor?: string;
  inputBorderColor?: string;
  cardBgColor?: string;
  cardBorderColor?: string;
  accentColor?: string;
  errorColor?: string;
  successColor?: string;
  warningColor?: string;
};

export type ThemeMode = 'light' | 'dark' | 'system';

export type ThemeColors = {
  light: ThemeColor;
  dark: ThemeColor;
};

export interface ThemeStore {
  colors: ThemeColors;
  tcbsTheme: ThemeMode;
  themeColors: ThemeColor;
  /**
   * Returns the current theme as 'light' or 'dark' (never 'system').
   * If tcbsTheme is 'system', resolves to the current system color scheme.
   */
  currentThemeMode: 'light' | 'dark';
  setTcbsColor: (colors: Partial<ThemeColor> & { light?: Partial<ThemeColor>; dark?: Partial<ThemeColor> }) => void;
  setTcbsTheme: (mode: ThemeMode) => void;
  toggleTcbsTheme: () => void;
  setMazicColor: (baseColor: string) => void;
}

const defaultColors: ThemeColors = {
  light: {
    // You can set initial defaults here if needed, or leave them empty
    btnColor: '#007AFF',
    btnBorderColor: '#007AFF',
    btnIconColor: '#FFFFFF',
    themeColor: '#007AFF',
    btnTextColor: '#FFFFFF',
  },
  dark: {
    btnColor: '#222222',
    btnBorderColor: '#222222',
    btnIconColor: '#FFFFFF',
    themeColor: '#222222',
    btnTextColor: '#FFFFFF',
  },
};

// Try to load persisted theme, fallback to 'light'. If 'system', use current system color scheme.
const defaultTheme = storage.getString(THEME_KEY) as ThemeMode | undefined || 'light';

// Helper functions for color manipulation
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + [r, g, b].map(x => {
    const hex = Math.round(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
};

const adjustBrightness = (hex: string, percent: number): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  // percent > 0: lighten, percent < 0: darken
  const adjust = (value: number) => {
    if (percent > 0) {
      return Math.round(value + (255 - value) * (percent / 100));
    } else {
      return Math.round(value * (1 + percent / 100));
    }
  };
  return rgbToHex(adjust(rgb.r), adjust(rgb.g), adjust(rgb.b));
};

// NEW HELPER: Determines if a color is dark enough to require white text
const isColorDark = (hex: string): boolean => {
  const rgb = hexToRgb(hex);
  if (!rgb) return true; // Default to white text if color is invalid
  // Calculate Luma (YIQ method is good for perceived brightness)
  // Formula: (R * 299 + G * 587 + B * 114) / 1000
  const luma = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  // Threshold 0.45 is slightly lower than standard 0.5, favoring white text
  return luma < 0.45;
};

const addAlpha = (hex: string, alpha: number): string => {
  const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');
  return hex + alphaHex;
};


export const useTcbsColorStore = create<ThemeStore>((set: (fn: (state: ThemeStore) => Partial<ThemeStore>) => void, get) => {
  // Helper to get the current theme color
  const getThemeColors = (theme: ThemeMode, colors: ThemeColors): ThemeColor => {
    if (theme === 'light' || theme === 'dark') {
      return colors[theme];
    } else {
      // system: use Appearance API
      const colorScheme = Appearance.getColorScheme?.() || 'light';
      return colors[colorScheme as 'light' | 'dark'] || colors.light;
    }
  };

  // Initial state
  const initialColors = defaultColors;
  const initialTheme = defaultTheme;
  const initialThemeColors = getThemeColors(initialTheme, initialColors);

  // Listen to system theme changes if needed
  if (initialTheme === 'system' && !appearanceListener) {
    appearanceListener = Appearance.addChangeListener?.(({ colorScheme }) => {
      set((state: ThemeStore) => ({
        themeColors: state.colors[(colorScheme as 'light' | 'dark') || 'light']
      }));
    });
  }

  return {
    colors: initialColors,
    tcbsTheme: initialTheme,
    themeColors: initialThemeColors,
    get currentThemeMode() {
      const state = get();
      if (state.tcbsTheme === 'light' || state.tcbsTheme === 'dark') {
        return state.tcbsTheme;
      }
      // system: use Appearance API
      const colorScheme = Appearance.getColorScheme?.() || 'light';
      return (colorScheme === 'dark' ? 'dark' : 'light');
    },
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
        // Update themeColors as well
        const themeColors = getThemeColors(state.tcbsTheme, newColors);
        return { colors: newColors, themeColors };
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
      // If new theme is system, add listener
      if (newTheme === 'system') {
        appearanceListener = Appearance.addChangeListener?.(({ colorScheme }) => {
          set((state: ThemeStore) => ({
            themeColors: state.colors[(colorScheme as 'light' | 'dark') || 'light']
          }));
        });
      }
      // Update themeColors as well
      set((state: ThemeStore) => ({
        tcbsTheme: newTheme,
        themeColors: getThemeColors(newTheme, state.colors)
      }));
    },
    toggleTcbsTheme: () => {
      set((state: ThemeStore) => {
        const themes: ThemeMode[] = ['light', 'dark', 'system'];
        const currentIdx = themes.indexOf(state.tcbsTheme);
        const nextTheme = themes[(currentIdx + 1) % themes.length];
        // Note: setTcbsTheme is called outside the state update, but here it's called internally
        // which is a common pattern in zustand actions.
        // @ts-ignore
        state.setTcbsTheme(nextTheme);
        return {};
      });
    },
    
    // REWRITTEN FUNCTION using hardcoded neutrals for better UI contrast
    setMazicColor: (baseColor: string) => {
      // Determine the best text color for the button based on the base color's brightness
      // const buttonTextColor = isColorDark(baseColor) ? '#FFFFFF' : '#000000';
      const buttonTextColor = '#FFFFFF' ;
      const secondaryBaseColor = adjustBrightness(baseColor, -10); // A slightly darker shade for accents

      // --- Light Theme Palette ---
      const lightColors: ThemeColor = {
        // Primary & Button Colors (baseColor is the accent)
        btnColor: addAlpha(baseColor,1),
        btnBorderColor: baseColor,
        btnIconColor: buttonTextColor,
        themeColor: baseColor,
        btnTextColor: buttonTextColor,

        tabBarIconActiveColor: buttonTextColor,
        tabBarIconInactiveColor: addAlpha("#000000",0.4),

        // modalBgColor: 80% lighter than baseColor
        primaryColor:  addAlpha(baseColor,1),
        secondaryColor: addAlpha(baseColor,0.7),
        tertiaryColor: addAlpha(baseColor,0.1),

        // Backgrounds (Clean white/near-white neutrals)
        screenBgColor: addAlpha(baseColor,0.1), // Pure white
        modalBgColor: adjustBrightness(baseColor, 10), // 80% lighter tone
        modalTitleColor: adjustBrightness(baseColor, 90),
        modalHeaderBgColor: '#F0F0F0', // Light gray
        modalCardBgColor: '#FAFAFA', // Off-white for cards/modals

        // Text Colors (High contrast black/dark gray)
        textPrimary: '#1F1F1F', // Very dark gray
        textSecondary: '#6B7280', // Medium gray

        // Borders & Dividers (Very subtle grays)
        borderColor: '#E5E7EB',
        dividerColor: '#F3F4F6',

        // Inputs & Cards
        inputBgColor: '#FFFFFF',
        inputBorderColor: '#D1D5DB',
        cardBgColor: '#FFFFFF',
        cardBorderColor: '#E5E7EB',

        // Status Colors (Standard, high-contrast semantic colors)
        accentColor: secondaryBaseColor,
        errorColor: '#DC2626',
        successColor: '#16A34A',
        warningColor: '#F59E0B',
      };

      // --- Dark Theme Palette ---
      const darkColors: ThemeColor = {
        // Primary & Button Colors
        btnColor: addAlpha(baseColor,1),
        btnBorderColor: baseColor,
        btnIconColor: buttonTextColor,
        themeColor: baseColor,
        btnTextColor: buttonTextColor,

        tabBarIconActiveColor: buttonTextColor,
        tabBarIconInactiveColor: addAlpha("#000000",0.4),

        primaryColor:  addAlpha(baseColor,1),
        secondaryColor: addAlpha(baseColor,0.7),
        tertiaryColor: addAlpha(baseColor,0.2),

        // Backgrounds (Clean dark/near-black neutrals)
        screenBgColor: addAlpha(baseColor,0.8), // Very dark gray
        modalBgColor: adjustBrightness(baseColor, 80), // Darker overlay
        modalHeaderBgColor: '#1F1F1F', // Slightly lighter dark gray
        modalCardBgColor: '#2C2C2C', // Medium dark gray for cards/modals

        // Text Colors (High contrast white/light gray)
        textPrimary: '#FFFFFF', // Pure white
        textSecondary: '#A0A0A0', // Light gray

        // Borders & Dividers (Subtle dark grays)
        borderColor: '#374151',
        dividerColor: '#2C2C2C',

        // Inputs & Cards
        inputBgColor: '#1F1F1F',
        inputBorderColor: '#374151',
        cardBgColor: '#1F1F1F',
        cardBorderColor: '#374151',

        // Status Colors (Brighter semantic colors for dark background)
        accentColor: secondaryBaseColor,
        errorColor: '#EF4444',
        successColor: '#22C55E',
        warningColor: '#FBBF24',
      };
      
      set((state: ThemeStore) => {
        const newColors = {
          light: lightColors,
          dark: darkColors,
        };
        const themeColors = getThemeColors(state.tcbsTheme, newColors);
        return { colors: newColors, themeColors };
      });
    }
  };
});