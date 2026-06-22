"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BORDER_RADIUS = exports.BUTTON_VARIANT = exports.BUTTON_SIZE = exports.TcbsButton = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const ant_design_1 = require("@react-native-vector-icons/ant-design");
const feather_1 = require("@react-native-vector-icons/feather");
const fontawesome_1 = require("@react-native-vector-icons/fontawesome");
const foundation_1 = require("@react-native-vector-icons/foundation");
const ionicons_1 = require("@react-native-vector-icons/ionicons");
const material_design_icons_1 = require("@react-native-vector-icons/material-design-icons");
const octicons_1 = require("@react-native-vector-icons/octicons");
const material_icons_1 = require("@react-native-vector-icons/material-icons");
const TcbsButton_types_1 = require("./TcbsButton.types");
Object.defineProperty(exports, "BUTTON_SIZE", { enumerable: true, get: function () { return TcbsButton_types_1.BUTTON_SIZE; } });
Object.defineProperty(exports, "BUTTON_VARIANT", { enumerable: true, get: function () { return TcbsButton_types_1.BUTTON_VARIANT; } });
Object.defineProperty(exports, "BORDER_RADIUS", { enumerable: true, get: function () { return TcbsButton_types_1.BORDER_RADIUS; } });
const themeStore_1 = require("../store/themeStore");
const HEIGHTS = {
    [TcbsButton_types_1.BUTTON_SIZE.LARGE]: 56,
    [TcbsButton_types_1.BUTTON_SIZE.MEDIUM]: 40,
    [TcbsButton_types_1.BUTTON_SIZE.SMALL]: 32,
};
const FONT_SIZES = {
    [TcbsButton_types_1.BUTTON_SIZE.LARGE]: 20,
    [TcbsButton_types_1.BUTTON_SIZE.MEDIUM]: 16,
    [TcbsButton_types_1.BUTTON_SIZE.SMALL]: 14,
};
// Support for BORDER_RADIUS.NONE and BORDER_RADIUS.FULL (50%)
const BORDER_RADIUSES = {
    [TcbsButton_types_1.BUTTON_SIZE.LARGE]: TcbsButton_types_1.BORDER_RADIUS.MEDIUM,
    [TcbsButton_types_1.BUTTON_SIZE.MEDIUM]: TcbsButton_types_1.BORDER_RADIUS.SMALL,
    [TcbsButton_types_1.BUTTON_SIZE.SMALL]: TcbsButton_types_1.BORDER_RADIUS.SMALL,
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
const TcbsButton = ({ title, onPress, size = TcbsButton_types_1.BUTTON_SIZE.LARGE, variant = TcbsButton_types_1.BUTTON_VARIANT.PRIMARY, borderRadius, disabled = false, style, textStyle, iconName, iconGroup = 'MaterialIcons', iconColor, iconSize, iconPosition = 'top', accessibilityLabel, accessibilityHint, accessibilityRole = 'button', accessibilityState, }) => {
    var _a, _b, _c, _d, _e, _f;
    // Use themeColors from store if not provided as prop
    const { themeColors, tcbsTheme } = (0, themeStore_1.useTcbsColorStore)();
    const effectiveThemeColor = themeColors;
    // Normalize colors: if only one color is set, use it for all
    const normalizedColors = {
        btnColor: (_b = (_a = effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.btnColor) !== null && _a !== void 0 ? _a : effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.themeColor) !== null && _b !== void 0 ? _b : '#007AFF',
        btnBorderColor: (_d = (_c = effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.btnBorderColor) !== null && _c !== void 0 ? _c : effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.btnColor) !== null && _d !== void 0 ? _d : '#007AFF',
        btnIconColor: effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.btnIconColor,
        btnTextColor: effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.btnTextColor,
        themeColor: (_f = (_e = effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.themeColor) !== null && _e !== void 0 ? _e : effectiveThemeColor === null || effectiveThemeColor === void 0 ? void 0 : effectiveThemeColor.btnColor) !== null && _f !== void 0 ? _f : '#007AFF',
    };
    const buttonStyle = (0, react_1.useMemo)(() => {
        const height = HEIGHTS[size];
        let computedBorderRadius;
        if (borderRadius === TcbsButton_types_1.BORDER_RADIUS.NONE) {
            computedBorderRadius = 0;
        }
        else if (borderRadius === TcbsButton_types_1.BORDER_RADIUS.FULL) {
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
        if (variant === TcbsButton_types_1.BUTTON_VARIANT.SECONDARY) {
            return Object.assign(Object.assign(Object.assign({}, baseStyle), { backgroundColor: '#fff', borderWidth: 2, borderColor: normalizedColors.btnBorderColor }), (react_native_1.StyleSheet.flatten(style) || {}));
        }
        if (variant === TcbsButton_types_1.BUTTON_VARIANT.NO_BORDER) {
            return Object.assign(Object.assign(Object.assign({}, baseStyle), { backgroundColor: 'transparent' }), (react_native_1.StyleSheet.flatten(style) || {}));
        }
        // Primary variant (default)
        return Object.assign(Object.assign(Object.assign({}, baseStyle), { backgroundColor: normalizedColors.btnColor, shadowColor: normalizedColors.btnColor, shadowOpacity: 0.15, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 2 }), (react_native_1.StyleSheet.flatten(style) || {}));
    }, [size, variant, normalizedColors, style, disabled, borderRadius]);
    const resolvedTextColor = variant === TcbsButton_types_1.BUTTON_VARIANT.PRIMARY
        ? normalizedColors.btnTextColor || '#FFFFFF'
        : variant === TcbsButton_types_1.BUTTON_VARIANT.NO_BORDER
            ? ((tcbsTheme === 'system' ? (react_native_1.Appearance.getColorScheme() || 'light') : tcbsTheme) === 'dark'
                ? normalizedColors.btnTextColor || '#FFFFFF'
                : normalizedColors.btnColor || '#007AFF')
            : normalizedColors.btnColor || '#FFFFFF';
    const themedTextStyle = (0, react_1.useMemo)(() => {
        return Object.assign({ color: resolvedTextColor, fontSize: FONT_SIZES[size], fontWeight: '700' }, (react_native_1.StyleSheet.flatten(textStyle) || {}));
    }, [size, resolvedTextColor, textStyle]);
    const renderIcon = (IconComponent) => (react_1.default.createElement(IconComponent, { name: iconName, size: iconSize || FONT_SIZES[size] * 2, color: iconColor || resolvedTextColor, style: iconPosition === 'top'
            ? { marginBottom: 2 }
            : iconPosition === 'left'
                ? { marginRight: 8 }
                : { marginLeft: 8 } }));
    const renderText = (customStyle) => {
        if (!title)
            return null;
        const finalStyle = customStyle
            ? Object.assign({ color: resolvedTextColor, fontSize: FONT_SIZES[size] - 4, fontWeight: '500' }, customStyle) : themedTextStyle;
        return react_1.default.createElement(react_native_1.Text, { style: finalStyle }, title);
    };
    const renderContent = () => {
        // If no icon, just render text
        if (!iconName) {
            return renderText();
        }
        // Map iconGroup string to actual component
        const IconComponent = iconGroup === 'AntDesign' ? ant_design_1.AntDesign :
            iconGroup === 'Feather' ? feather_1.Feather :
                iconGroup === 'FontAwesome' ? fontawesome_1.FontAwesome :
                    iconGroup === 'Foundation' ? foundation_1.Foundation :
                        iconGroup === 'Ionicons' ? ionicons_1.Ionicons :
                            iconGroup === 'MaterialDesignIcons' ? material_design_icons_1.MaterialDesignIcons :
                                iconGroup === 'Octicons' ? octicons_1.Octicons :
                                    // iconGroup === 'Lucide' ? Lucide : // Uncomment if Lucide is available
                                    iconGroup === 'MaterialIcons' ? material_icons_1.MaterialIcons : material_icons_1.MaterialIcons;
        if (iconPosition === 'top') {
            return (react_1.default.createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } },
                renderIcon(IconComponent),
                renderText({ marginTop: 2 })));
        }
        const flexDirection = iconPosition === 'left' ? 'row' : 'row-reverse';
        return (react_1.default.createElement(react_native_1.View, { style: {
                flexDirection,
                alignItems: 'center',
                justifyContent: 'center',
            } },
            renderIcon(IconComponent),
            renderText()));
    };
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onPress, disabled: disabled, style: buttonStyle, accessibilityLabel: accessibilityLabel || title, accessibilityHint: accessibilityHint, accessibilityRole: accessibilityRole, accessibilityState: accessibilityState || { disabled } }, renderContent()));
};
exports.TcbsButton = TcbsButton;
