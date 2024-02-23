import React from "react";
import { images } from "../../assets/images";
import { HeaderFarmDetails } from "./components/header";
import { StackRootProps } from "../../routes/StackRootProps";
import {
  Card,
  Label,
  Footer,
  Container,
  IconImage,
  DeleteButton,
  IconContainer,
  DeleteTextButton,
  VerticalContainer,
} from "./styles";

export const FarmDetails = ({
  route,
  navigation,
}: StackRootProps<"FarmDetails">) => {
  const { id } = route.params;

  const data = [
    {
      icon: images.farmer,
      label: "Fazendeiro",
      value: "Nome do fazendeiro",
    },
    {
      icon: images.map,
      label: "Cidade",
      value: "Nome do cidade",
    },
    {
      icon: images.milk,
      label: "Produção de leite por mês (litros)",
      value: "200",
    },
    {
      icon: images.cow,
      label: "Quantidade de cabeça de gado",
      value: "2400",
    },
    {
      icon: images.supervisor,
      label: "Supervisor",
      value: "Nome do supervisor",
    },
  ];

  return (
    <Container
      header={
        <HeaderFarmDetails goBack={navigation.goBack} handleEdit={() => {}} />
      }
      footer={
        <Footer>
          <DeleteButton>
            <DeleteTextButton>EXCLUIR</DeleteTextButton>
          </DeleteButton>
        </Footer>
      }
    >
      {data.map(({ icon, label, value }, index) => (
        <React.Fragment key={index}>
          <Card enableBorder={index < data.length - 1}>
            <IconContainer>
              <IconImage source={icon} />
            </IconContainer>

            <VerticalContainer>
              <Label secondary>{label}</Label>
              <Label>{value}</Label>
            </VerticalContainer>
          </Card>
        </React.Fragment>
      ))}
    </Container>
  );
};
