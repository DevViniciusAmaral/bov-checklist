import styled from "styled-components/native";
import { Layout } from "@/application/components/layout";
import { Button } from "@/application/components/button";
import { Text } from "@/application/components/base/text";

interface SaveButtonProps {
  isActive: boolean;
}

export const Container = styled(Layout).attrs({
  scrollEnabled: true,
  paddingTopEnabled: true,
  contentContainerStyle: { gap: 16, padding: 16 },
})``;

export const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const InputContainer = styled.View`
  gap: 8px;
`;

export const Footer = styled.View`
  padding-top: 16px;
`;

export const SaveButton = styled(Button)<SaveButtonProps>`
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.primaryDark};
`;

export const SaveTextButton = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
