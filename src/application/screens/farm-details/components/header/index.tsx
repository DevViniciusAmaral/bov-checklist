import React from "react";
import { View } from "react-native";
import {
  Container,
  HorizontalContainer,
  Label,
  Title,
  VerticalContainer,
} from "./styles";
import { Button } from "../../../../components/button";
import { ArrowLeft, SquarePen } from "lucide-react-native";
import { useTheme } from "styled-components";

interface HeaderFarmDetailsProps {
  goBack: () => void;
  handleEdit: () => void;
}

export const HeaderFarmDetails = ({
  goBack,
  handleEdit,
}: HeaderFarmDetailsProps) => {
  const theme = useTheme();

  return (
    <Container>
      <Button onPress={goBack}>
        <ArrowLeft size={24} color={theme.colors.text} />
      </Button>

      <HorizontalContainer>
        <VerticalContainer>
          <Title>Nome da fazenda</Title>
          <Label bold>
            Última atualização: <Label>sábado 12 novembro 2022</Label>
          </Label>
        </VerticalContainer>

        <Button onPress={handleEdit}>
          <SquarePen size={20} color={theme.colors.secondary} />
        </Button>
      </HorizontalContainer>
    </Container>
  );
};
