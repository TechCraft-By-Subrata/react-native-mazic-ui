import React from 'react';
import { View, Text } from 'react-native';
import { useTcbsColorStore } from '../store/themeStore';

const ExampleScreen: React.FC = () => {
  const { colors, mode } = useTcbsColorStore();
  const screenBgColor = colors[mode].screenBgColor;

  return (
    <View style={{ flex: 1, backgroundColor: screenBgColor }}>
      <Text style={{ color: colors[mode].btnTextColor }}>
        This screen uses theme screenBgColor!
      </Text>
      {/* Add your other components here */}
    </View>
  );
};

export default ExampleScreen;
