"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeModal = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const themeStore_1 = require("../store/themeStore");
const TcbsButton_1 = require("./TcbsButton");
const ThemeModal = ({ visible, onClose }) => {
    const { tcbsTheme, setTcbsTheme, themeColors } = (0, themeStore_1.useTcbsColorStore)();
    // You can customize these colors or get them from your theme
    const colors = {
        menuCardBkgColor: themeColors.screenBgColor || '#fff',
        textDark: themeColors.modalTitleColor || '#222',
        textGray: '#888',
    };
    return (react_1.default.createElement(react_native_1.Modal, { transparent: true, animationType: "fade", visible: visible, onRequestClose: onClose },
        react_1.default.createElement(react_native_1.Pressable, { style: styles.modalOverlay, onPress: onClose },
            react_1.default.createElement(react_native_1.Pressable, { style: [styles.modalCard, { backgroundColor: themeColors.modalBgColor || "#00000080" }], onPress: () => { } },
                react_1.default.createElement(react_native_1.View, { style: styles.modalClose },
                    react_1.default.createElement(TcbsButton_1.TcbsButton, { onPress: onClose, iconName: "close", iconColor: colors.textDark, iconPosition: "left", variant: TcbsButton_1.BUTTON_VARIANT.NO_BORDER, iconSize: 22, accessibilityLabel: "Close", style: { padding: 8, marginRight: 0, minWidth: 0, minHeight: 0, alignSelf: 'flex-end' } })),
                react_1.default.createElement(react_native_1.Text, { style: [styles.modalTitle, { color: colors.textDark }] }, "Theme"),
                react_1.default.createElement(react_native_1.Text, { style: [styles.modalSubtitle, { color: colors.textDark }] }, "Choose how the app looks on this device."),
                react_1.default.createElement(react_native_1.View, { style: { marginTop: 18 } },
                    react_1.default.createElement(TcbsButton_1.TcbsButton, { title: "Light", onPress: () => setTcbsTheme('light'), style: { marginBottom: 8 }, variant: tcbsTheme === 'light' ? 'primary' : 'secondary', iconGroup: "Ionicons", iconName: "sunny", iconPosition: "left", textStyle: { flex: 1, textAlign: 'center' } }),
                    react_1.default.createElement(TcbsButton_1.TcbsButton, { title: "Dark", onPress: () => setTcbsTheme('dark'), style: { marginBottom: 8 }, variant: tcbsTheme === 'dark' ? 'primary' : 'secondary', iconGroup: "Ionicons", iconName: "moon", iconPosition: "left", textStyle: { flex: 1, textAlign: 'center' } }),
                    react_1.default.createElement(TcbsButton_1.TcbsButton, { title: "System (default)", onPress: () => setTcbsTheme('system'), variant: tcbsTheme === 'system' ? 'primary' : 'secondary', iconGroup: "Ionicons", iconName: "settings", iconPosition: "left", textStyle: { flex: 1, textAlign: 'center' } }))))));
};
exports.ThemeModal = ThemeModal;
const styles = react_native_1.StyleSheet.create({
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
exports.default = exports.ThemeModal;
