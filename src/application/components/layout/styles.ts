import { Platform } from "react-native";
import styled from "styled-components/native";

interface ContainerProps {
  paddingTop: number;
}

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: Platform.OS === "ios" ? "padding" : "height",
})<ContainerProps>`
  flex: 1;
  padding-top: ${({ paddingTop }) => paddingTop}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderContainer = styled.View``;

export const FooterContainer = styled.View`
  padding: 16px;
`;

export const View = styled.View`
  flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;
