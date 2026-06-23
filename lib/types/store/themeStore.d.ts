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
export type TcbsScaleLevel = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
export type TcbsScaleCategory = Record<TcbsScaleLevel, number>;
export type TcbsScaleTokens = {
    spacing: TcbsScaleCategory;
    radius: TcbsScaleCategory;
    fontSize: TcbsScaleCategory;
};
export type PartialTcbsScaleTokens = {
    spacing?: Partial<TcbsScaleCategory>;
    radius?: Partial<TcbsScaleCategory>;
    fontSize?: Partial<TcbsScaleCategory>;
};
export interface ThemeStore {
    colors: ThemeColors;
    tcbsTheme: ThemeMode;
    themeColors: ThemeColor;
    scaleTokens: TcbsScaleTokens;
    /**
     * Returns the current theme as 'light' or 'dark' (never 'system').
     * If tcbsTheme is 'system', resolves to the current system color scheme.
     */
    currentThemeMode: 'light' | 'dark';
    setTcbsColor: (colors: Partial<ThemeColor> & {
        light?: Partial<ThemeColor>;
        dark?: Partial<ThemeColor>;
    }) => void;
    setTcbsScale: (tokens: PartialTcbsScaleTokens) => void;
    setTcbsTheme: (mode: ThemeMode) => void;
    toggleTcbsTheme: () => void;
    setMazicColor: (baseColor: string) => void;
}
export declare const defaultScaleTokens: TcbsScaleTokens;
export declare const useTcbsColorStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ThemeStore>>;
