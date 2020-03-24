import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { H1, P, Em } from "../../components/Type";
import { useTheme, useFontSize } from "../../hooks";

import Image1 from "./images/1.gif";
import Image2 from "./images/2.jpeg";
import Image3 from "./images/3.jpeg";
import Image4 from "./images/4.jpeg";
import Image5 from "./images/5.jpeg";
import Image6 from "./images/6.jpeg";
import Image7 from "./images/7.jpeg";
import Image8 from "./images/8.jpeg";
import Image9 from "./images/9.jpeg";
import Image10 from "./images/10.jpeg";
import Image11 from "./images/11.jpeg";
import Image12 from "./images/12.jpeg";
import Image13 from "./images/13.jpeg";
import Image14 from "./images/14.jpeg";
import Image15 from "./images/15.gif";
import Image16 from "./images/16.jpeg";
import Image17 from "./images/17.mov";
import Image18 from "./images/18.jpeg";
import Image19 from "./images/19.jpeg";
import Image20 from "./images/20.jpeg";
import Image21 from "./images/21.jpeg";
import Image22 from "./images/22.jpeg";
import Image23 from "./images/23.jpeg";
import Image24 from "./images/24.jpeg";
import Image25 from "./images/25.jpeg";
import Image26 from "./images/26.jpeg";
import Image27 from "./images/27.jpeg";
import Image28 from "./images/28.jpeg";
import Image29 from "./images/29.jpeg";
import Image30 from "./images/30.jpeg";
import Image31 from "./images/31.jpeg";
import Image32 from "./images/32.jpeg";
import Image33 from "./images/33.jpeg";
import Image34 from "./images/34.jpeg";
import Image35 from "./images/35.jpeg";
import Image36 from "./images/36.jpeg";
import Image37 from "./images/37.jpeg";
import Image38 from "./images/38.jpeg";
import SpellingBee from "./images/spelling-bee.png";

function Caption({ children }) {
  return (
    <Em
      style={{
        fontSize: useFontSize(0.9),
        textAlign: "center"
      }}
    >
      {children}
    </Em>
  );
}

function Image({ source, caption }: { source: any; caption?: string }) {
  return (
    <View style={{ marginBottom: useFontSize(2) }}>
      <img
        src={source}
        style={{
          width: 800,
          maxWidth: "100%",
          marginBottom: useFontSize(0.5)
        }}
      />
      {caption ? <Caption>{caption}</Caption> : null}
    </View>
  );
}

