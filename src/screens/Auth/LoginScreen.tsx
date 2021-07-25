import {
  Button, Input, Layout, Text,
} from "@ui-kitten/components";
import React, { useRef } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LoginRocket from "../../assets/images/login-background.svg";
import LoginPageBubbleTop from "../../assets/images/login-page-bubble-top.svg";
import BottomText from "./BottomText";

const window = Dimensions.get("window");

type LoginScreenProps = {
    onSignUp: () => void,
    onLogIn: () => void,
}

const LoginScreen = ({ onSignUp, onLogIn }:LoginScreenProps) => {
  const units = useSafeAreaInsets();

  return (
    <Layout style={styles.root}>
      <LoginPageBubbleTop
        style={{
          position: "absolute",
          top: -units.top,
        }}
        width={window.width}
        height={window.height}
      />
      <LoginRocket
        style={{ position: "absolute", top: 0 }}
        width={window.width}
        // height={window.height}
      />
      <Layout style={styles.bottomcontainer}>
        <Button
          style={styles.button}
          onPress={() => onSignUp()}
        >
          {(evaProps: any) => (
            <Text
              {...evaProps}
              style={{ ...evaProps.style, ...styles.buttonText }}
            >
              Sign Up
            </Text>
          )}
        </Button>
        <BottomText onPressText={onSignUp} />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#0000",
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
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
    height: "auto",
    flexDirection: "column",
  },
  bottomcontainer: {
    flex: 0,
    display: "flex",
    flexBasis: 150,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
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
  topcontainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
