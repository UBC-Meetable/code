import {
  Button, ButtonProps, Text, TextProps,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

type PrimaryButtonProps = {
  textStyle?: TextProps
} & ButtonProps;

const PrimaryButton = (props:PrimaryButtonProps) => {
  const { onPress = () => {}, textStyle, children } = props;
  return (
    <Button
      style={styles.button}
      onPress={(e) => onPress(e)}
    >
      { (evaProps: any) => (
        <Text
          {...evaProps}
          style={{ ...textStyle, ...evaProps.style, ...styles.buttonText }}
        >
          {children}
        </Text>
      ) }
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    width: "90%",
    borderRadius: 20,
    borderWidth: 0,
    backgroundColor: "#02A3F4",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  buttonText: {
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 18,
    flex: 1,
    fontFamily: "Poppins_600SemiBold",
  },
});

export default PrimaryButton;
