import React from "react";
import { Container, OptionButton, OptionTextButton } from "./styles";

interface SwitchButtonProps {
  options: Array<{
    label: string;
    isSelected: boolean;
  }>;
  handleChange: (selectedOption: string) => void;
}

export const SwitchButton = ({ options, handleChange }: SwitchButtonProps) => {
  return (
    <Container>
      <OptionButton
        isActive={options[0].isSelected}
        onPress={() => handleChange(options[0].label)}
      >
        <OptionTextButton isActive={options[0].isSelected}>
          {options[0].label}
        </OptionTextButton>
      </OptionButton>

      <OptionButton
        isActive={options[1].isSelected}
        onPress={() => handleChange(options[1].label)}
      >
        <OptionTextButton isActive={options[1].isSelected}>
          {options[1].label}
        </OptionTextButton>
      </OptionButton>
    </Container>
  );
};
