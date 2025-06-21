import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Lora': require('./assets/fonts/Lora-Regular.ttf'),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return <View />;
  }

  return (
    <View>
      <Text style={{ fontFamily: 'Lora', fontSize: 24 }}>
        Hello, world!
      </Text>
    </View>
  );
};

export default App;