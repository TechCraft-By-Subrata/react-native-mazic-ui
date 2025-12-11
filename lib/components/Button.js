import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export const Button = ({ title, onPress }) => (React.createElement(TouchableOpacity, { style: styles.button, onPress: onPress },
    React.createElement(Text, { style: styles.text },
        "TCBS 1: ",
        title)));
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
