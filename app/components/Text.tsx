import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import colors from '../constants/colors';

interface TextProps {
  children?: any;
  style?: any;
  code?: boolean;
  bold?: boolean;
  script?: boolean;
  header?: boolean;
  subheader?: boolean;
  largeHeader?: boolean;
  [i: string]: any;
}

function Text(props: TextProps) {
  const {
    code,
    bold,
    script,
    largeHeader,
    header,
    subheader,
    style,
    ...rest
  } = props;
  return (
    <RNText
      style={[
        styles.text,
        code && styles.code,
        bold && styles.bold,
        script && styles.script,
        header && styles.header,
        subheader && styles.subheader,
        largeHeader && styles.largeHeader,
        style,
      ]}
      {...rest}
    >
      {props.children}
    </RNText>
  );
}

export default Text;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    lineHeight: 32,
    color: colors.foreground,
  },
  code: {
    fontFamily: 'monospace',
  },
  bold: {
    fontWeight: 'bold',
  },
  script: {
    fontFamily: 'script',
  },
  largeHeader: {
    fontSize: 52,
    marginBottom: 16,
    lineHeight: 63,
  },
  header: {
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 16,
    lineHeight: 45,
  },
  subheader: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 42,
    marginBottom: 12,
  },
});
