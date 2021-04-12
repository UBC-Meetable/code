import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonProps } from "../types";
import { Text } from "./Themed";

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
