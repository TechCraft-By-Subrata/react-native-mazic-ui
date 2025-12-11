import React, { useMemo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
// import Lucide from 'react-native-vector-icons/Lucide';
import { BUTTON_SIZE, BUTTON_VARIANT, BORDER_RADIUS, } from './TcbsButton.types';
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
export const TcbsButton = ({ title, onPress, size = BUTTON_SIZE.LARGE, variant = BUTTON_VARIANT.PRIMARY, borderRadius, disabled = false, style, textStyle, iconName, iconGroup = 'MaterialDesignIcons', iconColor, iconSize, iconPosition = 'top', accessibilityLabel, accessibilityHint, accessibilityRole = 'button', accessibilityState, themeColor = {
    btnColor: '#007AFF',
    themeColor: '#007AFF',
    btnTextColor: '#FFFFFF',
    btnTxtColor: '#FFFFFF',
}, }) => {
    const colors = themeColor;
    const buttonStyle = useMemo(() => {
        const baseStyle = {
            height: HEIGHTS[size],
            borderRadius: borderRadius !== null && borderRadius !== void 0 ? borderRadius : BORDER_RADIUSES[size],
            alignItems: 'center',
            justifyContent: 'center',
            opacity: disabled ? 0.6 : 1,
            paddingHorizontal: 24,
        };
        if (variant === BUTTON_VARIANT.SECONDARY) {
            return Object.assign(Object.assign(Object.assign({}, baseStyle), { backgroundColor: '#fff', borderWidth: 2, borderColor: colors.btnColor || colors.themeColor }), style);
        }
        if (variant === BUTTON_VARIANT.NO_BORDER) {
            return Object.assign(Object.assign(Object.assign({}, baseStyle), { backgroundColor: '#fff' }), style);
        }
        // Primary variant (default)
        return Object.assign(Object.assign(Object.assign({}, baseStyle), { backgroundColor: colors.btnColor || colors.themeColor, shadowColor: colors.btnColor, shadowOpacity: 0.15, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 2 }), style);
    }, [size, variant, colors, style, disabled, borderRadius]);
    const themedTextStyle = useMemo(() => {
        const baseTextColor = variant === BUTTON_VARIANT.PRIMARY
            ? colors.btnTextColor || colors.btnTxtColor || '#fff'
            : colors.btnColor || colors.themeColor;
        return Object.assign({ color: baseTextColor, fontSize: FONT_SIZES[size], fontWeight: '700' }, textStyle);
    }, [size, variant, colors, textStyle]);
    const renderIcon = (IconComponent) => (React.createElement(IconComponent, { name: iconName, size: iconSize || FONT_SIZES[size] * 2, color: iconColor || themedTextStyle.color, style: iconPosition === 'top'
            ? { marginBottom: 2 }
            : iconPosition === 'left'
                ? { marginRight: 8 }
                : { marginLeft: 8 } }));
    const renderText = (customStyle) => {
        if (!title)
            return null;
        const finalStyle = customStyle
            ? Object.assign({ color: themedTextStyle.color, fontSize: FONT_SIZES[size] - 4, fontWeight: '500' }, customStyle) : themedTextStyle;
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
                                    MaterialDesignIcons;
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
// Export constants for use in consuming applications
export { BUTTON_SIZE, BUTTON_VARIANT, BORDER_RADIUS };
