import React, { ReactNode } from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import Text from './Text';

interface SectionTitleProps {
  children: ReactNode;
  style?: ViewStyle;
}

function SectionTitle(props: SectionTitleProps) {
  return (
    <View style={styles.container}>
      <View style={props.style}>
        <Text script subheader>
          {props.children}
        </Text>
      </View>
    </View>
  );
}

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 48,
    marginBottom: 8,
  },
});
