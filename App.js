import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import * as Font from 'expo-font';
import HomePage from './pages/HomePage';

const CustomText = (props) => {
    const [fontLoaded, setFontLoaded] = useState(false);
  
    useEffect(() => {
      async function loadFont() {
      await Font.loadAsync({
        'Nomerok-Mono': require('./assets/fonts/Nomerok-Mono.otf'),
      });
  
      setFontLoaded(true);
    }
  
    loadFont();
    }, []);
  
    if (!fontLoaded) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <Text style={{ ...props.style, fontFamily: 'Nomerok-Mono' }}>
        {props.children}
      </Text>
    );
  };

  const App = () => {
    return (
      <View style={styles.container}>
        <CustomText style={styles.text}>
          <HomePage/>
        </CustomText>
      </View>
    );
  };
    

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2E2E2E",
    fontFamily: 'Nomerok-Mono',
  },
  text: {
      fontFamily: 'Nomerok-Mono',
      fontSize: 22,
  }
})

export default App;

