"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const themeStore_1 = require("../store/themeStore");
const ExampleScreen = () => {
    var _a, _b;
    const { themeColors } = (0, themeStore_1.useTcbsColorStore)();
    const screenBgColor = (_a = themeColors.screenBgColor) !== null && _a !== void 0 ? _a : '#FFFFFF';
    return (react_1.default.createElement(react_native_1.View, { style: { flex: 1, backgroundColor: screenBgColor } },
        react_1.default.createElement(react_native_1.Text, { style: { color: (_b = themeColors.btnTextColor) !== null && _b !== void 0 ? _b : '#111111' } }, "This screen uses theme screenBgColor!")));
};
exports.default = ExampleScreen;
