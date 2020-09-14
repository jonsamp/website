import React, { useEffect } from "react";
import * as Font from "expo-font";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ExpoSvg from "./pages/ExpoSvg";

export default function App() {
  useEffect(function didMount() {
    Font.loadAsync({
      Header: require("./assets/WorkSans-Black.otf"),
      Body: require("./assets/sentinel-book.otf"),
      BodyItalic: require("./assets/sentinel-bookItalic.otf"),
      Code: require("./assets/OperatorMono-Book.otf"),
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/react-native-expo-svg'>
          <ExpoSvg />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
