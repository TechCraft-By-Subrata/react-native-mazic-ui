import React from 'react';
import { Pressable, StyleSheet, Text, View, } from 'react-native';
import { useTcbsColorStore } from '../store/themeStore';
import applyOpacityToColor from '../utils/applyOpacityToColor';
export const TcbsLiquidGlassIconButton = ({ onPress, icon, label = '×', accessibilityLabel = 'Close', accessibilityHint, disabled = false, size = 46, style, textStyle, hitSlop, testID, accessibilityRole = 'button', accessibilityState, }) => {
    const { themeColors: theme } = useTcbsColorStore();
    const radius = Math.round(size / 2);
    const surfaceColor = applyOpacityToColor((theme === null || theme === void 0 ? void 0 : theme.cardBgColor) || '#F4F8FF', 0.78);
    const borderColor = applyOpacityToColor((theme === null || theme === void 0 ? void 0 : theme.cardBorderColor) || '#E7ECF3', 0.82);
    const sheenColor = applyOpacityToColor('#FFFFFF', 0.2);
    const depthColor = applyOpacityToColor((theme === null || theme === void 0 ? void 0 : theme.btnColor) || (theme === null || theme === void 0 ? void 0 : theme.tertiaryColor) || '#6791E6', 0.16);
    const iconColor = (theme === null || theme === void 0 ? void 0 : theme.textSecondary) || '#5A6D87';
    return (React.createElement(Pressable, { testID: testID, hitSlop: hitSlop, accessibilityRole: accessibilityRole, accessibilityLabel: accessibilityLabel, accessibilityHint: accessibilityHint, accessibilityState: accessibilityState || { disabled }, onPress: onPress, disabled: disabled, style: ({ pressed }) => [
            styles.base,
            {
                width: size,
                height: size,
                borderRadius: radius,
                backgroundColor: surfaceColor,
                borderColor,
                opacity: pressed ? 0.92 : 1,
            },
            style,
        ] },
        React.createElement(View, { pointerEvents: "none", style: [
                styles.sheen,
                {
                    left: Math.max(5, Math.floor(size * 0.13)),
                    right: Math.max(5, Math.floor(size * 0.13)),
                    top: Math.max(3, Math.floor(size * 0.09)),
                    height: Math.max(8, Math.floor(size * 0.24)),
                    borderRadius: Math.max(6, Math.floor(radius * 0.4)),
                    backgroundColor: sheenColor,
                },
            ] }),
        React.createElement(View, { pointerEvents: "none", style: [
                styles.depth,
                {
                    height: Math.max(12, Math.floor(size * 0.3)),
                    borderRadius: radius,
                    backgroundColor: depthColor,
                },
            ] }),
        icon ? (React.createElement(View, { style: styles.iconWrap }, icon)) : (React.createElement(Text, { style: [styles.label, { color: iconColor }, textStyle] }, label))));
};
const styles = StyleSheet.create({
    base: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        shadowColor: '#2B3D5C',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 4,
    },
    sheen: {
        position: 'absolute',
        opacity: 0.24,
    },
    depth: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.4,
    },
    iconWrap: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 34,
        lineHeight: 36,
        fontWeight: '700',
    },
});
export default TcbsLiquidGlassIconButton;
