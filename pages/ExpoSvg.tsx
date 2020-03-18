import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {};

export default function ExpoSvg(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 54 }}>ExpoSvg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //...
  }
});
