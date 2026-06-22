import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTcbsColorStore } from '../store/themeStore';
const CustomText = ({ children, variant = 'body', style, }) => {
    const { themeColors: theme } = useTcbsColorStore();
    return (React.createElement(Text, { style: [styles[variant], { color: theme.textPrimary }, style] }, children));
};
const styles = StyleSheet.create({
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
export { CustomText as TcbsText };
export default CustomText;
