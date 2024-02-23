import { Text } from "../base/text";
import { Button } from "../button";
import styled from "styled-components/native";

interface OptionButtonProps {
  isActive?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  border-radius: 100px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const OptionButton = styled(Button)<OptionButtonProps>`
  flex: 1;
  height: 40px;
  align-items: center;
  border-radius: 100px;
  justify-content: center;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.primaryLight};
`;

export const OptionTextButton = styled(Text)<OptionButtonProps>`
  font-family: ${({ theme, isActive }) =>
    isActive ? theme.fonts.bold : theme.fonts.regular};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.primaryDark};
`;
