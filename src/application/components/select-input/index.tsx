import React from "react";
import { useTheme } from "styled-components";
import { ChevronDown } from "lucide-react-native";
import { Container, Label, SelectDropdown } from "./styles";

type Data = { label: string; value: string };

interface SelectInputProps {
  data: Data[];
  value?: Data;
  label?: string;
  search?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  onChange: (value: Data) => void;
}

export const SelectInput = ({ label, ...rest }: SelectInputProps) => {
  const theme = useTheme();

  return (
    <Container>
      {label && <Label>{label}</Label>}

      <SelectDropdown
        // style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        // placeholderStyle={styles.placeholderStyle}
        // selectedTextStyle={styles.selectedTextStyle}
        // inputSearchStyle={styles.inputSearchStyle}
        // iconStyle={styles.iconStyle}
        {...rest}
        maxHeight={300}
        labelField="label"
        valueField="value"
        renderRightIcon={() => (
          <ChevronDown size={20} color={theme.colors.placeholder} />
        )}
      />
    </Container>
  );
};
