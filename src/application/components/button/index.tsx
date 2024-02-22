import React, { forwardRef } from "react";
import { TouchableOpacity } from "./styles";
import { TouchableOpacityProps } from "react-native";

export const Button = forwardRef<any, TouchableOpacityProps>(
  ({ ...rest }, ref) => <TouchableOpacity ref={ref} {...rest} />
);
