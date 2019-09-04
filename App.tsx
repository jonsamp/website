import React, { Component } from 'react';
import { View } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';
import * as Font from 'expo-font';
import Fruktur from './assets/fruktur-regular.ttf';
import colors from './app/constants/colors';
import Text from './app/components/Text';
import ExternalLink from './app/components/ExternalLink';

StyleSheet.build();

export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      script: Fruktur,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pageContainer}>
          <Text script largeHeader>
            <Text script largeHeader style={{ color: colors.red }}>
              Jon Samp's
            </Text>{' '}
            website
          </Text>
          <Text>
            <Text bold>
              👋 Hi! I'm a software developer and coffee person in New York
              City.
            </Text>{' '}
            I specialize in JavaScript, React Native, and building beautiful
            user experiences. This page attempts to list all of my recent
            projects and packages. I'm also present on Twitter as{' '}
            <ExternalLink href={'https://www.twitter.com/@jonsamp'}>
              @jonsamp
            </ExternalLink>
            , where I tweet about coding and life in NYC. You can find my code
            on{' '}
            <ExternalLink href={'https://www.github.com/jonsamp'}>
              GitHub
            </ExternalLink>
            . I have a lovely dog named Nikko, who has a must-see Instagram{' '}
            <ExternalLink href={'https://www.instagram.com/nikko__dog/'}>
              @nikko__dog
            </ExternalLink>
            . Thanks for stopping by!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 32,
    alignItems: 'center',
  },
  pageContainer: {
    paddingVertical: 32,
    paddingHorizontal: 40,
    maxWidth: 880,
  },
});
