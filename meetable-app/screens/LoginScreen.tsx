import React from "react";
import {
  Button,
  Card,
  Layout,
  Text,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, User } from "../types";
import ENV from "../config/env";
import Auth from "../utils/Auth";
import getSettings from "../config/GetSettings";

const {
  auth0: { passwordlessClient },
} = getSettings();

const LoginScreen = ({
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
    let prompt = "";
    if (settings.screenHint === "signup") {
      prompt = "login";
    }
    const user = await Auth.login({
      ...passwordlessClient,
      ...settings,
      prompt,
    });
    if (user) {
      setUser(user);
      navigation.replace("Tabs");
    }
  };
  return (
    <Layout style={styles.root}>
      <Layout style={styles.topcontainer}>
        <Card disabled style={styles.image}>
          <Text>Nice Image</Text>
        </Card>
      </Layout>
      <Layout style={styles.bottomcontainer}>
        <Button
          style={styles.button}
          onPress={() => handleLogin({ screenHint: "login" })}
        >
          {(evaProps: any) => (
            <Text
              {...evaProps}
              style={{ ...evaProps.style, ...styles.buttonText }}
            >
              Log In
            </Text>
          )}
        </Button>
      </Layout>
    </Layout>
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
  bottomcontainer: {
    flex: 0,
    display: "flex",
    flexBasis: 150,
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginBottom: 20,
    width: "90%",
    borderRadius: 100,
    backgroundColor: "#000",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    flex: 1,
  },
  topcontainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
