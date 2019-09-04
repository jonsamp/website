import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import Fruktur from './assets/fruktur-regular.ttf';
import App from './app/index';

function AppContainer() {
  useEffect(() => {
    Font.loadAsync({
      script: Fruktur,
    });
  });

  return <App />;
}

export default AppContainer;
