import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, Pressable, GestureResponderEvent } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { TcbsScaleTokens, ThemeColor, useTcbsColorStore } from '../store/themeStore';
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

const CardBody = ({
  title,
  description,
  trailingIcon,
  theme,
  scaleTokens,
  textStyle,
}: {
  title: string;
  description?: string;
  trailingIcon?: string;
  theme: ThemeColor;
  scaleTokens: TcbsScaleTokens;
  textStyle?: TextStyle;
}) => (
  <>
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
        <Text
          style={[
            styles.title,
            {
              color: theme.textPrimary,
              fontSize: scaleTokens.fontSize.l,
              marginBottom: scaleTokens.spacing.m,
            },
            textStyle,
          ]}
        >
          {title}
        </Text>
        {description && (
          <Text
            style={[
              styles.description,
              { color: theme.textSecondary, fontSize: scaleTokens.fontSize.s },
            ]}
          >
            {description}
          </Text>
        )}
      </View>

      {trailingIcon ? (
        <Ionicons
          name={trailingIcon as any}
          size={scaleTokens.fontSize.xl}
          color={theme.textPrimary}
          style={[styles.icon, { marginLeft: scaleTokens.spacing.l }]}
        />
      ) : null}
    </View>
  </>
);

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
  const { themeColors: theme, scaleTokens } = useTcbsColorStore();

  const getCardStyle = (): ViewStyle => {
    return variant === 'outlined'
      ? {
          backgroundColor: theme.cardBgColor,
          borderColor: theme.cardBorderColor,
          borderWidth: 1,
        }
      : { backgroundColor: theme.cardBgColor };
  };

  const cardContent = (
    <>
      {secureText && (
        <View
          style={{
            position: 'absolute',
            zIndex: 3,
            left: -26,
            opacity: 1,
            top: scaleTokens.spacing.s + 1,
            transform: [{ rotate: '-50deg' }],
          }}
        >
          <View
            style={{
              backgroundColor: secureStrapColor || theme.successColor,
              paddingHorizontal: scaleTokens.spacing.xl + scaleTokens.spacing.xs,
              paddingVertical: scaleTokens.spacing.s + scaleTokens.spacing.xs,
              borderRadius: scaleTokens.radius.xs,
              elevation: 2,
            }}
          >
            <CustomText variant="caption" style={{ color: '#FFFFFF', fontWeight: '600' }}>
              {secureText}
            </CustomText>
          </View>
        </View>
      )}

      <CardBody
        title={title}
        description={description}
        trailingIcon={trailingIcon}
        theme={theme}
        scaleTokens={scaleTokens}
        textStyle={textStyle}
      />
    </>
  );

  return (
    <View style={{ width: '100%', marginBottom: scaleTokens.spacing.l }}>
      <View style={{ overflow: 'hidden' }}>
        {onPress ? (
          <Pressable
            onPress={onPress}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole={accessibilityRole}
            accessible={accessible}
            android_ripple={{ color: `${theme.warningColor || '#F59E0B'}22` }}
            style={({ pressed }: { pressed: boolean }) => [
              styles.card,
              {
                padding: scaleTokens.spacing.xl,
                borderRadius: scaleTokens.radius.s + 2,
              },
              getCardStyle(),
              style,
              pressed && { opacity: 0.85 },
            ]}
          >
            {cardContent}
          </Pressable>
        ) : (
          <View
            style={[
              styles.card,
              {
                padding: scaleTokens.spacing.xl,
                borderRadius: scaleTokens.radius.s + 2,
              },
              getCardStyle(),
              style,
            ]}
          >
            {cardContent}
          </View>
        )}
      </View>
    </View>
  );
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
  description: {
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
