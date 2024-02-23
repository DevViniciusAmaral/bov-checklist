import React, { ReactNode, useState } from "react";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { Control, Controller, FieldError } from "react-hook-form";
import {
  Label,
  Content,
  Container,
  ErrorText,
  ForgotPasswordButton,
} from "./styles";

// COMPONENTS
import { TextInput } from "../base/text-input";
import { Button } from "../button";
import { Eye, EyeOff } from "lucide-react-native";
import { useTheme } from "styled-components";

type ReactElement = JSX.Element | ReactNode;

export type InputVariant = "contained" | "underline" | "text";

interface IValue {
  label: string;
  value: string;
}

export interface InputFormProps extends TextInputProps {
  name: string;
  error?: FieldError;
  control?: Control<any>;
  endIcon?: ReactElement;
  startIcon?: ReactElement;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const InputForm = ({
  name,
  error,
  control,
  endIcon,
  startIcon,
  labelStyle,
  defaultValue,
  containerStyle,
  onPress,
  ...rest
}: InputFormProps) => {
  const theme = useTheme();

  const isPassword = name?.toLowerCase()?.includes("password");
  const [showPassword, setShowPassword] = useState(isPassword);

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Content>
        {startIcon && <>{startIcon}</>}

        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput
              value={value}
              secureTextEntry={showPassword}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChangeText={onChange}
              {...rest}
            />
          )}
        />

        {endIcon && <>{endIcon}</>}

        {isPassword && !endIcon && (
          <Button onPress={() => setShowPassword((value) => !value)}>
            {showPassword ? (
              <EyeOff size={20} color={theme.colors.placeholder} />
            ) : (
              <Eye size={20} color={theme.colors.placeholder} />
            )}
          </Button>
        )}
      </Content>

      {error && <ErrorText>{error.message}</ErrorText>}
    </Container>
  );
};
