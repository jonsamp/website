import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import BackgroundImage from '../assets/bg-pattern.jpg';
import { maxWidth, isSmallScreen } from './constants/layout';
import colors from './constants/colors';
import Text from './components/Text';
import ExternalLink from './components/ExternalLink';
import Category from './components/Category';
import categories from './categories.json';

function App() {
  return (
    <View>
      <ImageBackground
        source={BackgroundImage}
        style={styles.backgroundContainer}
        imageStyle={{ resizeMode: 'repeat' }}
      >
        <View style={styles.pageContainer}>
          <Text script header>
            <Text script header style={{ color: colors.red }}>
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
          {categories.map(category => (
            <Category
              key={category.title}
              title={category.title}
              items={category.items}
            />
          ))}
          <View style={styles.footer}>
            <Text>
              This site was made with React Native and{' '}
              <ExternalLink href="https://docs.expo.io/versions/latest/introduction/running-in-the-browser/">
                Expo Web
              </ExternalLink>
              . See the source code on{' '}
              <ExternalLink href="https://github.com/jonsamp/website">
                GitHub
              </ExternalLink>
              .
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  backgroundContainer: { flex: 1, alignItems: 'center' },
  pageContainer: {
    backgroundColor: colors.background,
    padding: isSmallScreen ? 24 : 32,
    margin: isSmallScreen ? 12 : 32,
    maxWidth: maxWidth,
  },
  footer: {
    marginTop: 48,
  },
});
