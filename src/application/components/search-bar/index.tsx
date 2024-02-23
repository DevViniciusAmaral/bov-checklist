import { Container } from "./styles";
import React, { forwardRef } from "react";
import { useTheme } from "styled-components";
import { Search } from "lucide-react-native";
import { TextInput } from "../base/text-input";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";

interface SearchBarProps extends TextInputProps {
  isLoading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export const SearchBar = forwardRef<any, SearchBarProps>(
  ({ value, isLoading, containerStyle, ...rest }, ref) => {
    const theme = useTheme();

    return (
      <Container style={containerStyle}>
        <Search size={20} color={theme.colors.placeholder} />
        <TextInput ref={ref} {...rest} />
      </Container>
    );
  }
);
