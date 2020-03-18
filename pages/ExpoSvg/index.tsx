import React, { useState } from "react";
import { Text, ScrollView, View, StyleSheet, TextInput } from "react-native";
import { convertSvg } from "react-native-expo-svg/src/convert";
import { H2 } from "../../components/Type";
import { useTheme } from "../../hooks";
import LogoIcon from "./LogoIcon";

export default function ExpoSvg() {
  const [result, setResult] = useState({ RNSvg: null, usedElements: [] });
  const [error, setError] = useState("");
  const theme = useTheme();

  function convertToExpoSvg(svg) {
    const test = async () => {
      setResult({ RNSvg: null, usedElements: [] });
      setError("");
      try {
        const result: {
          RNSvg: string;
          usedElements: string[];
        } = await convertSvg(svg);
        console.log(result);
        setResult(result);
      } catch (error) {
        console.log({ error });
        setError(error.message);
      }
    };

    test();
  }

  return (
    <ScrollView contentContainerStyle={[styles.container, theme.view]}>
      <View style={styles.header}>
        <View style={styles.displayHorizontal}>
          <LogoIcon />
          <View style={styles.headerTitleContainer}>
            <H2 style={styles.headerTitle}>Expo Svg Converter</H2>
          </View>
        </View>
      </View>
      <View style={[styles.displayHorizontal, { paddingBottom: 8 }]}>
        <Text
          style={{
            flex: 1,
            paddingLeft: 16,
            fontFamily: "Code",
            color: theme.text.color
          }}
        >
          Svg Input
        </Text>
        <Text
          style={{
            flex: 1,
            paddingLeft: 16,
            fontFamily: "Code",
            color: theme.text.color
          }}
        >
          Expo Svg Output
        </Text>
      </View>
      <View style={[styles.displayHorizontal, { flex: 1, paddingBottom: 16 }]}>
        <TextInput
          onChangeText={text => convertToExpoSvg(text)}
          multiline
          spellCheck={false}
          style={[
            styles.textArea,
            {
              borderColor: theme.text.color,
              color: theme.text.color
            }
          ]}
        />
        <TextInput
          value={
            result && result.RNSvg
              ? `// imports:
import { ${result.usedElements.join(", ")} } from 'react-native-svg';

// SVG:
${result && result.RNSvg}`
              : error
              ? `// Error:
${error}
              `
              : ""
          }
          multiline
          spellCheck={false}
          style={[
            styles.textArea,
            {
              borderColor: theme.text.color,
              color: theme.text.color
            }
          ]}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    paddingBottom: 24
  },
  displayHorizontal: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerTitleContainer: {
    marginLeft: 12
  },
  headerTitle: {
    textDecorationLine: "none"
  },
  textArea: {
    flex: 1,
    fontFamily: "Code",
    padding: 16,
    borderWidth: 2,
    borderRadius: 4,
    margin: 8,
    height: "100%",
    lineHeight: 20
  }
});
