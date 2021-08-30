import {
  Button, ButtonProps, Layout, Spinner, Text, TextProps,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

type PrimaryButtonProps = {
  textStyle?: TextProps
  loading?: boolean
} & ButtonProps;

const PrimaryButton = (props:PrimaryButtonProps) => {
  const {
    onPress = () => {}, textStyle, children, style, loading = false,
  } = props;
  return (
    <Button
      style={[styles.button, style,
        { opacity: loading ? 0.5 : 1 }]}
      onPress={(e) => onPress(e)}
      accessoryLeft={() => (loading ? <Spinner /> : <Layout />)}
      disabled={loading}
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#02A3F4",
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
