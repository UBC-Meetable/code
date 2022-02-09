import {
  Button, ButtonProps, Layout, Spinner, Text, TextProps,
} from "@ui-kitten/components";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

type GradientButtonProps = {
  textStyle?: TextProps
  loading?: boolean
  gradientProps?: LinearGradientProps
} & TextProps;

const GradientButton = (props:GradientButtonProps) => {
  const {
    onPress = () => {}, gradientProps, textStyle, children, style, loading = false,
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
        style={[styles.button, pressedIn && styles.pressedIn]}
        onPressIn={() => {
          setPressedIn(true);
        }}
        onPressOut={() => {
          setPressedIn(false);
        }}
        onPress={(e) => onPress(e)}
      >
        { (evaProps: any) => (
          <Text style={[evaProps.style, styles.buttonText]}>
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
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: 20,
    height: 45,
  },
  button: {
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: 20,
    borderWidth: 0,
    height: "100%",
  },
  buttonText: {
    fontFamily: "Poppins_600SemiBold",
    color: "black",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 14,
  },
});

export default GradientButton;
