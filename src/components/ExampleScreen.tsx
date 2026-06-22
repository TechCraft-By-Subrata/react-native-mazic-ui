import React from 'react';
import { View, Text } from 'react-native';
import { useTcbsColorStore } from '../store/themeStore';

const ExampleScreen: React.FC = () => {
  const { themeColors } = useTcbsColorStore();
  const screenBgColor = themeColors.screenBgColor ?? '#FFFFFF';

  return (
    <View style={{ flex: 1, backgroundColor: screenBgColor }}>
      <Text style={{ color: themeColors.btnTextColor ?? '#111111' }}>
        This screen uses theme screenBgColor!
      </Text>
      {/* Add your other components here */}
    </View>
  );
};

export default ExampleScreen;
