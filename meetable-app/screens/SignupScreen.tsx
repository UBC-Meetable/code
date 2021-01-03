import React from "react";
import {
  Button, Card, Layout, Text,
} from "@ui-kitten/components";
import { Dimensions, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList, User } from "../types";
import ENV from "../config/env";
import Auth from "../utils/Auth";
import getSettings from "../config/GetSettings";
import Auth0BubbleBackground from "../assets/images/auth0-bubble.svg";
import Auth0Flair from "../assets/images/auth0-flair.svg";

import { TutorialStyles } from "../components/styles";

const window = Dimensions.get("window");

const {
  auth0: { passwordlessClient },
} = getSettings();

const SignupScreen = ({
  navigation,
  setUser,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}) => {
  const handleLogin = async (settings: { screenHint: "login" | "signup" }) => {
    if (ENV.SKIP_LOGIN) {
      setUser(true);
      console.log("skipping");
      navigation.replace("Tabs");
      return;
    }
    const prompt = "";
    if (settings.screenHint === "signup") {
      // prompt = "login";
    }
    const user = await Auth.login({
      ...passwordlessClient,
      ...settings,
      prompt,
    });
    if (user) {
      setUser(user);
      console.log(user);
      navigation.replace("Tabs");
    }
  };
  return (
    <SafeAreaView style={styles.root}>
      <Auth0BubbleBackground
        style={{ position: "absolute", top: 0 }}
        width={window.width}
        height={window.height}
      />

      <Layout style={styles.mainContainer}>
        <Text style={TutorialStyles.title}>Hang Tight!</Text>
        <Text style={[TutorialStyles.body, styles.body]}>
          We are analyzing your responses and will put you in a friend group
          shortly.
        </Text>
        <Auth0Flair />
      </Layout>

      <Layout style={styles.buttonContainer}>
        <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}>In the meantime...</Text>
        <Button
          style={styles.button}
          onPress={() => handleLogin({ screenHint: "signup" })}
        >
          {(evaProps: any) => (
            <Text
              {...evaProps}
              style={{ ...evaProps.style, ...styles.buttonText }}
            >
              Complete Sign Up
            </Text>
          )}
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: "75%",
    maxHeight: "50%",
    padding: 10,
    marginBottom: 20,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c4c4",
    borderRadius: 40,
    borderWidth: 0,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    overflow: "visible",
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000",
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
  },
});

export default SignupScreen;
