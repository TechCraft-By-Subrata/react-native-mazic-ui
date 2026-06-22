import React from 'react';
import { TextStyle } from 'react-native';
type TextVariant = 'title' | 'subtitle' | 'body' | 'caption' | 'button';
interface CustomTextProps {
    children: React.ReactNode;
    variant?: TextVariant;
    style?: TextStyle;
}
declare const CustomText: React.FC<CustomTextProps>;
export { CustomText as TcbsText };
export default CustomText;
