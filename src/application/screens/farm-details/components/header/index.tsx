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
import { formatDate } from "@/application/utils/Date";

interface HeaderFarmDetailsProps {
  name: string;
  lastUpdate: string;
  goBack: () => void;
  handleEdit: () => void;
}

export const HeaderFarmDetails = ({
  name,
  lastUpdate,
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
          <Title>{name}</Title>
          <Label bold>
            Última atualização:{" "}
            <Label>{formatDate(lastUpdate, "E, dd MMMM yyyy")}</Label>
          </Label>
        </VerticalContainer>

        <Button onPress={handleEdit}>
          <SquarePen size={20} color={theme.colors.secondary} />
        </Button>
      </HorizontalContainer>
    </Container>
  );
};
