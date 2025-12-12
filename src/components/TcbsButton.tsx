import React, { useMemo } from 'react';
import { TouchableOpacity, Text, View ,  StyleProp, ViewStyle, TextStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
// import Lucide from 'react-native-vector-icons/Lucide';
import {
  BUTTON_SIZE,
  BUTTON_VARIANT,
  BORDER_RADIUS,
  ButtonSize,
  ButtonVariant,
  IconGroupType,
  IconPosition,
  TcbsButtonProps,
  IconComponentType,
} from './TcbsButton.types';
import { useTcbsColorStore } from '../store/themeStore';

const HEIGHTS: Record<ButtonSize, number> = {
  [BUTTON_SIZE.LARGE]: 56,
  [BUTTON_SIZE.MEDIUM]: 40,
  [BUTTON_SIZE.SMALL]: 32,
};

const FONT_SIZES: Record<ButtonSize, number> = {
  [BUTTON_SIZE.LARGE]: 20,
  [BUTTON_SIZE.MEDIUM]: 16,
  [BUTTON_SIZE.SMALL]: 14,
};

const BORDER_RADIUSES: Record<ButtonSize, number> = {
  [BUTTON_SIZE.LARGE]: BORDER_RADIUS.MEDIUM,
  [BUTTON_SIZE.MEDIUM]: BORDER_RADIUS.SMALL,
  [BUTTON_SIZE.SMALL]: BORDER_RADIUS.SMALL,
};

/**
 * TcbsButton - A themeable, accessible button component with icon support
 * 
 * @example
 * ```tsx
 * <TcbsButton
 *   title="Submit"
 *   onPress={() => console.log('Pressed')}
 *   size="large"
 *   variant="primary"
 *   iconName="check"
 *   iconPosition="left"
 * />
 * ```
 */
export const TcbsButton: React.FC<TcbsButtonProps> = ({
  title,
  onPress,
  size = BUTTON_SIZE.LARGE,
  variant = BUTTON_VARIANT.PRIMARY,
  borderRadius,
  disabled = false,
  style,
  textStyle,
  iconName,
  iconGroup = 'MaterialDesignIcons',
  iconColor,
  iconSize,
  iconPosition = 'top',
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = 'button',
  accessibilityState,
  themeColor,
  screenBgColor,
}) => {
  // Use themeColors from store if not provided as prop
  const { themeColors, tcbsTheme } = useTcbsColorStore();
  const effectiveThemeColor = themeColor ?? themeColors;
  // Normalize colors: if only one color is set, use it for all
  const normalizedColors = {
    btnColor: effectiveThemeColor?.btnColor ?? effectiveThemeColor?.themeColor ?? '#007AFF',
    btnBorderColor: effectiveThemeColor?.btnBorderColor ?? effectiveThemeColor?.btnColor ?? '#007AFF',
    btnIconColor: effectiveThemeColor?.btnIconColor,
    btnTextColor: effectiveThemeColor?.btnTextColor ?? effectiveThemeColor?.btnTxtColor,
    themeColor: effectiveThemeColor?.themeColor ?? effectiveThemeColor?.btnColor ?? '#007AFF',
  };

  const buttonStyle = useMemo<StyleProp<ViewStyle>>(() => {
    const baseStyle: ViewStyle = {
      height: HEIGHTS[size],
      borderRadius: borderRadius ?? BORDER_RADIUSES[size],
      alignItems: 'center',
      justifyContent: 'center',
      opacity: disabled ? 0.6 : 1,
      paddingHorizontal: 24,
    };

    if (variant === BUTTON_VARIANT.SECONDARY) {
      return {
        ...baseStyle,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: normalizedColors.btnBorderColor,
        ...(style as ViewStyle),
      };
    }

    if (variant === BUTTON_VARIANT.NO_BORDER) {
      return {
        ...baseStyle,
        backgroundColor: 'transparent',
        ...(style as ViewStyle),
      };
    }

    // Primary variant (default)
    return {
      ...baseStyle,
      backgroundColor: normalizedColors.btnColor,
      shadowColor: normalizedColors.btnColor,
      shadowOpacity: 0.15,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
      ...(style as ViewStyle),
    };
  }, [size, variant, normalizedColors, style, disabled, borderRadius]);

  const themedTextStyle = useMemo<TextStyle>(() => {
    const baseTextColor =
      variant === BUTTON_VARIANT.PRIMARY
        ? normalizedColors.btnTextColor || '#FFFFFF'
        : variant === BUTTON_VARIANT.NO_BORDER && tcbsTheme === 'dark' ? normalizedColors.btnTextColor || "#FFFFFF" : normalizedColors?.btnColor || normalizedColors?.themeColor || "#FFFFFF";

    return {
      color: baseTextColor,
      fontSize: FONT_SIZES[size],
      fontWeight: '700',
      ...(textStyle as TextStyle),
    };
  }, [size, variant, normalizedColors, textStyle]);

  const renderIcon = (IconComponent: IconComponentType) => (
    <IconComponent
      name={iconName!}
      size={iconSize || FONT_SIZES[size] * 2}
      color={iconColor || normalizedColors.btnIconColor || themedTextStyle.color}
      style={
        iconPosition === 'top'
          ? { marginBottom: 2 }
          : iconPosition === 'left'
          ? { marginRight: 8 }
          : { marginLeft: 8 }
      }
    />
  );

  const renderText = (customStyle?: TextStyle) => {
    if (!title) return null;

    const finalStyle: TextStyle = customStyle
      ? {
          color: themedTextStyle.color,
          fontSize: FONT_SIZES[size] - 4,
          fontWeight: '500',
          ...customStyle,
        }
      : themedTextStyle;

    return <Text style={finalStyle}>{title}</Text>;
  };

  const renderContent = () => {
    // If no icon, just render text
    if (!iconName) {
      return renderText();
    }

    // Map iconGroup string to actual component
    const IconComponent: IconComponentType =
      iconGroup === 'AntDesign' ? AntDesign :
      iconGroup === 'Feather' ? Feather :
      iconGroup === 'FontAwesome' ? FontAwesome :
      iconGroup === 'Foundation' ? Foundation :
      iconGroup === 'Ionicons' ? Ionicons :
      iconGroup === 'MaterialDesignIcons' ? MaterialDesignIcons :
      iconGroup === 'Octicons' ? Octicons :
      // iconGroup === 'Lucide' ? Lucide : // Uncomment if Lucide is available
      MaterialDesignIcons;

    if (iconPosition === 'top') {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          {renderIcon(IconComponent)}
          {renderText({ marginTop: 2 })}
        </View>
      );
    }

    const flexDirection = iconPosition === 'left' ? 'row' : 'row-reverse';

    return (
      <View
        style={{
          flexDirection,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {renderIcon(IconComponent)}
        {renderText()}
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={buttonStyle}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState || { disabled }}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

// Export constants for use in consuming applications
export { BUTTON_SIZE, BUTTON_VARIANT, BORDER_RADIUS };
export type { ButtonSize, ButtonVariant, IconGroupType, IconPosition };
