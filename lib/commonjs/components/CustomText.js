"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TcbsText = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const themeStore_1 = require("../store/themeStore");
const CustomText = ({ children, variant = 'body', style, }) => {
    const { themeColors: theme } = (0, themeStore_1.useTcbsColorStore)();
    return (react_1.default.createElement(react_native_1.Text, { style: [styles[variant], { color: theme.textPrimary }, style] }, children));
};
exports.TcbsText = CustomText;
const styles = react_native_1.StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    body: {
        fontSize: 16,
    },
    caption: {
        fontSize: 14,
        color: 'gray',
    },
    button: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
exports.default = CustomText;
