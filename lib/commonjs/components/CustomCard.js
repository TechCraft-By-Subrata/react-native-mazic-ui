"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TcbsCard = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ionicons_1 = require("@react-native-vector-icons/ionicons");
const themeStore_1 = require("../store/themeStore");
const CustomText_1 = __importDefault(require("./CustomText"));
const CardBody = ({ title, description, trailingIcon, theme, textStyle, }) => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(react_native_1.View, { style: [
            styles.accentTopRight,
            { backgroundColor: theme.warningColor },
        ], pointerEvents: "none" }),
    react_1.default.createElement(react_native_1.View, { style: [
            styles.accentBottomLeft,
            { backgroundColor: theme.warningColor },
        ], pointerEvents: "none" }),
    react_1.default.createElement(react_native_1.View, { style: styles.content },
        react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            react_1.default.createElement(react_native_1.Text, { style: [styles.title, { color: theme.textPrimary }, textStyle] }, title),
            description && (react_1.default.createElement(react_native_1.Text, { style: [styles.description, { color: theme.textSecondary }] }, description))),
        trailingIcon ? (react_1.default.createElement(ionicons_1.Ionicons, { name: trailingIcon, size: 20, color: theme.textPrimary, style: styles.icon })) : null)));
const CustomCard = ({ title, description, variant = 'default', style, textStyle, onPress, secureText = null, secureStrapColor = null, accessibilityLabel, accessibilityRole, accessible, trailingIcon = 'chevron-forward', }) => {
    const { themeColors: theme } = (0, themeStore_1.useTcbsColorStore)();
    const getCardStyle = () => {
        return variant === 'outlined'
            ? {
                backgroundColor: theme.cardBgColor,
                borderColor: theme.cardBorderColor,
                borderWidth: 1,
            }
            : { backgroundColor: theme.cardBgColor };
    };
    const cardContent = (react_1.default.createElement(react_1.default.Fragment, null,
        secureText && (react_1.default.createElement(react_native_1.View, { style: {
                position: 'absolute',
                zIndex: 3,
                left: -26,
                opacity: 1,
                top: 5,
                transform: [{ rotate: '-50deg' }],
            } },
            react_1.default.createElement(react_native_1.View, { style: {
                    backgroundColor: secureStrapColor || theme.successColor,
                    paddingHorizontal: 20,
                    paddingVertical: 6,
                    borderRadius: 4,
                    elevation: 2,
                } },
                react_1.default.createElement(CustomText_1.default, { variant: "caption", style: { color: '#FFFFFF', fontWeight: '600' } }, secureText)))),
        react_1.default.createElement(CardBody, { title: title, description: description, trailingIcon: trailingIcon, theme: theme, textStyle: textStyle })));
    return (react_1.default.createElement(react_native_1.View, { style: { width: '100%', marginBottom: 12 } },
        react_1.default.createElement(react_native_1.View, { style: { overflow: 'hidden' } }, onPress ? (react_1.default.createElement(react_native_1.Pressable, { onPress: onPress, accessibilityLabel: accessibilityLabel, accessibilityRole: accessibilityRole, accessible: accessible, android_ripple: { color: `${theme.warningColor || '#F59E0B'}22` }, style: ({ pressed }) => [
                styles.card,
                getCardStyle(),
                style,
                pressed && { opacity: 0.85 },
            ] }, cardContent)) : (react_1.default.createElement(react_native_1.View, { style: [styles.card, getCardStyle(), style] }, cardContent)))));
};
exports.TcbsCard = CustomCard;
const styles = react_native_1.StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 12,
    },
    accentTopRight: {
        position: 'absolute',
        width: 88,
        height: 88,
        borderRadius: 44,
        right: -24,
        top: -24,
        opacity: 0.12,
        transform: [{ rotate: '20deg' }],
    },
    accentBottomLeft: {
        position: 'absolute',
        width: 140,
        height: 70,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        left: -40,
        bottom: -20,
        opacity: 0.08,
        transform: [{ rotate: '-10deg' }],
    },
});
exports.default = CustomCard;
