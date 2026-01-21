import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, Pressable, GestureResponderEvent } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTcbsColorStore } from '../store/themeStore';
import CustomText from './CustomText';

type CardVariant = 'default' | 'outlined';

interface CustomCardProps {
  title: string;
  description?: string;
  variant?: CardVariant;
  style?: ViewStyle;
  textStyle?: TextStyle;
  secureText?: string | null;
  secureStrapColor?: string;
  accessibilityLabel?: string;
  accessibilityRole?: 'button' | 'link' | 'header' | 'image' | 'text' | 'adjustable' | 'search' | 'summary' | 'keyboardkey' | 'none';
  accessible?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  trailingIcon?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  variant = 'default',
  style,
  textStyle,
  onPress,
  secureText = null,
  secureStrapColor = null,
  accessibilityLabel,
  accessibilityRole,
  accessible,
  trailingIcon = 'chevron-forward',
}) => {
  const { themeColors: theme } = useTcbsColorStore();

  const getCardStyle = (): ViewStyle => {
    return variant === 'outlined'
      ? {
        backgroundColor: theme.cardBgColor,
        borderColor: theme.cardBorderColor,
        borderWidth: 1,
      }
      : { backgroundColor: theme.cardBgColor };
  };

  const Container: any = onPress ? Pressable : View;

  return (
    <View style={{ width: '100%', marginBottom: 12 }}>
      <View style={{ overflow: 'hidden' }}>
        {secureText && (
          <View style={{ position: 'absolute', zIndex: 3, left: -26, opacity: 1, top: 5, transform: [{ rotate: '-50deg' }] }}>
            <View style={{ backgroundColor: secureStrapColor || theme.successColor, paddingHorizontal: 20, paddingVertical: 6, borderRadius: 4, elevation: 2 }}>
              <CustomText variant="caption" style={{ color: theme.card, fontWeight: '600' }}>
                {secureText}
              </CustomText>
            </View>
          </View>)}
        <Container
          onPress={onPress}
          accessibilityLabel={accessibilityLabel}
          accessibilityRole={accessibilityRole}
          accessible={accessible}
          android_ripple={{ color: theme.warningColor + '22' }}
          style={({ pressed }: { pressed: boolean }) => [
            styles.card,
            getCardStyle(),
            style,
            pressed && { opacity: 0.85 },
          ]}>
          {/* Decorative accents */}
          <View
            style={[
              styles.accentTopRight,
              { backgroundColor: theme.warningColor },
            ]}
            pointerEvents="none"
          />
          <View
            style={[
              styles.accentBottomLeft,
              { backgroundColor: theme.warningColor },
            ]}
            pointerEvents="none"
          />

          <View style={styles.content}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.title, { color: theme.textPrimary }, textStyle]}>
                {title}
              </Text>
              {description && (
                <Text style={[styles.description, { color: theme.textSecondary }]}>
                  {description}
                </Text>
              )}
            </View>

            {onPress && (
              <Ionicons
                name={trailingIcon}
                size={20}
                color={theme.textPrimary}
                style={styles.icon}
              />
            )}
          </View>
        </Container>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
  },
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
