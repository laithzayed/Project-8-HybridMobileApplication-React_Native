import React, { useState } from 'react';
import Home from './screens/home'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
// import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/AkayaTelivigala-Regular.ttf'),
});


export default function App() {
  return (
    <Navigator />
  );
}


