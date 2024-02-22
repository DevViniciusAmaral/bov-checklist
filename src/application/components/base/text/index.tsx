import { Label } from "./styles";
import { TextProps } from "react-native";
import React, { forwardRef } from "react";

export const Text = forwardRef<any, TextProps>(({ ...rest }, ref) => (
  <Label ref={ref} {...rest} />
));
