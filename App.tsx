import React from 'react';
import {SafeAreaView, ScrollView, Text, useColorScheme} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'red' : 'white',
  };
  console.log('kvak');
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text>kvakdsdkdkdkdkdk</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
