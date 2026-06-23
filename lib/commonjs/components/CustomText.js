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
    const { themeColors: theme, scaleTokens } = (0, themeStore_1.useTcbsColorStore)();
    const variantStyle = {
        title: {
            fontSize: scaleTokens.fontSize.xxl,
            fontWeight: 'bold',
        },
        subtitle: {
            fontSize: scaleTokens.fontSize.xl,
            fontWeight: '600',
        },
        body: {
            fontSize: scaleTokens.fontSize.m,
        },
        caption: {
            fontSize: scaleTokens.fontSize.s,
            color: 'gray',
        },
        button: {
            fontSize: scaleTokens.fontSize.m,
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
    };
    return (react_1.default.createElement(react_native_1.Text, { style: [variantStyle[variant], { color: theme.textPrimary }, style] }, children));
};
exports.TcbsText = CustomText;
exports.default = CustomText;
