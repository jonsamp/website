import React from 'react';
import Text from './Text';
import { TouchableOpacity, Linking, StyleSheet } from 'react-native';

interface ExternalLinkProps {
  href: string;
  children: string;
}

function ExternalLink(props: ExternalLinkProps) {
  const { href, children, ...rest } = props;

  return (
    <Text
      style={styles.link}
      accessibilityRole="link"
      onPress={() => Linking.openURL(href)}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default ExternalLink;

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    fontStyle: 'italic',
  },
});
