import {
  Button, Layout, Text,
} from "@ui-kitten/components";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
// import Auth0BubbleBackground from "../../../assets/images/auth0-bubble.svg";
import Auth0Flair from "../../../assets/images/auth0-flair.svg";
import { tutorialStyles } from "../../../components/styles";

const window = Dimensions.get("window");

const SignupScreen = ({ onContinue }: { onContinue: () => void }) => {
  return (
    <Layout style={styles.root}>
      {/* <Auth0BubbleBackground
        width={window.width}
        height={window.height + 100}
        style={styles.bubble}
      /> */}
      <Layout style={styles.mainContainer}>
        <Layout style={styles.text}>
          <Text style={tutorialStyles.title}>Hang Tight!</Text>
          <Text style={[styles.body]}>
            We are analyzing your responses and will put you in a friend group
            shortly.
          </Text>
        </Layout>
        <Auth0Flair
          style={{ position: "absolute", bottom: 0, zIndex: -100 }}
          width={window.width}
        />
      </Layout>

      <Layout style={styles.buttonContainer}>
        <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}>
          In the meantime...
        </Text>
        <Button style={styles.button} onPress={onContinue}>
          {(evaProps: any) => (
            <Text
              {...evaProps}
              style={[evaProps.style, styles.buttonText]}
            >
              Create an Account
            </Text>
          )}
        </Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  bubble: {
    position: "absolute",
    top: 0,
  },
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000",
    marginTop: -50,
    paddingTop: 0,
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
  mainContainer: {
    flex: 1,
    width: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#0000",
    marginTop: 50,
    paddingTop: 50,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 0,
    flexBasis: "20%",
    backgroundColor: "#0000",
  },
  body: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
  text: {
    display: "flex",
    flex: 1,
    backgroundColor: "#0000",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default SignupScreen;
