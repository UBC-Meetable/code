import {
  Button, ButtonProps, Text, TextProps,
} from "@ui-kitten/components";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, TextStyle } from "react-native";

type GradientButtonProps = {
  textStyle?: TextStyle;
  loading?: boolean
  gradientProps?: LinearGradientProps
  children: string
} & ButtonProps;

const GradientButton = (props: GradientButtonProps) => {
  const {
    onPress = () => { }, gradientProps, textStyle, children, style, loading = false,
  } = props;
  const [pressedIn, setPressedIn] = useState(false);
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#B5E6FE", "#3AB7F4"]}
      style={[styles.linearGradient, style]}
    >
      <Button
        size="large"
        style={[styles.button, pressedIn && styles.pressedIn]}
        onPressIn={() => {
          setPressedIn(true);
        }}
        onPressOut={() => {
          setPressedIn(false);
        }}
        onPress={(e) => onPress(e)}
      >
        {(evaProps) => (
          <Text
            {...evaProps}
            style={[textStyle, { fontFamily: "Poppins_600SemiBold" }, pressedIn && styles.pressedInText]}
          >
            {children}
          </Text>
        )}
      </Button>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  pressedIn: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  button: {
    width: "100%",
    backgroundColor: "transparent",
    borderWidth: 0,
    flexDirection: "column",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    flex: 1,
  },
});

export default GradientButton;
