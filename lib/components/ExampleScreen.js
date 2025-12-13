import React from 'react';
import { View, Text } from 'react-native';
import { useTcbsColorStore } from '../store/themeStore';
const ExampleScreen = () => {
    const { colors, mode } = useTcbsColorStore();
    const screenBgColor = colors[mode].screenBgColor;
    return (React.createElement(View, { style: { flex: 1, backgroundColor: screenBgColor } },
        React.createElement(Text, { style: { color: colors[mode].btnTextColor } }, "This screen uses theme screenBgColor!")));
};
export default ExampleScreen;
