import React from "react";
import { Button } from "../button";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components";
import { ArrowLeft } from "lucide-react-native";

interface HeaderProps {
  title: string;
  goBack: () => void;
}

export const Header = ({ title, goBack }: HeaderProps) => {
  const theme = useTheme();

  return (
    <Container>
      <Button onPress={goBack}>
        <ArrowLeft size={24} color={theme.colors.text} />
      </Button>

      <Title>{title}</Title>
    </Container>
  );
};
