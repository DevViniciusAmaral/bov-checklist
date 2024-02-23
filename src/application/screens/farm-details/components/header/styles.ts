import { PixelRatio } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../../components/base/text";

interface LabelProps {
  bold?: boolean;
}

export const Container = styled.View`
  gap: 16px;
  padding: 16px;
`;

export const VerticalContainer = styled.View``;

export const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-size: ${PixelRatio.getFontScale() * 20}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Label = styled(Text)<LabelProps>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.fonts.medium : theme.fonts.regular};
  font-size: ${PixelRatio.getFontScale() * 12}px;
  color: ${({ theme }) => theme.colors.primaryDark};
`;
