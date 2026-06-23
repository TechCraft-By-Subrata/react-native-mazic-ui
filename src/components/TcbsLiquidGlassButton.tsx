import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTcbsColorStore } from '../store/themeStore';
import applyOpacityToColor from '../utils/applyOpacityToColor';
import {
  TCBS_LIQUID_GLASS_BUTTON_SIZE,
  TcbsLiquidGlassButtonProps,
  TcbsLiquidGlassButtonSize,
} from './TcbsLiquidGlassButton.types';

const SIZE_STYLES: Record<TcbsLiquidGlassButtonSize, { height: number; radius: number; fontSize: number }> = {
  [TCBS_LIQUID_GLASS_BUTTON_SIZE.SMALL]: { height: 46, radius: 23, fontSize: 16 },
  [TCBS_LIQUID_GLASS_BUTTON_SIZE.MEDIUM]: { height: 56, radius: 28, fontSize: 18 },
  [TCBS_LIQUID_GLASS_BUTTON_SIZE.LARGE]: { height: 66, radius: 33, fontSize: 22 },
};

export const TcbsLiquidGlassButton: React.FC<TcbsLiquidGlassButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  icon,
  size = TCBS_LIQUID_GLASS_BUTTON_SIZE.MEDIUM,
  style,
  textStyle,
  contentStyle,
  testID,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = 'button',
  accessibilityState,
}) => {
  const { themeColors: theme } = useTcbsColorStore();
  const spec = SIZE_STYLES[size];
  const isDisabled = disabled || loading;

  const surfaceColor = applyOpacityToColor(theme?.cardBgColor || '#F4F8FF', 0.74);
  const borderColor = applyOpacityToColor(
    theme?.cardBorderColor || theme?.tabBarIconActiveColor || '#FFFFFF',
    0.72
  );
  const sheenColor = applyOpacityToColor('#FFFFFF', 0.2);
  const depthColor = applyOpacityToColor(theme?.btnColor || theme?.tertiaryColor || '#6791E6', 0.2);
  const textColor = theme?.textPrimary || theme?.btnColor || '#132742';

  return (
    <Pressable
      testID={testID}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint}
      accessibilityState={accessibilityState || { disabled: isDisabled, busy: loading }}
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        {
          minHeight: spec.height,
          borderRadius: spec.radius,
          backgroundColor: isDisabled ? applyOpacityToColor(surfaceColor, 0.72) : surfaceColor,
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
            backgroundColor: sheenColor,
            borderRadius: Math.max(8, Math.floor(spec.radius * 0.42)),
            left: 10,
            right: 10,
            top: 6,
            height: Math.max(10, Math.floor(spec.height * 0.28)),
          },
        ]}
      />
      <View
        pointerEvents="none"
        style={[
          styles.depth,
          {
            backgroundColor: depthColor,
            borderRadius: Math.max(8, Math.floor(spec.radius * 0.48)),
            left: 0,
            right: 0,
            bottom: 0,
            height: Math.max(12, Math.floor(spec.height * 0.34)),
          },
        ]}
      />

      <View style={[styles.content, contentStyle]}>
        {loading ? (
          <ActivityIndicator color={textColor} />
        ) : (
          <>
            {icon ? <View style={styles.iconWrap}>{icon}</View> : null}
            <Text
              numberOfLines={1}
              style={[
                styles.label,
                {
                  color: isDisabled ? applyOpacityToColor(textColor, 0.55) : textColor,
                  fontSize: spec.fontSize,
                },
                textStyle,
              ]}
            >
              {title}
            </Text>
          </>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    paddingHorizontal: 16,
    shadowColor: '#2B3D5C',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  sheen: {
    position: 'absolute',
    opacity: 0.34,
  },
  depth: {
    position: 'absolute',
    opacity: 0.38,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  label: {
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});

export default TcbsLiquidGlassButton;
