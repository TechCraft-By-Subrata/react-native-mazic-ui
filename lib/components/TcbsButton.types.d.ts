/// <reference types="react" />
import { StyleProp, ViewStyle, TextStyle, AccessibilityRole, AccessibilityState, GestureResponderEvent } from 'react-native';
export type IconComponentType = React.ComponentType<{
    name: string;
    size: number;
    color: string;
    style?: StyleProp<ViewStyle>;
}>;
export declare const BUTTON_SIZE: {
    readonly LARGE: "large";
    readonly MEDIUM: "medium";
    readonly SMALL: "small";
};
export declare const BUTTON_VARIANT: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly NO_BORDER: "no_border";
};
export declare const BORDER_RADIUS: {
    readonly SMALL: 8;
    readonly MEDIUM: 12;
    readonly LARGE: 16;
    readonly NONE: 0;
    readonly FULL: "50%";
};
export type ButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
export type ButtonVariant = (typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT];
export type IconGroupType = 'AntDesign' | 'Feather' | 'FontAwesome' | 'Foundation' | 'Ionicons' | 'MaterialDesignIcons' | 'Octicons' | 'Lucide';
export type IconPosition = 'top' | 'left' | 'right';
export interface TcbsButtonProps {
    title?: string;
    onPress: (event: GestureResponderEvent) => void;
    size?: ButtonSize;
    variant?: ButtonVariant;
    borderRadius?: number;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    iconName?: string;
    iconGroup?: IconGroupType;
    iconColor?: string;
    iconSize?: number;
    iconPosition?: IconPosition;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    accessibilityRole?: AccessibilityRole;
    accessibilityState?: AccessibilityState;
    themeColor?: {
        btnColor?: string;
        btnBorderColor?: string;
        btnIconColor?: string;
        themeColor?: string;
        btnTextColor?: string;
        btnTxtColor?: string;
    };
    screenBgColor?: string;
}
