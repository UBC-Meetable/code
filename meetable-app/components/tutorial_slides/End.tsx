import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { TutorialStyles as styles } from "../styles";
import EndTutorialImage from "../../assets/images/tutorial-slide3.svg";

const End = () => (
  <Layout style={styles.main}>
    <Text style={styles.title}>Step 3</Text>
    <Text style={styles.subtitle}>Get to know your class</Text>
    <Text style={styles.body}>
      Stay up to date with your courses with automatic course group chats.
    </Text>
    <EndTutorialImage style={{ marginTop: 50 }} />
  </Layout>
);

export default End;
