import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
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
  const { themeColors: theme } = useTcbsColorStore();
  return (
    <Text style={[styles[variant], {color: theme.textPrimary}, style]}>
      {children}
    </Text>
  );
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
