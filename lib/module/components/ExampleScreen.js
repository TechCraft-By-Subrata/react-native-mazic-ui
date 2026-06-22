import React from 'react';
import { View, Text } from 'react-native';
import { useTcbsColorStore } from '../store/themeStore';
const ExampleScreen = () => {
    var _a, _b;
    const { themeColors } = useTcbsColorStore();
    const screenBgColor = (_a = themeColors.screenBgColor) !== null && _a !== void 0 ? _a : '#FFFFFF';
    return (React.createElement(View, { style: { flex: 1, backgroundColor: screenBgColor } },
        React.createElement(Text, { style: { color: (_b = themeColors.btnTextColor) !== null && _b !== void 0 ? _b : '#111111' } }, "This screen uses theme screenBgColor!")));
};
export default ExampleScreen;
