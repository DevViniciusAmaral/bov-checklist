import React, { useState } from "react";
import {
  Container,
  Footer,
  InputContainer,
  Label,
  SaveButton,
  SaveTextButton,
} from "./styles";
import { HeaderHandleFarm } from "./components/header";
import { StackRootProps } from "../../routes/StackRootProps";
import { InputForm } from "../../components/input-form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const HandleFarm = ({
  route,
  navigation,
}: StackRootProps<"HandleFarm">) => {
  const id = route.params?.id;

  const screenTitle = `${id ? "Editar" : "Novo"} registro`;

  const requiredField = { required_error: "Obrigatório" };

  const schema = z.object({
    farm: z.string(requiredField),
    farmer: z.string(requiredField),
    city: z.string(requiredField),
    amountMilk: z.string(requiredField),
    amountCattle: z.string(requiredField),
    supervisor: z.string(requiredField),
  });

  type FormData = z.infer<typeof schema>;

  const {
    watch,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { farm, farmer, city, amountMilk, amountCattle, supervisor } = watch();

  const saveButtonIsActive =
    !!farm &&
    !!farmer &&
    !!city &&
    !!amountMilk &&
    !!amountCattle &&
    !!supervisor;

  const inputs = [
    { name: "farm", label: "Fazenda", placeholder: "Nome da fazenda" },
    { name: "farmer", label: "Fazendeiro", placeholder: "Nome do fazendeiro" },
    { name: "city", label: "Cidade", placeholder: "Nome da cidade" },
    {
      name: "amountMilk",
      label: "Quantidade de leite do mês corrente",
      placeholder: "0",
    },
    {
      name: "amountCattle",
      label: "Quantidade de cabeça de gado",
      placeholder: "0",
    },
    {
      name: "supervisor",
      label: "Supervisor",
      placeholder: "Nome do supervisor",
    },
  ];

  const handleSubmitForm = (values: FormData) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <Container
      header={
        <HeaderHandleFarm title={screenTitle} goBack={navigation.goBack} />
      }
      footer={
        <Footer>
          <SaveButton
            isActive={saveButtonIsActive}
            onPress={handleSubmit(handleSubmitForm)}
          >
            <SaveTextButton>SALVAR</SaveTextButton>
          </SaveButton>
        </Footer>
      }
    >
      {inputs.map(({ name, label, placeholder }, index) => (
        <InputContainer key={index}>
          <Label>{label}</Label>

          <InputForm
            name={name}
            control={control}
            error={errors[name]}
            placeholder={placeholder}
          />
        </InputContainer>
      ))}
    </Container>
  );
};
