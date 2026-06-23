"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TcbsLiquidGlassIconButton = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const themeStore_1 = require("../store/themeStore");
const applyOpacityToColor_1 = __importDefault(require("../utils/applyOpacityToColor"));
const TcbsLiquidGlassIconButton = ({ onPress, icon, label = '×', accessibilityLabel = 'Close', accessibilityHint, disabled = false, size = 46, style, textStyle, hitSlop, testID, accessibilityRole = 'button', accessibilityState, }) => {
    const { themeColors: theme, scaleTokens } = (0, themeStore_1.useTcbsColorStore)();
    const radius = Math.round(size / 2);
    const surfaceColor = (0, applyOpacityToColor_1.default)((theme === null || theme === void 0 ? void 0 : theme.cardBgColor) || '#F4F8FF', 0.78);
    const borderColor = (0, applyOpacityToColor_1.default)((theme === null || theme === void 0 ? void 0 : theme.cardBorderColor) || '#E7ECF3', 0.82);
    const sheenColor = (0, applyOpacityToColor_1.default)('#FFFFFF', 0.2);
    const depthColor = (0, applyOpacityToColor_1.default)((theme === null || theme === void 0 ? void 0 : theme.btnColor) || (theme === null || theme === void 0 ? void 0 : theme.tertiaryColor) || '#6791E6', 0.16);
    const iconColor = (theme === null || theme === void 0 ? void 0 : theme.textSecondary) || '#5A6D87';
    return (react_1.default.createElement(react_native_1.Pressable, { testID: testID, hitSlop: hitSlop, accessibilityRole: accessibilityRole, accessibilityLabel: accessibilityLabel, accessibilityHint: accessibilityHint, accessibilityState: accessibilityState || { disabled }, onPress: onPress, disabled: disabled, style: ({ pressed }) => [
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
        react_1.default.createElement(react_native_1.View, { pointerEvents: "none", style: [
                styles.sheen,
                {
                    left: Math.max(5, Math.floor(size * 0.13)),
                    right: Math.max(5, Math.floor(size * 0.13)),
                    top: Math.max(scaleTokens.spacing.xs + 1, Math.floor(size * 0.09)),
                    height: Math.max(8, Math.floor(size * 0.24)),
                    borderRadius: Math.max(6, Math.floor(radius * 0.4)),
                    backgroundColor: sheenColor,
                },
            ] }),
        react_1.default.createElement(react_native_1.View, { pointerEvents: "none", style: [
                styles.depth,
                {
                    height: Math.max(12, Math.floor(size * 0.3)),
                    borderRadius: radius,
                    backgroundColor: depthColor,
                },
            ] }),
        icon ? (react_1.default.createElement(react_native_1.View, { style: styles.iconWrap }, icon)) : (react_1.default.createElement(react_native_1.Text, { style: [
                styles.label,
                {
                    color: iconColor,
                    fontSize: scaleTokens.fontSize.xxl + scaleTokens.spacing.m + scaleTokens.spacing.xs,
                    lineHeight: scaleTokens.fontSize.xxl + scaleTokens.spacing.l,
                },
                textStyle,
            ] }, label))));
};
exports.TcbsLiquidGlassIconButton = TcbsLiquidGlassIconButton;
const styles = react_native_1.StyleSheet.create({
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
        fontWeight: '700',
    },
});
exports.default = exports.TcbsLiquidGlassIconButton;
