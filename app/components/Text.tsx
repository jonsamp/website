import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { isSmallScreen } from '../constants/layout';
import colors from '../constants/colors';

interface TextProps {
  children?: any;
  style?: any;
  code?: boolean;
  bold?: boolean;
  script?: boolean;
  header?: boolean;
  subheader?: boolean;
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
        style,
      ]}
      {...rest}
    >
      {props.children}
    </RNText>
  );
}

export default Text;

const fontMultiplier = isSmallScreen ? 0.85 : 1;

const styles = StyleSheet.create({
  text: {
    fontSize: 20 * fontMultiplier,
    lineHeight: 26 * fontMultiplier,
    color: colors.foreground,
    fontWeight: '400',
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
  header: {
    fontSize: 52 * fontMultiplier,
    marginBottom: 16,
    lineHeight: 63 * fontMultiplier,
  },
  subheader: {
    fontSize: 32 * fontMultiplier,
    lineHeight: 42 * fontMultiplier,
    marginBottom: 12,
  },
});
