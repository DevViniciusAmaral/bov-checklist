import React from "react";
import { useTheme } from "styled-components";
import { Button } from "../../../../components/button";
import { ArrowRight, Trash2 } from "lucide-react-native";
import {
  Label,
  Container,
  VerticalContainer,
  HorizontalContainer,
} from "./styles";

export const FarmCard = () => {
  const theme = useTheme();

  return (
    <Container>
      <VerticalContainer>
        <Label>Nome da fazenda</Label>
        <Label secondary>Nome do fazendeiro</Label>
      </VerticalContainer>

      <VerticalContainer alignRight enableGap>
        <Label secondary>Cidade</Label>

        <HorizontalContainer>
          <Button>
            <Trash2 size={20} color={theme.colors.alert} />
          </Button>

          <Button>
            <ArrowRight size={20} color={theme.colors.placeholder} />
          </Button>
        </HorizontalContainer>
      </VerticalContainer>
    </Container>
  );
};
