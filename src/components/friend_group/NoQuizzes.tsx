import { Button, Layout, Text } from "@ui-kitten/components";
import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import Like from "../../assets/icons/like.svg";
import Dislike from "../../assets/icons/dislike.svg";
import Love from "../../assets/icons/love.svg";
import Colors from "../../constants/Colors";

type NoQuizzesProps = {
  onContinue: (event: GestureResponderEvent) => void;
}

const NoQuizzes = ({ onContinue }: NoQuizzesProps) => (
  <Layout style={styles.root}>
    <Layout style={[styles.outer, styles.child]}>
      <Text style={[styles.title, styles.text]}>
        Take the Quiz
      </Text>
      <Text style={[styles.subtitle, styles.text]}>
        Select the following...
      </Text>
    </Layout>
    <Layout style={[styles.mid, styles.child]}>
      <Layout style={[styles.child, styles.iconContainer]}>
        <Like
          width={50}
          style={{ marginRight: 10 }}
        />
        <Text style={styles.bodyText}>
          to like an interest
        </Text>
      </Layout>

      <Layout style={[styles.child, styles.iconContainer]}>
        <Dislike
          width={50}
          style={{ margin: 10 }}
        />
        <Text style={styles.bodyText}>
          to dislike an interest
        </Text>
      </Layout>
      <Layout style={[styles.child, styles.iconContainer]}>
        <Love
          width={50}
          style={{ marginRight: 10 }}
        />
        <Text style={styles.bodyText}>
          to love an interest
        </Text>
      </Layout>
    </Layout>

    <Layout style={[styles.outer, styles.child]}>
      <Button onPress={onContinue}>Let's Go!</Button>
      {/* todo style button */}
    </Layout>

  </Layout>
);

const styles = StyleSheet.create(
  {
    root: {
      backgroundColor: Colors.theme.lightCreme,
      width: "70%",
      maxWidth: 300,
      minWidth: 200,
      borderRadius: 30,
      height: "90%",
      maxHeight: 450,
      minHeight: 300,
      display: "flex",
    },
    outer: {
      marginVertical: 15,
      flexBasis: 60,
      justifyContent: "center",
      alignItems: "center",
    },
    mid: {
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    child: {
      backgroundColor: "#0000",
    },
    title: {
      fontSize: 20,
    },
    subtitle: {
      fontSize: 12,
    },
    text: {
      fontFamily: "Poppins_600SemiBold",
    },
    iconContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    bodyText: {
      fontFamily: "Poppins_500Medium",
    },
  },
);

export default NoQuizzes;
