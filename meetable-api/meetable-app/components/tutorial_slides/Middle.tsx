import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { TutorialStyles as styles } from "../styles";
import MiddleTutorialImage from "../../assets/images/tutorial-slide2.svg";

const Middle = () => (
  <Layout style={styles.main}>
    <Text style={styles.title}>Step 2</Text>
    <Text style={styles.subtitle}>Meet your personalized friend group</Text>
    <Text style={styles.body}>
      Chat about your shared interests with your newfound group of friends.
    </Text>
    <MiddleTutorialImage />
  </Layout>
);

export default Middle;
