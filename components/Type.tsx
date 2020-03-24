import React from "react";
import { Text, Linking } from "react-native";
import { useFontSize, useTheme } from "../hooks";

const BodyText = props => {
  const { children, fontFamily, style, ...rest } = props;
  const theme = useTheme();
  return (
    <Text
      style={[
        theme.text,
        {
          fontSize: useFontSize(1.1),
          lineHeight: useFontSize(1.6),
          fontFamily,
          ...style
        }
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const H1 = (props: any) => (
  <BodyText
    fontFamily="Header"
    style={{
      marginTop: useFontSize(4),
      fontSize: useFontSize(2.5),
      marginBottom: useFontSize(1.25),
      lineHeight: useFontSize(2.5)
    }}
  >
    {props.children}
  </BodyText>
);

export const H2 = (props: any) => (
  <BodyText
    fontFamily="Header"
    href={props.href}
    style={{
      marginTop: useFontSize(1),
      marginBottom: useFontSize(0.25),
      fontSize: useFontSize(1.25)
    }}
    {...props}
  >
    {props.children}
  </BodyText>
);

export const P = (props: any) => (
  <BodyText
    fontFamily="Body"
    style={{ marginBottom: useFontSize(1) }}
    {...props}
  />
);

export const Em = (props: any) => (
  <BodyText fontFamily="BodyItalic" style={props.style}>
    {props.children}
  </BodyText>
);

export const Link = (props: any) => (
  <BodyText
    fontFamily="Body"
    style={{ textDecorationLine: "underline", color: "#1E90FF" }}
    accessibilityRole="link"
    href={props.href}
  >
    {props.children}
  </BodyText>
);

export const TextButton = (props: any) => (
  <BodyText
    fontFamily="BodyItalic"
    style={{ textDecorationLine: "underline", color: "#1E90FF" }}
    accessibilityRole="link"
    onPress={props.onPress}
  >
    {props.children}
  </BodyText>
);
