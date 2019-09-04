import React from 'react';
import { View, StyleSheet } from 'react-native';
import SectionTitle from './SectionTitle';
import ListRow from './ListRow';

interface CategoryProps {
  title: string;
  items: any;
}

function Category(props: CategoryProps) {
  return (
    <View>
      <SectionTitle
        style={props.title.toLowerCase().match('new') ? styles.rotated : null}
      >
        {props.title}
      </SectionTitle>
      <ListRow items={props.items} />
    </View>
  );
}

export default Category;

const styles = StyleSheet.create({
  rotated: {
    transform: [{ rotate: '-10deg' }],
  },
});
