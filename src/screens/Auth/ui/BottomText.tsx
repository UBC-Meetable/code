import { Text } from "@ui-kitten/components";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import AuthStateContext from "../../../context/AuthStateContext";
import { AuthState } from "../../../types";

type BottomTextProps = {
  onPressText: () => void;
};

const BottomText = ({ onPressText }:BottomTextProps) => {
  const authState = useContext(AuthStateContext);
  const getTextFromAuthState = () => {
    switch (authState) {
    case AuthState.LANDING_SCREEN:
    case AuthState.SIGN_UP:
      return ["Already have an account?", "Log In"];
    case AuthState.LOGIN:
      return ["Don't have an account?", "Sign Up"];
    case AuthState.CONFIRM_EMAIL:
    case AuthState.FORGOT_PASSWORD:
    case AuthState.FORGOT_PASSWORD_CONFIRM:
      return ["", "Cancel"];
    default:
      return ["", ""];
    }
  };

  const [text, buttonText] = getTextFromAuthState();
  return (
    <Text style={{ ...styles.buttonText }}>
      {text}
      {" "}
      <Text
        style={{ ...styles.buttonText, color: "#02A3F4" }}
        onPress={() => onPressText()}
      >
        {buttonText}
      </Text>
    </Text>

  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default BottomText;
