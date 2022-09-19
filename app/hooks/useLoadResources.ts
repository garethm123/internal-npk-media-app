import { useState, useEffect } from 'react';
import SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font';

export const useLoadResources = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          'montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
          'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf')
        });
        // Simulating loading extra shite
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch(err) {
        console.warn('Error on prepare: ', err);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync()
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return appIsReady
}