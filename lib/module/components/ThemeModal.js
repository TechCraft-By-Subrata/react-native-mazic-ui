import React from 'react';
import { Modal, Pressable, View, Text, StyleSheet } from 'react-native';
import { useTcbsColorStore } from '../store/themeStore';
import { BUTTON_VARIANT, TcbsButton } from './TcbsButton';
export const ThemeModal = ({ visible, onClose }) => {
    const { tcbsTheme, setTcbsTheme, themeColors } = useTcbsColorStore();
    // You can customize these colors or get them from your theme
    const colors = {
        menuCardBkgColor: themeColors.screenBgColor || '#fff',
        textDark: themeColors.modalTitleColor || '#222',
        textGray: '#888',
    };
    return (React.createElement(Modal, { transparent: true, animationType: "fade", visible: visible, onRequestClose: onClose },
        React.createElement(Pressable, { style: styles.modalOverlay, onPress: onClose },
            React.createElement(Pressable, { style: [styles.modalCard, { backgroundColor: themeColors.modalBgColor || "#00000080" }], onPress: () => { } },
                React.createElement(View, { style: styles.modalClose },
                    React.createElement(TcbsButton, { onPress: onClose, iconName: "close", iconColor: colors.textDark, iconPosition: "left", variant: BUTTON_VARIANT.NO_BORDER, iconSize: 22, accessibilityLabel: "Close", style: { padding: 8, marginRight: 0, minWidth: 0, minHeight: 0, alignSelf: 'flex-end' } })),
                React.createElement(Text, { style: [styles.modalTitle, { color: colors.textDark }] }, "Theme"),
                React.createElement(Text, { style: [styles.modalSubtitle, { color: colors.textDark }] }, "Choose how the app looks on this device."),
                React.createElement(View, { style: { marginTop: 18 } },
                    React.createElement(TcbsButton, { title: "Light", onPress: () => setTcbsTheme('light'), style: { marginBottom: 8 }, variant: tcbsTheme === 'light' ? 'primary' : 'secondary', iconGroup: "Ionicons", iconName: "sunny", iconPosition: "left", textStyle: { flex: 1, textAlign: 'center' } }),
                    React.createElement(TcbsButton, { title: "Dark", onPress: () => setTcbsTheme('dark'), style: { marginBottom: 8 }, variant: tcbsTheme === 'dark' ? 'primary' : 'secondary', iconGroup: "Ionicons", iconName: "moon", iconPosition: "left", textStyle: { flex: 1, textAlign: 'center' } }),
                    React.createElement(TcbsButton, { title: "System (default)", onPress: () => setTcbsTheme('system'), variant: tcbsTheme === 'system' ? 'primary' : 'secondary', iconGroup: "Ionicons", iconName: "settings", iconPosition: "left", textStyle: { flex: 1, textAlign: 'center' } }))))));
};
const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalCard: {
        minWidth: 300,
        borderRadius: 16,
        padding: 24,
        alignItems: 'stretch',
        // shadowColor: '#000',
        // shadowOpacity: 0.15,
        shadowRadius: 12,
        // shadowOffset: { width: 0, height: 4 },
        // elevation: 4,
    },
    modalClose: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 2,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 8,
        marginBottom: 2,
        textAlign: 'center',
    },
    modalSubtitle: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 8,
        textAlign: 'center',
    },
});
export default ThemeModal;
