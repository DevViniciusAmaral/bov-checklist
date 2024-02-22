import { PixelRatio } from "react-native";
import styled from "styled-components/native";

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${PixelRatio.getFontScale() * 14}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
