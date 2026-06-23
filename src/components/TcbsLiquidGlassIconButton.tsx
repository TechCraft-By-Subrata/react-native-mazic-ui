import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTcbsColorStore } from '../store/themeStore';
import applyOpacityToColor from '../utils/applyOpacityToColor';
import { TcbsLiquidGlassIconButtonProps } from './TcbsLiquidGlassButton.types';

export const TcbsLiquidGlassIconButton: React.FC<TcbsLiquidGlassIconButtonProps> = ({
  onPress,
  icon,
  label = '×',
  accessibilityLabel = 'Close',
  accessibilityHint,
  disabled = false,
  size = 46,
  style,
  textStyle,
  hitSlop,
  testID,
  accessibilityRole = 'button',
  accessibilityState,
}) => {
  const { themeColors: theme, scaleTokens } = useTcbsColorStore();
  const radius = Math.round(size / 2);

  const surfaceColor = applyOpacityToColor(theme?.cardBgColor || '#F4F8FF', 0.78);
  const borderColor = applyOpacityToColor(theme?.cardBorderColor || '#E7ECF3', 0.82);
  const sheenColor = applyOpacityToColor('#FFFFFF', 0.2);
  const depthColor = applyOpacityToColor(theme?.btnColor || theme?.tertiaryColor || '#6791E6', 0.16);
  const iconColor = theme?.textSecondary || '#5A6D87';

  return (
    <Pressable
      testID={testID}
      hitSlop={hitSlop}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={accessibilityState || { disabled }}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        {
          width: size,
          height: size,
          borderRadius: radius,
          backgroundColor: surfaceColor,
          borderColor,
          opacity: pressed ? 0.92 : 1,
        },
        style,
      ]}
    >
      <View
        pointerEvents="none"
        style={[
          styles.sheen,
          {
            left: Math.max(5, Math.floor(size * 0.13)),
            right: Math.max(5, Math.floor(size * 0.13)),
            top: Math.max(scaleTokens.spacing.xs + 1, Math.floor(size * 0.09)),
            height: Math.max(8, Math.floor(size * 0.24)),
            borderRadius: Math.max(6, Math.floor(radius * 0.4)),
            backgroundColor: sheenColor,
          },
        ]}
      />
      <View
        pointerEvents="none"
        style={[
          styles.depth,
          {
            height: Math.max(12, Math.floor(size * 0.3)),
            borderRadius: radius,
            backgroundColor: depthColor,
          },
        ]}
      />
      {icon ? (
        <View style={styles.iconWrap}>{icon}</View>
      ) : (
        <Text
          style={[
            styles.label,
            {
              color: iconColor,
              fontSize: scaleTokens.fontSize.xxl + scaleTokens.spacing.m + scaleTokens.spacing.xs,
              lineHeight: scaleTokens.fontSize.xxl + scaleTokens.spacing.l,
            },
            textStyle,
          ]}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: '#2B3D5C',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  sheen: {
    position: 'absolute',
    opacity: 0.24,
  },
  depth: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.4,
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: '700',
  },
});

export default TcbsLiquidGlassIconButton;
