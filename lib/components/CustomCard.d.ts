import React from 'react';
import { ViewStyle, TextStyle, GestureResponderEvent } from 'react-native';
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
declare const CustomCard: React.FC<CustomCardProps>;
export { CustomCard as TcbsCard };
export default CustomCard;
