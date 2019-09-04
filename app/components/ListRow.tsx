import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  windowWidth,
  isSmallScreen,
  isMediumScreen,
} from '../constants/layout';
import Text from './Text';
import ExternalLink from './ExternalLink';

interface ListRow {
  items: ListItem[];
}

interface ListItem {
  title: string;
  year?: number;
  href: string;
  description: string;
}

function ListRow(props: ListRow) {
  return (
    <View style={styles.container}>
      {props.items.map(item => (
        <View key={item.href} style={styles.listItem}>
          <Text style={styles.headline}>
            <ExternalLink href={item.href}>{item.title}</ExternalLink>
            <Text style={styles.year}>{item.year}</Text>
          </Text>
          <Text>{item.description}</Text>
        </View>
      ))}
    </View>
  );
}

export default ListRow;

const listItemWidth = () => {
  let width = 0.25;

  if (isMediumScreen) {
    width = 0.5;
  }

  if (isSmallScreen) {
    width = 1;
  }

  const result = width * (windowWidth > 1200 ? 1200 : windowWidth);
  return result;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listItem: {
    flex: 1,
    minWidth: 220,
    maxWidth: listItemWidth(),
    paddingRight: 32,
    paddingBottom: 32,
  },
  headline: {
    marginBottom: 8,
  },
  year: {
    opacity: 0.6,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
