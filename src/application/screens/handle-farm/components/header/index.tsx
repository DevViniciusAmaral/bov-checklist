import React from "react";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components";
import { ArrowLeft } from "lucide-react-native";
import { Button } from "../../../../components/button";

interface HeaderHandleFarmProps {
  title: string;
  goBack: () => void;
}

export const HeaderHandleFarm = ({ title, goBack }: HeaderHandleFarmProps) => {
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
