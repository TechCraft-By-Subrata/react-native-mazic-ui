import React from 'react';
import {Text, TextStyle} from 'react-native';
import { useTcbsColorStore } from '../store/themeStore';

type TextVariant = 'title' | 'subtitle' | 'body' | 'caption' | 'button';

interface CustomTextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  style?: TextStyle;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  variant = 'body',
  style,
}) => {
  const { themeColors: theme, scaleTokens } = useTcbsColorStore();
  const variantStyle = {
    title: {
      fontSize: scaleTokens.fontSize.xxl,
      fontWeight: 'bold' as const,
    },
    subtitle: {
      fontSize: scaleTokens.fontSize.xl,
      fontWeight: '600' as const,
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
      fontWeight: 'bold' as const,
      textTransform: 'uppercase' as const,
    },
  };

  return (
    <Text style={[variantStyle[variant], {color: theme.textPrimary}, style]}>
      {children}
    </Text>
  );
};

export { CustomText as TcbsText };
export default CustomText;
