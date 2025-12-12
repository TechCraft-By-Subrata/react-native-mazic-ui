import React from 'react';
import { Modal, Pressable, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useTcbsColorStore } from '../store/themeStore';
import { BUTTON_VARIANT, TcbsButton } from './TcbsButton';

export interface ThemeModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ThemeModal: React.FC<ThemeModalProps> = ({ visible, onClose }) => {
  const { tcbsTheme, setTcbsTheme, themeColors } = useTcbsColorStore();
  // You can customize these colors or get them from your theme
  const colors = {
    menuCardBkgColor: themeColors.screenBgColor || '#fff',
    textDark: themeColors.btnTextColor || '#222',
    textGray: '#888',
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <Pressable style={[styles.modalCard, { backgroundColor: themeColors.modalBgColor || "#00000080" }]}
          onPress={() => {}} // Prevent closing when pressing inside card
        >
          <View style={styles.modalClose}>
            <TcbsButton
              onPress={onClose}
              iconName="close"
              iconColor={colors.textDark}
              iconPosition="left"
              variant={BUTTON_VARIANT.NO_BORDER}
              iconSize={22}
              accessibilityLabel="Close"
              style={{ padding: 8, marginRight: 0, minWidth: 0, minHeight: 0, alignSelf: 'flex-end' }}
            />
          </View>
          <Text style={[styles.modalTitle, { color: colors.textDark }]}>Theme</Text>
          <Text style={[styles.modalSubtitle, { color: colors.textGray }]}>Choose how the app looks on this device.</Text>
          <View style={{ marginTop: 18 }}>
            <TcbsButton
              title="Light"
              onPress={() => setTcbsTheme('light')}
              style={{ marginBottom: 8 }}
              variant={tcbsTheme === 'light' ? 'primary' : 'secondary'}
              iconGroup="Ionicons"
              iconName="sunny"
              iconPosition="left"
              textStyle={{ flex: 1, textAlign: 'center' }}
            />
            <TcbsButton
              title="Dark"
              onPress={() => setTcbsTheme('dark')}
              style={{ marginBottom: 8 }}
              variant={tcbsTheme === 'dark' ? 'primary' : 'secondary'}
              iconGroup="Ionicons"
              iconName="moon"
              iconPosition="left"
              textStyle={{ flex: 1, textAlign: 'center' }}
            />
            <TcbsButton
              title="System (default)"
              onPress={() => setTcbsTheme('system')}
              variant={tcbsTheme === 'system' ? 'primary' : 'secondary'}
              iconGroup="Ionicons"
              iconName="settings"
              iconPosition="left"
              textStyle={{ flex: 1, textAlign: 'center' }}
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
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
