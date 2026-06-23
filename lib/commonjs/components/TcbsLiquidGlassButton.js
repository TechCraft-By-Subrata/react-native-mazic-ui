"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TcbsLiquidGlassButton = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const themeStore_1 = require("../store/themeStore");
const applyOpacityToColor_1 = __importDefault(require("../utils/applyOpacityToColor"));
const TcbsLiquidGlassButton_types_1 = require("./TcbsLiquidGlassButton.types");
const SIZE_STYLES = {
    [TcbsLiquidGlassButton_types_1.TCBS_LIQUID_GLASS_BUTTON_SIZE.SMALL]: { height: 46, radius: 23, fontSize: 16 },
    [TcbsLiquidGlassButton_types_1.TCBS_LIQUID_GLASS_BUTTON_SIZE.MEDIUM]: { height: 56, radius: 28, fontSize: 18 },
    [TcbsLiquidGlassButton_types_1.TCBS_LIQUID_GLASS_BUTTON_SIZE.LARGE]: { height: 66, radius: 33, fontSize: 22 },
};
const TcbsLiquidGlassButton = ({ title, onPress, disabled = false, loading = false, icon, size = TcbsLiquidGlassButton_types_1.TCBS_LIQUID_GLASS_BUTTON_SIZE.MEDIUM, style, textStyle, contentStyle, testID, accessibilityLabel, accessibilityHint, accessibilityRole = 'button', accessibilityState, }) => {
    const { themeColors: theme } = (0, themeStore_1.useTcbsColorStore)();
    const spec = SIZE_STYLES[size];
    const isDisabled = disabled || loading;
    const surfaceColor = (0, applyOpacityToColor_1.default)((theme === null || theme === void 0 ? void 0 : theme.cardBgColor) || '#F4F8FF', 0.74);
    const borderColor = (0, applyOpacityToColor_1.default)((theme === null || theme === void 0 ? void 0 : theme.cardBorderColor) || (theme === null || theme === void 0 ? void 0 : theme.tabBarIconActiveColor) || '#FFFFFF', 0.72);
    const sheenColor = (0, applyOpacityToColor_1.default)('#FFFFFF', 0.2);
    const depthColor = (0, applyOpacityToColor_1.default)((theme === null || theme === void 0 ? void 0 : theme.btnColor) || (theme === null || theme === void 0 ? void 0 : theme.tertiaryColor) || '#6791E6', 0.2);
    const textColor = (theme === null || theme === void 0 ? void 0 : theme.textPrimary) || (theme === null || theme === void 0 ? void 0 : theme.btnColor) || '#132742';
    return (react_1.default.createElement(react_native_1.Pressable, { testID: testID, accessibilityRole: accessibilityRole, accessibilityLabel: accessibilityLabel || title, accessibilityHint: accessibilityHint, accessibilityState: accessibilityState || { disabled: isDisabled, busy: loading }, onPress: onPress, disabled: isDisabled, style: ({ pressed }) => [
            styles.base,
            {
                minHeight: spec.height,
                borderRadius: spec.radius,
                backgroundColor: isDisabled ? (0, applyOpacityToColor_1.default)(surfaceColor, 0.72) : surfaceColor,
                borderColor,
                opacity: pressed ? 0.92 : 1,
            },
            style,
        ] },
        react_1.default.createElement(react_native_1.View, { pointerEvents: "none", style: [
                styles.sheen,
                {
                    backgroundColor: sheenColor,
                    borderRadius: Math.max(8, Math.floor(spec.radius * 0.42)),
                    left: 10,
                    right: 10,
                    top: 6,
                    height: Math.max(10, Math.floor(spec.height * 0.28)),
                },
            ] }),
        react_1.default.createElement(react_native_1.View, { pointerEvents: "none", style: [
                styles.depth,
                {
                    backgroundColor: depthColor,
                    borderRadius: Math.max(8, Math.floor(spec.radius * 0.48)),
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: Math.max(12, Math.floor(spec.height * 0.34)),
                },
            ] }),
        react_1.default.createElement(react_native_1.View, { style: [styles.content, contentStyle] }, loading ? (react_1.default.createElement(react_native_1.ActivityIndicator, { color: textColor })) : (react_1.default.createElement(react_1.default.Fragment, null,
            icon ? react_1.default.createElement(react_native_1.View, { style: styles.iconWrap }, icon) : null,
            react_1.default.createElement(react_native_1.Text, { numberOfLines: 1, style: [
                    styles.label,
                    {
                        color: isDisabled ? (0, applyOpacityToColor_1.default)(textColor, 0.55) : textColor,
                        fontSize: spec.fontSize,
                    },
                    textStyle,
                ] }, title))))));
};
exports.TcbsLiquidGlassButton = TcbsLiquidGlassButton;
const styles = react_native_1.StyleSheet.create({
    base: {
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        paddingHorizontal: 16,
        shadowColor: '#2B3D5C',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
        elevation: 8,
    },
    sheen: {
        position: 'absolute',
        opacity: 0.34,
    },
    depth: {
        position: 'absolute',
        opacity: 0.38,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    label: {
        fontWeight: '700',
        letterSpacing: 0.2,
    },
});
exports.default = exports.TcbsLiquidGlassButton;
