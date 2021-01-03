import React from "react";
import { ImageBackground, StyleSheet, Image } from "react-native";
import { Text, View } from "./Themed";
import background from "../assets/images/background.png";
import logo from "../assets/images/logo.png";
import MeetableCarousel from "../navigation/MeetableCarousel";
import Auth from "../utils/Auth";
import getSettings from "../config/GetSettings";
import Button from "./Button";
import { User } from "../types";
import ENV from "../config/env";

const {
  auth0: { passwordlessClient },
} = getSettings();

type UnauthorizedAppProps = {
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

/**
 * @todo Change background to be better, redesign this page.
 * @todo Add useful information to info slides.
 * @todo login and sign up functionality
 */
const UnauthorizedApp = (props: UnauthorizedAppProps) => {
  const handleLogin = async (settings: { screenHint: "login" | "signup" }) => {
    if (process.env.EXPO_SKIP_LOGIN === "true") {
      props.setUser(true);
      console.log("skipping");

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
      props.setUser(user);
    }
  };
  return (
    <ImageBackground source={background} style={styles.flex} blurRadius={3}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.headerText}>Meetable</Text>
      </View>
      <View style={styles.info}>
        <MeetableCarousel>
          <View style={styles.slide}>
            <Text style={styles.blacktext}>Welcome user to meetable</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.blacktext}>Explain what meetable is</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.blacktext}>another info slide etc.</Text>
          </View>
        </MeetableCarousel>
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ width: "50%" }}>
          <Button
            buttonStyle={[styles.button, styles.blueButton]}
            textStyle={styles.buttonText}
            onPress={() => handleLogin({ screenHint: "login" })}
          >
            Login
          </Button>
        </View>
        <View style={{ width: "50%" }}>
          <Button
            buttonStyle={[styles.button, styles.orangeButton]}
            textStyle={styles.buttonText}
            onPress={() => handleLogin({ screenHint: "signup" })}
          >
            Sign Up
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,0)",
    width: "100%",
    marginBottom: 50,
    flexDirection: "row",
  },
  bgimage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0)",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
  blueButton: {
    backgroundColor: "#1BB1F1",
  },
  orangeButton: {
    backgroundColor: "orange",
  },
  buttonText: {
    color: "white",
    fontFamily: "Avenir",
    textAlign: "center",
    fontSize: 30,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0)",
  },
  headerText: {
    fontSize: 50,
    textAlign: "center",
    fontFamily: "Avenir",
    color: "#000000",
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 100,
    margin: 20,
  },
  info: {
    width: "100%",
    flex: 1,
    backgroundColor: "rgba(255,255,255,0)",
    justifyContent: "center",
    alignItems: "center",
    color: "#000000",
  },
  slide: {
    backgroundColor: "rgba(0,0,0,0)",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "#000000",
  },
  blacktext: {
    color: "#000",
  },
});

export default UnauthorizedApp;
