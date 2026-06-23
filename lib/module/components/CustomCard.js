import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { useTcbsColorStore } from '../store/themeStore';
import CustomText from './CustomText';
const CardBody = ({ title, description, trailingIcon, theme, scaleTokens, textStyle, }) => (React.createElement(React.Fragment, null,
    React.createElement(View, { style: [
            styles.accentTopRight,
            { backgroundColor: theme.warningColor },
        ], pointerEvents: "none" }),
    React.createElement(View, { style: [
            styles.accentBottomLeft,
            { backgroundColor: theme.warningColor },
        ], pointerEvents: "none" }),
    React.createElement(View, { style: styles.content },
        React.createElement(View, { style: { flex: 1 } },
            React.createElement(Text, { style: [
                    styles.title,
                    {
                        color: theme.textPrimary,
                        fontSize: scaleTokens.fontSize.l,
                        marginBottom: scaleTokens.spacing.m,
                    },
                    textStyle,
                ] }, title),
            description && (React.createElement(Text, { style: [
                    styles.description,
                    { color: theme.textSecondary, fontSize: scaleTokens.fontSize.s },
                ] }, description))),
        trailingIcon ? (React.createElement(Ionicons, { name: trailingIcon, size: scaleTokens.fontSize.xl, color: theme.textPrimary, style: [styles.icon, { marginLeft: scaleTokens.spacing.l }] })) : null)));
const CustomCard = ({ title, description, variant = 'default', style, textStyle, onPress, secureText = null, secureStrapColor = null, accessibilityLabel, accessibilityRole, accessible, trailingIcon = 'chevron-forward', }) => {
    const { themeColors: theme, scaleTokens } = useTcbsColorStore();
    const getCardStyle = () => {
        return variant === 'outlined'
            ? {
                backgroundColor: theme.cardBgColor,
                borderColor: theme.cardBorderColor,
                borderWidth: 1,
            }
            : { backgroundColor: theme.cardBgColor };
    };
    const cardContent = (React.createElement(React.Fragment, null,
        secureText && (React.createElement(View, { style: {
                position: 'absolute',
                zIndex: 3,
                left: -26,
                opacity: 1,
                top: scaleTokens.spacing.s + 1,
                transform: [{ rotate: '-50deg' }],
            } },
            React.createElement(View, { style: {
                    backgroundColor: secureStrapColor || theme.successColor,
                    paddingHorizontal: scaleTokens.spacing.xl + scaleTokens.spacing.xs,
                    paddingVertical: scaleTokens.spacing.s + scaleTokens.spacing.xs,
                    borderRadius: scaleTokens.radius.xs,
                    elevation: 2,
                } },
                React.createElement(CustomText, { variant: "caption", style: { color: '#FFFFFF', fontWeight: '600' } }, secureText)))),
        React.createElement(CardBody, { title: title, description: description, trailingIcon: trailingIcon, theme: theme, scaleTokens: scaleTokens, textStyle: textStyle })));
    return (React.createElement(View, { style: { width: '100%', marginBottom: scaleTokens.spacing.l } },
        React.createElement(View, { style: { overflow: 'hidden' } }, onPress ? (React.createElement(Pressable, { onPress: onPress, accessibilityLabel: accessibilityLabel, accessibilityRole: accessibilityRole, accessible: accessible, android_ripple: { color: `${theme.warningColor || '#F59E0B'}22` }, style: ({ pressed }) => [
                styles.card,
                {
                    padding: scaleTokens.spacing.xl,
                    borderRadius: scaleTokens.radius.s + 2,
                },
                getCardStyle(),
                style,
                pressed && { opacity: 0.85 },
            ] }, cardContent)) : (React.createElement(View, { style: [
                styles.card,
                {
                    padding: scaleTokens.spacing.xl,
                    borderRadius: scaleTokens.radius.s + 2,
                },
                getCardStyle(),
                style,
            ] }, cardContent)))));
};
const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {},
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
export { CustomCard as TcbsCard };
export default CustomCard;
