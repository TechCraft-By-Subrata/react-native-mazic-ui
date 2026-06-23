import React from 'react';
import { Text } from 'react-native';
import { useTcbsColorStore } from '../store/themeStore';
const CustomText = ({ children, variant = 'body', style, }) => {
    const { themeColors: theme, scaleTokens } = useTcbsColorStore();
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
    return (React.createElement(Text, { style: [variantStyle[variant], { color: theme.textPrimary }, style] }, children));
};
export { CustomText as TcbsText };
export default CustomText;
