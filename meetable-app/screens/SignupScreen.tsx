import { Route, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Button, Layout, Text,
} from "@ui-kitten/components";
import * as SecureStore from "expo-secure-store";
import React, { useContext, useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Auth0BubbleBackground from "../assets/images/auth0-bubble.svg";
import Auth0Flair from "../assets/images/auth0-flair.svg";
import { TutorialStyles } from "../components/styles";
import ENV from "../config/env";
import getSettings from "../config/GetSettings";
import { QuestionType, RootStackParamList, User } from "../types";
import Auth from "../utils/Auth";
import { UserContext } from "../utils/UserContext";

const window = Dimensions.get("window");

const {
  auth0: { passwordlessClient },
} = getSettings();

const SignupScreen = ({
  navigation,
  route,
  setUser,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Signup">;
  route: Route<"Signup", {responses: QuestionType[]}>,
  setUser: React.Dispatch<React.SetStateAction<User>>;
}) => {
  const submitQuiz = async (user: User) => fetch(`${ENV.API_URL}/api/quizs/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      uid: user.sub,
      responses: route.params.responses,
    }),
  });
  const handleContinue = async () => {
    const user = await handleLogin({ screenHint: "signup" });
    if (user) {
      const res = await submitQuiz(user);
      if (res.ok) {
        const json = await res.json();
        console.log("json", json);
        if (!json.error) {
          SecureStore.setItemAsync("user", JSON.stringify(user));
          setUser(user);
          navigation.replace("UniScreen");
        } else {
          console.log(json.error);
        }
      } else {
        console.log("bad");
      }
    }
  };

  const handleLogin = async (settings: { screenHint: "login" | "signup" }) => {
    if (ENV.SKIP_LOGIN) {
      console.log("skipping");
      navigation.replace("UniScreen");
      return null;
    }
    const prompt = "";
    const user = await Auth.login({
      ...passwordlessClient,
      ...settings,
      prompt,
    });
    if (user) {
      return user;
    }
    return null;
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
          once you make an account.
        </Text>
        <Auth0Flair />
      </Layout>

      <Layout style={styles.buttonContainer}>
        <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }} />
        <Button
          style={styles.button}
          onPress={() => handleContinue()}
        >
          {(evaProps: any) => (
            <Text
              {...evaProps}
              style={{ ...evaProps.style, ...styles.buttonText }}
            >
              Create an Account
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
