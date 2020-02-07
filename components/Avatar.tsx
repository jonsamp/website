import React from "react";
import { View, Image } from "react-native";
import ItMe from "../assets/yellow.jpg";
import { useTheme, useFontSize } from "../hooks";

export function Avatar() {
  const theme = useTheme();
  const size = 68;
  return (
    <View
      style={{
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderRadius: 8,
        width: size,
        height: size,
        overflow: "hidden",
        borderWidth: 4,
        borderColor: theme.view.backgroundColor,
        marginBottom: useFontSize(1),
        marginRight: useFontSize(0.75)
      }}
    >
      <Image
        source={ItMe}
        style={{
          width: size - 8,
          height: size - 8
        }}
      />
    </View>
  );
}
