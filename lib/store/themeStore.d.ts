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
    setTcbsColor: (colors: Partial<ThemeColor> & {
        light?: Partial<ThemeColor>;
        dark?: Partial<ThemeColor>;
    }) => void;
    setTcbsTheme: (mode: ThemeMode) => void;
    toggleTcbsTheme: () => void;
    setMazicColor: (baseColor: string) => void;
}
export declare const useTcbsColorStore: any;
