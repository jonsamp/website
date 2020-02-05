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

  const dark = {
    view: {
      backgroundColor: "rgba(0,0,0,0.9)"
    },
    text: {
      color: "rgba(255,255,255,0.95)"
    }
  };

  const light = {
    view: {
      backgroundColor: "rgba(255,255,255,0.95)"
    },
    text: {
      color: "rgba(0,0,0,0.9)"
    }
  };

  return isDark ? dark : light;
}
