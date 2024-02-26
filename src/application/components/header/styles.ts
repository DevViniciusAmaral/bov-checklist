import { Text } from "../base/text";
import { PixelRatio } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  gap: 8px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: ${PixelRatio.getFontScale() * 16}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