function YearOne() {
  const theme = useTheme();
  const [password, setPassword] = useState("");

  if (password !== "cogwheel") {
    return (
      <View
        style={[
          styles.wrapper,
          { backgroundColor: theme.view.backgroundColor }
        ]}
      >
        <View style={[styles.container]}>
          <P>8 letters</P>
          <Image source={SpellingBee} />
          <input
            onChange={e => setPassword(e.target.value)}
            style={{ margin: "60px" }}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={[styles.wrapper, { backgroundColor: theme.view.backgroundColor }]}
    >
      <View style={[styles.container]}>
        <H1>Year one</H1>
        <P>Dear Emily, my love,</P>
        <P>
          I can't believe a year has passed and I also can't believe it hasn't
          been five. It's been nothing short of incredible.{" "}
        </P>
        <P>
          <Em>You are the love of my life.</Em> —Saying that though just does
          not do it justice. It's 100% true, but it's like trying to take a
          picture of the northern lights: it's just a small imprint of the
          actual experience; lacking the magic and awe of being there.
        </P>
        <P>
          I want to show you some of the magic you've set afire in my life, so
          let's take a look back over the year with some pictures and some text.
        </P>
        <P>
          It all began on a chilly evening in April, a year ago in 2019. My
          heart pounding, repeating to myself, "Be cool Jon... be cool!". You
          arrived and we looked at each other like cute racoons. And then ...
          well ❤
        </P>
        <Image source={Image1} />
        <P>
          From there, we started having adventures together. You helped me take
          care of Roland, like such a cutie.
        </P>
        <Image source={Image2} />
        <P>
          We watched Jack simultaneously make a steak and give Anna a heart
          attack. (I have to say it was really good!)
        </P>
        <Image source={Image3} />
        <P>
          At that point, it was a secret at work that we were dating. Who would
          have thought that two people who work together so closely could ever
          start to date?! No one would ever guess.
        </P>
        <P>
          Why are Jon and Emily taking so many one-on-ones? Who knows! It was
          such a mystery that I remember Brian Park asking me who I was dating
          at a wine bar, completely clueless even though he worked with us every
          day.
        </P>
        <P>
          We both got tickets to Google IO and I booked a studio AirBnB.
          Amazingly, no one was suspicious. The couch pulls out, right?
        </P>
        <P>Here we are looking cute in our matching glasses:</P>
        <Image source={Image4} />
        <P>And also attending the same technical talks.</P>
        <Image source={Image5} />
        <P>
          And going to In-N-Out! I remember I took this photo and sent it to my
          dad. As far as I know, this was the first photo I sent him of you.
          What a great one!!
        </P>
        <Image source={Image6} />
        <P>A day trip to San Francisco.</P>
        <Image source={Image7} caption="Not pictured: how cold we were in SF" />
        <Image source={Image8} />
        <Image
          source={Image9}
          caption="Watch out for Peek Shank! Also SNAKES!!!"
        />
        <Image source={Image10} />
        <P>
          Coming back to work after that was hard. I had to sit right next to
          the love of my life and they expected me to get things done.
          Eventually we had to go on an outing with the team. The outing from
          hell.
        </P>
        <Image
          source={Image11}
          caption="I feel sick just looking at this photo."
        />
        <P>
          I remember asking you if you wanted to go to a concert in Prospect
          Park and at that point I was kind of nervous because the band we saw
          (Tortoise) is freakin' weird. Looking back on that, I'd love to go
          hang out in the park more this year.
        </P>
        <Image source={Image12} />
        <Image source={Image13} caption="FAITH!" />
        <P>
          We spent the summer adventuring around, walking around Red Hook and we
          found the key lime pie!!
        </P>
        <Image
          source={Image14}
          caption="This is the quintessential Emily shirt."
        />
        <P>
          I loved you, and honestly my heart had grown so full at that point
          that every time I saw you walking my way, I was <Em>** stunned **</Em>
          . (I still am by the way)
        </P>
        <Image source={Image15} />
        <P>One time we got sushi and they put it in a boat. NOMMM</P>
        <Image source={Image16} />
        <P>
          Then, you conquered your first 10K!!! (and your first time on
          Governor's Island?)
        </P>
        <video src={Image17} controls style={{ marginBottom: 32 }}></video>
        <P>It took time, but you finally learned to pick up Nikko.</P>
        <Image source={Image18} caption="Not pictured: Nikko liking it" />
        <P>
          We went to Caroline and Nanu's wedding. Can I just say how cute you
          are and how good of a time I had? It was so great to meet your friends
          and learn the meaning of "No Butts".
        </P>
        <P>
          Nothing will ever compare to the bride and groom walking down the isle
          to Lord of the Rings music, or the groom very quickly changing into
          shorts.
        </P>
        <Image source={Image19} />
        <Image source={Image20} />
        <P>
          We got drinks at a roof-top bar before meeting Oliver and Jess for
          dinner.
        </P>
        <Image source={Image21} />
        <P>
          Then we went to Chicago, where you saw me break my whole body running
          the Chicago Marathon, and where we explored. We saw improvised
          shakespeare, my favorite coffee shop, and lots of the city.
        </P>
        <P>
          I still stand by Chicago dogs being the best food we had, even though
          we went to a Michelin star restaurant (Roister). Here we are at the
          bean. Would love to take pictures with you there again someday.
        </P>
        <Image source={Image22} />
        <Image source={Image23} caption="Cute!" />
        <Image source={Image24} caption="I'll kiss you forever!" />
        <Image
          source={Image25}
          caption="The smelly onion, really pretty at sunset."
        />
        <P>
          I went to California to onboard at work, then came back and we
          immediately went up-state. While that trip was hard, I'm so glad I was
          there with you. Also we should have added some hard liquor to this
          mulled wine.
        </P>
        <Image source={Image26} />
        <P>
          Then we went to Nashville for RubyConf where they loved hearing you
          speak, and I convinced you to take a shot with me. That was so fun!!
        </P>
        <Image source={Image27} />
        <P>
          Getting back to Brooklyn-life, we, together, made what Andrew would
          soon call "The best apple pie [he's] ever had in [his] life." I admit
          that it was a good pie. I will also admit that you look really cute
          here.
        </P>
        <Image source={Image28} />
        <P>
          Then it was your birthday and we ran the Turkey Trot 5K on the upper
          west side with Dieg.. Andrew! You did so well and beat your goal!!
        </P>
        <Image source={Image29} />
        <P>
          Then in Devember. we travelled to Kansas together, where, upon
          arrival, my dad just started in on telling his all-time best jokes. I
          guess he really wanted to impress you. You met my family, my sister,
          my niece and nephew, and my mom! We saw amazing ladies with capes on
          horses and hung out. The two photos below are so sweet and I love
          them.
        </P>
        <Image source={Image30} />
        <Image source={Image31} />
        <P>
          It wasn't long before it was New Years Eve. We decided to have a quiet
          night in with Jess and Pierre, then Natalie and Georgia came. We
          headed to "Bar Bar" aka "Branch Office" to ring in the new year. I
          loved kissing you as 2020 turned!
        </P>
        <Image source={Image32} />
        <P>Random: Here's a cat I tried to nab shortly after the new year.</P>
        <Image source={Image33} />
        <P>Not so random: Here's your sweet sweet cat!</P>
        <Image source={Image34} />
        <P>
          And your sweet family. I love hanging out with them. Also, I cannot
          remember why this happened.
        </P>
        <Image source={Image35} />
        <P>
          More recently we've been running, since we can't go to the gym or do
          anything really since we're all living #quarantinelife.
        </P>
        <Image source={Image36} />
        <P>NYC is still beautiful.</P>
        <Image source={Image37} />
        <P>And so are we!!</P>
        <Image source={Image38} />
        <P>
          I am filled with warm fuzzies and admiration for you. You are so
          incredible and I will love you forever. I am so crazy about you. It's
          only become deeper and richer as the year has passed.
        </P>
        <P>
          Looking back through these, I am thinking about what the next year
          will bring for us! I hope that we can repeat some of these adventures,
          and I know we will find many new ones.
        </P>
        <P>
          Emily, my love, I hope you really know deep down that{" "}
          <Em>you are the love of my life</Em>. I've never met such an amazing
          person. I've never felt so supported, so loved, so happy to be myself.
          I know you'll want to repeat it back to me, but I hope you'll pause
          and let it sink in for a moment or two. You are the love of my life.
          You really are. And I will always admire, cherish, and support you.
          Always always and forever.
        </P>
        <P>To this year and next year, and many years yet to come,</P>
        <P style={{ marginBottom: 120 }}>
          <Em>~ Jon</Em>
        </P>
      </View>
    </View>
  );
}

export default YearOne;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flex: 1
  },
  container: {
    maxWidth: 800,
    paddingHorizontal: 16
  }
});
