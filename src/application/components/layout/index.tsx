import React, { ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Container,
  ScrollView,
  HeaderContainer,
  FooterContainer,
} from "./styles";

interface ILayoutProps extends ScrollViewProps {
  footer?: ReactNode;
  paddingTopEnabled?: boolean;
  header?: React.ReactNode | JSX.Element;
}

export const Layout = ({
  header,
  footer,
  children,
  scrollEnabled,
  paddingTopEnabled = false,
  ...rest
}: ILayoutProps) => {
  const { top } = useSafeAreaInsets();

  const paddingTop = paddingTopEnabled ? top : 0;

  return (
    <Container paddingTop={paddingTop}>
      <StatusBar style="dark" />

      {header && <HeaderContainer>{header}</HeaderContainer>}

      {scrollEnabled ? (
        <ScrollView {...rest}>{children}</ScrollView>
      ) : (
        <View {...rest}>{children}</View>
      )}

      {footer && <FooterContainer>{footer}</FooterContainer>}
    </Container>
  );
};
