import React, { useMemo } from 'react';
import { Appearance, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@react-native-vector-icons/ant-design';
import { Feather } from '@react-native-vector-icons/feather';
import { FontAwesome } from '@react-native-vector-icons/fontawesome';
import { Foundation } from '@react-native-vector-icons/foundation';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { Octicons } from '@react-native-vector-icons/octicons';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { BUTTON_SIZE, BUTTON_VARIANT, BORDER_RADIUS, } from './TcbsButton.types';
import { useTcbsColorStore } from '../store/themeStore';
const HEIGHTS = {
    [BUTTON_SIZE.LARGE]: 56,
    [BUTTON_SIZE.MEDIUM]: 40,
    [BUTTON_SIZE.SMALL]: 32,
};
const FONT_SIZES = {
    [BUTTON_SIZE.LARGE]: 20,
    [BUTTON_SIZE.MEDIUM]: 16,
    [BUTTON_SIZE.SMALL]: 14,
};
// Support for BORDER_RADIUS.NONE and BORDER_RADIUS.FULL (50%)
const BORDER_RADIUSES = {
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
export const TcbsButton = ({ title, onPress, size = BUTTON_SIZE.LARGE, variant = BUTTON_VARIANT.PRIMARY, borderRadius, disabled = false, style, textStyle, iconName, iconGroup = 'MaterialIcons', iconColor, iconSize, iconPosition = 'top', accessibilityLabel, accessibilityHint, accessibilityRole = 'button', accessibilityState, }) => {
    var _a, _b, _c, _d, _e, _f;
    // Use themeColors from store if not provided as prop
    const { themeColors, tcbsTheme } = useTcbsColorStore();
    const effectiveThemeColor = themeColors;
    // Normalize colors: if only one color is set, use it for all
    const normalizedColors = {
        btnColor: (_b = (_a = effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.btnColor) !== null && _a !== void 0 ? _a : effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.themeColor) !== null && _b !== void 0 ? _b : '#007AFF',
        btnBorderColor: (_d = (_c = effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.btnBorderColor) !== null && _c !== void 0 ? _c : effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.btnColor) !== null && _d !== void 0 ? _d : '#007AFF',
        btnIconColor: effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.btnIconColor,
        btnTextColor: effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.btnTextColor,
        themeColor: (_f = (_e = effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.themeColor) !== null && _e !== void 0 ? _e : effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.btnColor) !== null && _f !== void 0 ? _f : '#007AFF',
    };
    const buttonStyle = useMemo(() => {
        const height = HEIGHTS[size];
        let computedBorderRadius;
        if (borderRadius === BORDER_RADIUS.NONE) {
            computedBorderRadius = 0;
        }
        else if (borderRadius === BORDER_RADIUS.FULL) {
            computedBorderRadius = height / 2;
        }
        else if (borderRadius !== undefined) {
            computedBorderRadius = borderRadius;
        }
        else {
            computedBorderRadius = BORDER_RADIUSES[size];
        }
        const baseStyle = {
            height,
            borderRadius: computedBorderRadius,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: disabled ? 0.6 : 1,
            paddingHorizontal: 24,
        };
        if (variant === BUTTON_VARIANT.SECONDARY) {
            return Object.assign(Object.assign(Object.assign({}, baseStyle), { backgroundColor: '#fff', borderWidth: 2, borderColor: normalizedColors.btnBorderColor }), (StyleSheet.flatten(style) || {}));
        }
        if (variant === BUTTON_VARIANT.NO_BORDER) {
            return Object.assign(Object.assign(Object.assign({}, baseStyle), { backgroundColor: 'transparent' }), (StyleSheet.flatten(style) || {}));
        }
        // Primary variant (default)
        return Object.assign(Object.assign(Object.assign({}, baseStyle), { backgroundColor: normalizedColors.btnColor, shadowColor: normalizedColors.btnColor, shadowOpacity: 0.15, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 2 }), (StyleSheet.flatten(style) || {}));
    }, [size, variant, normalizedColors, style, disabled, borderRadius]);
    const resolvedTextColor = variant === BUTTON_VARIANT.PRIMARY
        ? normalizedColors.btnTextColor || '#FFFFFF'
        : variant === BUTTON_VARIANT.NO_BORDER
            ? ((tcbsTheme === 'system' ? (Appearance.getColorScheme() || 'light') : tcbsTheme) === 'dark'
                ? normalizedColors.btnTextColor || '#FFFFFF'
                : normalizedColors.btnColor || '#007AFF')
            : normalizedColors.btnColor || '#FFFFFF';
    const themedTextStyle = useMemo(() => {
        return Object.assign({ color: resolvedTextColor, fontSize: FONT_SIZES[size], fontWeight: '700' }, (StyleSheet.flatten(textStyle) || {}));
    }, [size, resolvedTextColor, textStyle]);
    const renderIcon = (IconComponent) => (React.createElement(IconComponent, { name: iconName, size: iconSize || FONT_SIZES[size] * 2, color: iconColor || resolvedTextColor, style: iconPosition === 'top'
            ? { marginBottom: 2 }
            : iconPosition === 'left'
                ? { marginRight: 8 }
                : { marginLeft: 8 } }));
    const renderText = (customStyle) => {
        if (!title)
            return null;
        const finalStyle = customStyle
            ? Object.assign({ color: resolvedTextColor, fontSize: FONT_SIZES[size] - 4, fontWeight: '500' }, customStyle) : themedTextStyle;
        return React.createElement(Text, { style: finalStyle }, title);
    };
    const renderContent = () => {
        // If no icon, just render text
        if (!iconName) {
            return renderText();
        }
        // Map iconGroup string to actual component
        const IconComponent = iconGroup === 'AntDesign' ? AntDesign :
            iconGroup === 'Feather' ? Feather :
                iconGroup === 'FontAwesome' ? FontAwesome :
                    iconGroup === 'Foundation' ? Foundation :
                        iconGroup === 'Ionicons' ? Ionicons :
                            iconGroup === 'MaterialDesignIcons' ? MaterialDesignIcons :
                                iconGroup === 'Octicons' ? Octicons :
                                    // iconGroup === 'Lucide' ? Lucide : // Uncomment if Lucide is available
                                    iconGroup === 'MaterialIcons' ? MaterialIcons : MaterialIcons;
        if (iconPosition === 'top') {
            return (React.createElement(View, { style: { alignItems: 'center', justifyContent: 'center' } },
                renderIcon(IconComponent),
                renderText({ marginTop: 2 })));
        }
        const flexDirection = iconPosition === 'left' ? 'row' : 'row-reverse';
        return (React.createElement(View, { style: {
                flexDirection,
                alignItems: 'center',
                justifyContent: 'center',
            } },
            renderIcon(IconComponent),
            renderText()));
    };
    return (React.createElement(TouchableOpacity, { onPress: onPress, disabled: disabled, style: buttonStyle, accessibilityLabel: accessibilityLabel || title, accessibilityHint: accessibilityHint, accessibilityRole: accessibilityRole, accessibilityState: accessibilityState || { disabled } }, renderContent()));
};
export { BUTTON_SIZE, BUTTON_VARIANT, BORDER_RADIUS };
