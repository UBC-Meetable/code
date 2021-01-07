import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "./Themed";
import { ButtonProps } from "../types";

const Button = (props: ButtonProps) => {
  const {
    buttonStyle, onPress, children, textStyle,
  } = props;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;