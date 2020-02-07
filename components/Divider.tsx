import React from "react";
import { View } from "react-native";
import { useTheme, useFontSize } from "../hooks";

export function Divider() {
  const theme = useTheme();
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: theme.text.color,
        opacity: 0.15,
        marginVertical: useFontSize(1)
      }}
    />
  );
}
