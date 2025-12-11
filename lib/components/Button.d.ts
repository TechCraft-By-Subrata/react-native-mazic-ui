import React from 'react';
import { GestureResponderEvent } from 'react-native';
type ButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
};
export declare const Button: React.FC<ButtonProps>;
export {};
