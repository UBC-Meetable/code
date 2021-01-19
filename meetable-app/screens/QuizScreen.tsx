import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import BubbleBackground from "../assets/images/tutorial-bubble.svg";
import { RootStackParamList } from "../types";

const window = Dimensions.get("window");

const QuizScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Quiz">;
}) => (
  <Layout style={styles.root}>
    <BubbleBackground
      width={window.width}
      height={window.height}
      style={{ position: "absolute" }}
    />

    <Layout style={styles.bottomcontainer}>
      <Button
        style={styles.button}
        onPress={() => {
          navigation.replace("Signup");
        }}
      >
        {(evaProps: any) => (
          <Text
            {...evaProps}
            style={{ ...evaProps.style, ...styles.buttonText }}
          >
            End Quiz
          </Text>
        )}
      </Button>
    </Layout>
  </Layout>
);

const styles = StyleSheet.create({
  title: {
    color: "#FBBA82",
  },
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8F3",
  },
  card: {
    width: "100%",
    padding: 0,
    margin: 0,
    height: "100%",
    maxHeight: "91%",
    backgroundColor: "#0000",
    borderWidth: 0,
  },
  button: {
    marginBottom: 20,
    width: "90%",
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: "#02A3F4",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    flex: 1,
  },
  carousel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  blacktext: {
    color: "#000",
  },
  slide: {
    height: "90%",
    display: "flex",
    width: "90%",
    marginTop: 10,
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "center",
    alignItems: "center",
    color: "#000000",
  },
  topcontainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomcontainer: {
    flex: 0,
    display: "flex",
    flexBasis: 150,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#0000",
  },
  carouselContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginTop: 30,
  },
});

export default QuizScreen;
