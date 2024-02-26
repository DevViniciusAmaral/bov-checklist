import { Text } from "../base/text";
import { PixelRatio } from "react-native";
import styled from "styled-components/native";

export const Header = styled.View`
  gap: 16px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled(Text)`
  font-size: ${PixelRatio.getFontScale() * 16}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
