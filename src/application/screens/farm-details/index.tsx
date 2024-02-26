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
  Title,
  Description,
  HorizontalContainer,
  WrapperVertical,
} from "./styles";
import { useFarm } from "@/application/hooks/farm";
import { useChecklist } from "@/application/hooks/checklist";
import { Text } from "@/application/components/base/text";
import { formatDate } from "@/application/utils/Date";

export const FarmDetails = ({
  route,
  navigation,
}: StackRootProps<"FarmDetails">) => {
  const { id } = route.params;
  const { farms } = useFarm();
  const farm = farms.find((farm) => farm.id === id);

  const { checklists } = useChecklist();
  const checklistsFarm = checklists.filter(({ farmId }) => farmId === id);
  const checklist = checklistsFarm.at(-1);

  const farmData = [
    {
      icon: images.farmer,
      label: "Fazendeiro",
      value: farm.farmer,
    },
    {
      icon: images.map,
      label: "Cidade",
      value: farm.city,
    },
  ];

  const lastChecklistData = [
    {
      icon: images.milk,
      label: "Produção de leite por mês (litros)",
      value: checklist?.amountMilk,
    },
    {
      icon: images.cow,
      label: "Quantidade de cabeça de gado",
      value: checklist?.amountCattle,
    },
    {
      icon: images.supervisor,
      label: "Supervisor",
      value: checklist?.supervisor,
    },
  ];

  const date = formatDate(
    checklist.updatedAt ?? checklist.createdAt,
    "E, dd MMMM yyyy"
  );

  const hours = formatDate(checklist.updatedAt ?? checklist.createdAt, "HH:mm");

  return (
    <Container
      header={
        <HeaderFarmDetails
          name={farm.name}
          lastUpdate={farm?.createdAt ?? farm?.updatedAt}
          goBack={navigation.goBack}
          handleEdit={() => navigation.navigate("HandleFarm", { id })}
        />
      }
      footer={
        <Footer>
          <DeleteButton>
            <DeleteTextButton>EXCLUIR</DeleteTextButton>
          </DeleteButton>
        </Footer>
      }
    >
      {farmData.map(({ icon, label, value }, index) => (
        <React.Fragment key={index}>
          <Card enableBorder={index < farmData.length - 1}>
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

      <HorizontalContainer>
        <Title>Último checklist</Title>
        <Description>{`${date} às ${hours}`}</Description>
      </HorizontalContainer>

      {lastChecklistData.map(({ icon, label, value }, index) => (
        <React.Fragment key={index}>
          <Card enableBorder={index < lastChecklistData.length - 1}>
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
