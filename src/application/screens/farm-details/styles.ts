import styled from "styled-components/native";
import { Layout } from "../../components/layout";
import { Button } from "../../components/button";
import { Text } from "../../components/base/text";
import { PixelRatio } from "react-native";

interface LabelProps {
  bold?: boolean;
  secondary?: boolean;
}

export const Container = styled(Layout).attrs({
  scrollEnabled: true,
  paddingTopEnabled: true,
  contentContainerStyle: { padding: 16 },
})``;

export const Card = styled.View`
  gap: 8px;
  padding: 16px 0px;
  flex-direction: row;
  align-items: center;
  border-bottom-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: ${({ enableBorder }) => (enableBorder ? 1 : 0)}px;
`;

export const VerticalContainer = styled.View`
  justify-content: center;
`;

export const Label = styled(Text)<LabelProps>`
  font-family: ${({ theme, secondary }) =>
    secondary ? theme.fonts.medium : theme.fonts.regular};
  font-size: ${({ secondary }) =>
    PixelRatio.getFontScale() * (secondary ? 12 : 14)}px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.primaryDark : theme.colors.text};
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-width: 0.5px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors.primaryDark};
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const IconImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Footer = styled.View`
  padding-top: 16px;
`;

export const DeleteButton = styled(Button)`
  height: 40px;
  padding: 0px 16px;
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors.alert};
`;

export const DeleteTextButton = styled(Text)`
  color: ${({ theme }) => theme.colors.alert};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
