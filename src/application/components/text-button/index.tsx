import React from "react";
import { Button } from "../button";
import { Text } from "../base/text";
import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";

interface TextButtonProps extends TouchableOpacityProps {
  textStyle?: StyleProp<TextStyle>;
}

export const TextButton = ({
  children,
  textStyle,
  ...rest
}: TextButtonProps) => (
  <Button {...rest}>
    <Text style={textStyle}>{children}</Text>
  </Button>
);
