import { StyleProp, ViewStyle, TextStyle, AccessibilityRole, AccessibilityState, GestureResponderEvent } from 'react-native';

export type IconComponentType = React.ComponentType<{
  name: string;
  size: number;
  color: string;
  style?: StyleProp<ViewStyle>;
}>;

export const BUTTON_SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  NO_BORDER: 'no_border',

} as const;

export const BORDER_RADIUS = {
  SMALL: 8,
  MEDIUM: 12,
  LARGE: 16,
  NONE: 0,
  FULL: '50%',
} as const;

export type ButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
export type ButtonVariant = (typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT];

export type IconGroupType =
  | 'AntDesign'
  | 'Feather'
  | 'FontAwesome'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialDesignIcons'
  | 'Octicons'
  | 'Lucide';

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
