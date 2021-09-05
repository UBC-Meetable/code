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
    onPress = () => {}, textStyle, children, style, loading = false, disabled,
  } = props;
  return (
    <Button
      {...props}
      style={[styles.button, style]}
      onPress={(e) => onPress(e)}
      accessoryLeft={() => (loading ? <Spinner status={props.status} /> : <Layout />)}
      disabled={loading || disabled}
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
