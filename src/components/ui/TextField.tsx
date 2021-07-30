import { Input, InputProps } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

type TextFieldProps = {} & InputProps;

const TextField = (props:TextFieldProps) => {
  const { style: propStyles, textStyle } = props;
  return (
    <Input
      {...props}
      textStyle={[textStyle, styles.textBase]}
      style={[propStyles, styles.base]}
      placeholderTextColor="#C5C5C5"
    />
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: "#F0D9C8",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  textBase: {
    paddingVertical: 10,
    borderWidth: 0,
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",

  },
});

export default TextField;
