import React from "react";
import {
  Layout, Text,
} from "@ui-kitten/components";
import IntroTutorialImage from "../../assets/images/tutorial-slide1.svg";
import { tutorialStyles as styles } from "../styles";

const Intro = () => (
  <Layout style={styles.main}>
    <Text style={styles.title}>Step 1</Text>
    <Text style={styles.subtitle}>Take the Quiz</Text>
    <Text style={styles.body}>
      Take a two-minute personality quiz to find the perfect group of friends
      for you.
    </Text>
    <IntroTutorialImage />
  </Layout>
);

export default Intro;
