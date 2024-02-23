import { Button } from "../button";
import { Text } from "../base/text";
import { TextButton } from "../text-button";
import styled from "styled-components/native";

interface LabelProps {
  isFocused?: boolean;
}

export const Container = styled(Button)`
  gap: 4px;
  flex-grow: 1;
`;

export const Label = styled(Text)<LabelProps>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary : theme.colors.primaryDark};
`;

export const Content = styled.View`
  gap: 8px;
  min-height: 40px;
  padding: 0px 16px;
  flex-direction: row;
  border-radius: 8px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const ErrorText = styled(Text)`
  font-size: 12px;
  text-align: right;
  color: ${({ theme }) => theme.colors.alert};
`;

export const ForgotPasswordButton = styled(TextButton).attrs(({ theme }) => ({
  textStyle: { fontSize: 12, color: theme.colors.primaryDark },
}))`
  align-self: flex-end;
`;
