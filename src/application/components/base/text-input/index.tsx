import { Input } from "./styles";
import React, { forwardRef } from "react";
import { TextInputProps } from "react-native";

export const TextInput = forwardRef<any, TextInputProps>(({ ...rest }, ref) => (
  <Input ref={ref} autoCapitalize="none" {...rest} />
));
