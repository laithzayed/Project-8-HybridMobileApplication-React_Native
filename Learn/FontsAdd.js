import React, { useState } from 'react';
import Home from './screens/home'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
// import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/AkayaTelivigala-Regular.ttf'),
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

