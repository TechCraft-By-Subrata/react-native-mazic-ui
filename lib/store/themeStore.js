import { create } from 'zustand';
import { Appearance } from 'react-native';
import { MMKV } from 'react-native-mmkv';
// MMKV instance for theme persistence
const storage = new MMKV();
const THEME_KEY = 'tcbsTheme';
// Store the listener subscription so we can remove it
let appearanceListener = null;
const defaultColors = {
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
const defaultTheme = storage.getString(THEME_KEY) || 'light';
// Helper functions for color manipulation
const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};
const rgbToHex = (r, g, b) => {
    return '#' + [r, g, b].map(x => {
        const hex = Math.round(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
};
const adjustBrightness = (hex, percent) => {
    const rgb = hexToRgb(hex);
    if (!rgb)
        return hex;
    // percent > 0: lighten, percent < 0: darken
    const adjust = (value) => {
        if (percent > 0) {
            return Math.round(value + (255 - value) * (percent / 100));
        }
        else {
            return Math.round(value * (1 + percent / 100));
        }
    };
    return rgbToHex(adjust(rgb.r), adjust(rgb.g), adjust(rgb.b));
};
// NEW HELPER: Determines if a color is dark enough to require white text
const isColorDark = (hex) => {
    const rgb = hexToRgb(hex);
    if (!rgb)
        return true; // Default to white text if color is invalid
    // Calculate Luma (YIQ method is good for perceived brightness)
    // Formula: (R * 299 + G * 587 + B * 114) / 1000
    const luma = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    // Threshold 0.45 is slightly lower than standard 0.5, favoring white text
    return luma < 0.45;
};
const addAlpha = (hex, alpha) => {
    const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');
    return hex + alphaHex;
};
export const useTcbsColorStore = create((set, get) => {
    var _a;
    // Helper to get the current theme color
    const getThemeColors = (theme, colors) => {
        var _a;
        if (theme === 'light' || theme === 'dark') {
            return colors[theme];
        }
        else {
            // system: use Appearance API
            const colorScheme = ((_a = Appearance.getColorScheme) === null || _a === void 0 ? void 0 : _a.call(Appearance)) || 'light';
            return colors[colorScheme] || colors.light;
        }
    };
    // Initial state
    const initialColors = defaultColors;
    const initialTheme = defaultTheme;
    const initialThemeColors = getThemeColors(initialTheme, initialColors);
    // Listen to system theme changes if needed
    if (initialTheme === 'system' && !appearanceListener) {
        appearanceListener = (_a = Appearance.addChangeListener) === null || _a === void 0 ? void 0 : _a.call(Appearance, ({ colorScheme }) => {
            set((state) => ({
                themeColors: state.colors[colorScheme || 'light']
            }));
        });
    }
    return {
        colors: initialColors,
        tcbsTheme: initialTheme,
        themeColors: initialThemeColors,
        get currentThemeMode() {
            var _a;
            const state = get();
            if (state.tcbsTheme === 'light' || state.tcbsTheme === 'dark') {
                return state.tcbsTheme;
            }
            // system: use Appearance API
            const colorScheme = ((_a = Appearance.getColorScheme) === null || _a === void 0 ? void 0 : _a.call(Appearance)) || 'light';
            return (colorScheme === 'dark' ? 'dark' : 'light');
        },
        setTcbsColor: (colors) => {
            set((state) => {
                let newColors = Object.assign({}, state.colors);
                // If colors for both themes are provided
                if (colors.light || colors.dark) {
                    if (colors.light) {
                        newColors.light = Object.assign(Object.assign({}, newColors.light), colors.light);
                    }
                    if (colors.dark) {
                        newColors.dark = Object.assign(Object.assign({}, newColors.dark), colors.dark);
                    }
                }
                else {
                    // If only one set, update both themes
                    newColors.light = Object.assign(Object.assign({}, newColors.light), colors);
                    newColors.dark = Object.assign(Object.assign({}, newColors.dark), colors);
                }
                // Update themeColors as well
                const themeColors = getThemeColors(state.tcbsTheme, newColors);
                return { colors: newColors, themeColors };
            });
        },
        setTcbsTheme: (newTheme) => {
            var _a;
            // Persist user selection
            storage.set(THEME_KEY, newTheme);
            // Remove previous listener if exists
            if (appearanceListener) {
                appearanceListener.remove();
                appearanceListener = null;
            }
            // If new theme is system, add listener
            if (newTheme === 'system') {
                appearanceListener = (_a = Appearance.addChangeListener) === null || _a === void 0 ? void 0 : _a.call(Appearance, ({ colorScheme }) => {
                    set((state) => ({
                        themeColors: state.colors[colorScheme || 'light']
                    }));
                });
            }
            // Update themeColors as well
            set((state) => ({
                tcbsTheme: newTheme,
                themeColors: getThemeColors(newTheme, state.colors)
            }));
        },
        toggleTcbsTheme: () => {
            set((state) => {
                const themes = ['light', 'dark', 'system'];
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
        setMazicColor: (baseColor) => {
            // Determine the best text color for the button based on the base color's brightness
            // const buttonTextColor = isColorDark(baseColor) ? '#FFFFFF' : '#000000';
            const buttonTextColor = '#FFFFFF';
            const secondaryBaseColor = adjustBrightness(baseColor, -10); // A slightly darker shade for accents
            // --- Light Theme Palette ---
            const lightColors = {
                // Primary & Button Colors (baseColor is the accent)
                btnColor: addAlpha(baseColor, 1),
                btnBorderColor: baseColor,
                btnIconColor: buttonTextColor,
                themeColor: baseColor,
                btnTextColor: buttonTextColor,
                tabBarIconActiveColor: buttonTextColor,
                tabBarIconInactiveColor: addAlpha("#000000", 0.4),
                // modalBgColor: 80% lighter than baseColor
                primaryColor: addAlpha(baseColor, 1),
                secondaryColor: addAlpha(baseColor, 0.7),
                tertiaryColor: addAlpha(baseColor, 0.1),
                // Backgrounds (Clean white/near-white neutrals)
                screenBgColor: addAlpha(baseColor, 0.1),
                modalBgColor: adjustBrightness(baseColor, 10),
                modalTitleColor: adjustBrightness(baseColor, 90),
                modalHeaderBgColor: '#F0F0F0',
                modalCardBgColor: '#FAFAFA',
                // Text Colors (High contrast black/dark gray)
                textPrimary: '#1F1F1F',
                textSecondary: '#6B7280',
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
            const darkColors = {
                // Primary & Button Colors
                btnColor: addAlpha(baseColor, 1),
                btnBorderColor: baseColor,
                btnIconColor: buttonTextColor,
                themeColor: baseColor,
                btnTextColor: buttonTextColor,
                tabBarIconActiveColor: buttonTextColor,
                tabBarIconInactiveColor: addAlpha("#000000", 0.4),
                primaryColor: addAlpha(baseColor, 1),
                secondaryColor: addAlpha(baseColor, 0.7),
                tertiaryColor: addAlpha(baseColor, 0.2),
                // Backgrounds (Clean dark/near-black neutrals)
                screenBgColor: addAlpha(baseColor, 0.8),
                modalBgColor: adjustBrightness(baseColor, 80),
                modalHeaderBgColor: '#1F1F1F',
                modalCardBgColor: '#2C2C2C',
                // Text Colors (High contrast white/light gray)
                textPrimary: '#FFFFFF',
                textSecondary: '#A0A0A0',
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
            set((state) => {
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
