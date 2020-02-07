import { useState, useEffect } from "react";
import { useDimensions } from "react-native-web-hooks";

export function useFontSize(multiple) {
  const {
    window: { width }
  } = useDimensions();

  let size = 20;
  if (width >= 1408) size = 24;
  else if (width >= 1216) size = 23;
  else if (width >= 1024) size = 22;
  else if (width >= 768) size = 20;
  return size * multiple;
}

export function useTheme() {
  const [isDark, setDark] = useState(false);
  const darkModeMatcher =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    setDark(darkModeMatcher.matches);
    darkModeMatcher.addListener(({ matches }) => setDark(matches));
  }, []);

  const colors = {
    white: "#FBFBFB",
    black: "#1C1B20"
  };

  const dark = {
    view: {
      backgroundColor: colors.black
    },
    text: {
      color: colors.white
    }
  };

  const light = {
    view: {
      backgroundColor: colors.white
    },
    text: {
      color: colors.black
    }
  };

  return isDark ? dark : light;
}
