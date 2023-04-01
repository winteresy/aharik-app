import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomePage from './pages/HomePage';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nomerok_Mono': require('./assets/fonts/Nomerok_Mono.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <HomePage style={styles.text}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2E2E2E",
  },
  text: {
      fontFamily: 'NomerokMono',
  }
})

