import React, { useMemo } from 'react';
import { Appearance, StyleSheet, TouchableOpacity, Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { AntDesign } from '@react-native-vector-icons/ant-design';
import { Feather } from '@react-native-vector-icons/feather';
import { FontAwesome } from '@react-native-vector-icons/fontawesome';
import { Foundation } from '@react-native-vector-icons/foundation';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { Octicons } from '@react-native-vector-icons/octicons';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
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

// Support for BORDER_RADIUS.NONE and BORDER_RADIUS.FULL (50%)
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
  iconGroup = 'MaterialIcons',
  iconColor,
  iconSize,
  iconPosition = 'top',
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = 'button',
  accessibilityState,
}) => {
  // Use themeColors from store if not provided as prop
  const { themeColors, tcbsTheme, scaleTokens } = useTcbsColorStore();
  const effectiveThemeColor = themeColors;
  // Normalize colors: if only one color is set, use it for all
  const normalizedColors = {
    btnColor: effectiveThemeColor?.btnColor ?? effectiveThemeColor?.themeColor ?? '#007AFF',
    btnBorderColor: effectiveThemeColor?.btnBorderColor ?? effectiveThemeColor?.btnColor ?? '#007AFF',
    btnIconColor: effectiveThemeColor?.btnIconColor,
    btnTextColor: effectiveThemeColor?.btnTextColor,
    themeColor: effectiveThemeColor?.themeColor ?? effectiveThemeColor?.btnColor ?? '#007AFF',
  };

  const buttonStyle = useMemo<StyleProp<ViewStyle>>(() => {
    const height = HEIGHTS[size];
    let computedBorderRadius: number;
    if (borderRadius === BORDER_RADIUS.NONE) {
      computedBorderRadius = 0;
    } else if (borderRadius === BORDER_RADIUS.FULL) {
      computedBorderRadius = height / 2;
    } else if (borderRadius !== undefined) {
      computedBorderRadius = borderRadius;
    } else {
      computedBorderRadius =
        size === BUTTON_SIZE.LARGE
          ? scaleTokens.radius.m
          : size === BUTTON_SIZE.MEDIUM
            ? scaleTokens.radius.s
            : Math.max(scaleTokens.radius.xs, BORDER_RADIUSES[size]);
    }

    const baseStyle: ViewStyle = {
      height,
      borderRadius: computedBorderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: disabled ? 0.6 : 1,
      paddingHorizontal: scaleTokens.spacing.xxl,
    };

    if (variant === BUTTON_VARIANT.SECONDARY) {
      return {
        ...baseStyle,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: normalizedColors.btnBorderColor,
        ...(StyleSheet.flatten(style) || {}),
      };
    }

    if (variant === BUTTON_VARIANT.NO_BORDER) {
      return {
        ...baseStyle,
        backgroundColor: 'transparent',
        ...(StyleSheet.flatten(style) || {}),
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
      ...(StyleSheet.flatten(style) || {}),
    };
  }, [size, variant, normalizedColors, style, disabled, borderRadius, scaleTokens]);

  const resolvedTextColor =
    variant === BUTTON_VARIANT.PRIMARY
      ? normalizedColors.btnTextColor || '#FFFFFF'
      : variant === BUTTON_VARIANT.NO_BORDER
        ? ((tcbsTheme === 'system' ? (Appearance.getColorScheme() || 'light') : tcbsTheme) === 'dark'
            ? normalizedColors.btnTextColor || '#FFFFFF'
            : normalizedColors.btnColor || '#007AFF')
        : normalizedColors.btnColor || '#FFFFFF';

  const themedTextStyle = useMemo<TextStyle>(() => {
    return {
      color: resolvedTextColor,
      fontSize:
        size === BUTTON_SIZE.LARGE
          ? scaleTokens.fontSize.xl
          : size === BUTTON_SIZE.MEDIUM
            ? scaleTokens.fontSize.m
            : scaleTokens.fontSize.s,
      fontWeight: '700',
      ...(StyleSheet.flatten(textStyle) || {}),
    };
  }, [size, resolvedTextColor, textStyle, scaleTokens]);

  const renderIcon = (IconComponent: IconComponentType) => (
    <IconComponent
      name={iconName!}
      size={
        iconSize ||
        (size === BUTTON_SIZE.LARGE
          ? scaleTokens.fontSize.xxl + scaleTokens.spacing.m
          : size === BUTTON_SIZE.MEDIUM
            ? scaleTokens.fontSize.xl + scaleTokens.spacing.s
            : scaleTokens.fontSize.l + scaleTokens.spacing.s)
      }
      color={iconColor || resolvedTextColor}
      style={
        iconPosition === 'top'
          ? { marginBottom: scaleTokens.spacing.xs }
          : iconPosition === 'left'
          ? { marginRight: scaleTokens.spacing.m }
          : { marginLeft: scaleTokens.spacing.m }
      }
    />
  );

  const renderText = (customStyle?: TextStyle) => {
    if (!title) return null;

    const finalStyle: TextStyle = customStyle
      ? {
          color: resolvedTextColor,
          fontSize:
            size === BUTTON_SIZE.LARGE
              ? scaleTokens.fontSize.l
              : size === BUTTON_SIZE.MEDIUM
                ? scaleTokens.fontSize.s
                : scaleTokens.fontSize.xs,
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
      iconGroup === 'MaterialIcons' ? MaterialIcons : MaterialIcons;

    if (iconPosition === 'top') {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          {renderIcon(IconComponent)}
          {renderText({ marginTop: scaleTokens.spacing.xs })}
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

export { BUTTON_SIZE, BUTTON_VARIANT, BORDER_RADIUS };
export type { ButtonSize, ButtonVariant, IconGroupType, IconPosition };
