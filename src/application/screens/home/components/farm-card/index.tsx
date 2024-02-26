import React from "react";
import { useTheme } from "styled-components";
import { Button } from "../../../../components/button";
import { useNavigation } from "@react-navigation/native";
import { ArrowRight, Edit, Trash2 } from "lucide-react-native";
import { IFarm } from "@/infrastructure/services/farm/models/IFarm";
import {
  Label,
  Container,
  VerticalContainer,
  HorizontalContainer,
} from "./styles";

interface FarmCardProps {
  data: IFarm;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

export const FarmCard = ({ data, handleEdit, handleDelete }: FarmCardProps) => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <Container onPress={() => navigate("FarmDetails", { id: data.id })}>
      <VerticalContainer>
        <Label>{data.name}</Label>
        <Label secondary>{data.farmer}</Label>
      </VerticalContainer>

      <VerticalContainer alignRight enableGap>
        <Label secondary>{data.city}</Label>

        <HorizontalContainer>
          <Button onPress={() => handleEdit(data.id)}>
            <Edit size={20} color={theme.colors.secondary} />
          </Button>

          <Button onPress={() => handleDelete(data.id)}>
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
