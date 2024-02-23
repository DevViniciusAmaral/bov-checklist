import styled from "styled-components/native";
import { Text } from "../../../../components/base/text";
import { PixelRatio } from "react-native";

interface LabelProps {
  secondary?: boolean;
}

interface VerticalContainerProps {
  enableGap?: boolean;
  alignRight?: boolean;
}

export const Container = styled.View`
  padding: 16px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const VerticalContainer = styled.View<VerticalContainerProps>`
  gap: ${({ enableGap }) => (enableGap ? 8 : 0)}px;
  align-items: ${({ alignRight }) => (alignRight ? "flex-end" : "flex-start")};
`;

export const HorizontalContainer = styled.View`
  gap: 16px;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled(Text)<LabelProps>`
  font-size: ${({ secondary }) =>
    PixelRatio.getFontScale() * (secondary ? 12 : 14)}px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.placeholder : theme.colors.text};
`;
