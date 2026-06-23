import React from 'react';
import { AccessibilityRole, AccessibilityState, GestureResponderEvent, Insets, StyleProp, TextStyle, ViewStyle } from 'react-native';
export declare const TCBS_LIQUID_GLASS_BUTTON_SIZE: {
    readonly SMALL: "sm";
    readonly MEDIUM: "md";
    readonly LARGE: "lg";
};
export type TcbsLiquidGlassButtonSize = (typeof TCBS_LIQUID_GLASS_BUTTON_SIZE)[keyof typeof TCBS_LIQUID_GLASS_BUTTON_SIZE];
export interface TcbsLiquidGlassButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    size?: TcbsLiquidGlassButtonSize;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    contentStyle?: StyleProp<ViewStyle>;
    testID?: string;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    accessibilityRole?: AccessibilityRole;
    accessibilityState?: AccessibilityState;
}
export interface TcbsLiquidGlassIconButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    icon?: React.ReactNode;
    label?: string;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    disabled?: boolean;
    size?: number;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    hitSlop?: Insets;
    testID?: string;
    accessibilityRole?: AccessibilityRole;
    accessibilityState?: AccessibilityState;
}
