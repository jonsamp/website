import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { useTheme, useFontSize } from "./hooks";
import { Avatar } from "./components/Avatar";
import { Divider } from "./components/Divider";
import { H1, H2, P, Em, Link, TextButton } from "./components/Type";
import projects from "./projects.json";

export default function App() {
  const [page, setPage] = useState(0);
  const theme = useTheme();
  const MoreText = () => (
    <TextButton onPress={() => setPage(page + 1)}>More...</TextButton>
  );

  useEffect(function didMount() {
    Font.loadAsync({
      Header: require("./assets/WorkSans-Black.otf"),
      Body: require("./assets/sentinel-book.otf"),
      BodyItalic: require("./assets/sentinel-bookItalic.otf")
    });
  }, []);

  return (
    <View style={[styles.wrapper, theme.view]}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Avatar />
          <H1>Jon Samp</H1>
        </View>
        <P>
          👋 Hi! I'm a software developer at{" "}
          <Link href="https://expo.io">Expo</Link> in New York City, where I
          work on frontend and design projects. I love making quality user
          experiences with JavaScript, React Native, and Expo. You can find me
          on <Link href="https://github.com/jonsamp">GitHub</Link>,{" "}
          <Link href="https://dev.to/jonsamp">Dev.to</Link>, and{" "}
          <Link href="https://twitter.com/jonsamp">Twitter</Link>. Also, there's
          a list of my side-projects and packages below. Thanks for stopping by!{" "}
          {page === 0 && <MoreText />}
        </P>
        {page >= 1 && (
          <P>
            Originally from Kansas, I started post-college life as a herpetology
            researcher (
            <Em>
              I have a wild story where I had ~100 snakes in my car at once. Ask
              me!
            </Em>
            ). At the same time, I was interested in higher education. I found a
            job as an admissions counselor, and proceeded to spend a year
            driving hundreds of miles around rural Kansas while talking to high
            schoolers and their parents about education.{" "}
            {page === 1 && <MoreText />}
          </P>
        )}
        {page >= 2 && (
          <P>
            Then I moved to Chicago, taught myself Ruby on Rails, and was
            incredibly lucky to find a job as a developer. The problem was the
            job required writing JavaScript. They took a chance on me and I
            studied JavaScript every day on the train. I eventually wrote a{" "}
            <Link href="https://www.codecadEmy.com/learn/introduction-to-javascript">
              course on JavaScript
            </Link>
            . I still think about JavaScript every day (
            <Em>Isn't it so wonderful?</Em>). {page === 2 && <MoreText />}
          </P>
        )}
        {page >= 3 && (
          <P>
            Finally, I moved to New York City. While I hated it at first, now I
            love it more than I can say. I have a sassy dog named Nikko (she has
            a{" "}
            <Link href="https://www.instagram.com/nikko__dog/">
              must-see Instagram
            </Link>
            ). I love to run, brew specialty coffee (sorry I know it's a
            coder-dude stereotype), and cook everything I see on{" "}
            <Link href="https://www.foodnetwork.com/shows/good-eats">
              Good Eats
            </Link>
            .
          </P>
        )}
        <Divider />
        {projects.map(project => (
          <View key={project.title}>
            <View style={{ flexDirection: "row" }}>
              <H2 href={project.href}>{project.title}</H2>
            </View>
            <P>{project.description}</P>
          </View>
        ))}
        <Divider />
        <P>
          This website is built with <Link href="https://docs.expo.io/versions/v33.0.0/introduction/running-in-the-browser/">Expo Web</Link> 💙. You can see its source code on
          <Link href="https://github.com/jonsamp/website">GitHub</Link>.
        </P>
        <View style={{ height: useFontSize(3) }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center"
  },
  container: {
    flex: 1,
    maxWidth: 840,
    paddingHorizontal: 20
  }
});
