import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeaderHandleFarm } from "./components/header";
import { InputForm } from "../../components/input-form";
import { StackRootProps } from "../../routes/StackRootProps";
import {
  Label,
  Footer,
  Container,
  SaveButton,
  InputContainer,
  SaveTextButton,
} from "./styles";
import { useMutation } from "@tanstack/react-query";
import { useFarm } from "@/application/hooks/farm";
import { IFarm } from "@/infrastructure/services/farm/models/IFarm";

interface IUpdateFarm {
  id: string;
  value: IFarm;
}

export const HandleFarm = ({
  route,
  navigation,
}: StackRootProps<"HandleFarm">) => {
  const id = route.params?.id;

  const { farms, createFarm, updateFarm } = useFarm();

  const farm = farms.find((farm) => farm?.id === id);

  const createFarmMutation = useMutation<void, any, IFarm>({
    mutationKey: ["createFarm"],
    mutationFn: (value) => createFarm(value),
  });

  const updateFarmMutation = useMutation<void, any, IUpdateFarm>({
    mutationKey: ["createFarm"],
    mutationFn: ({ id, value }) => updateFarm(id, value),
  });

  const screenTitle = `${id ? "Editar" : "Novo"} registro`;

  const requiredField = { required_error: "Obrigatório" };

  const schema = z.object({
    name: z.string(requiredField).default(farm?.name),
    farmer: z.string(requiredField).default(farm?.farmer),
    city: z.string(requiredField).default(farm?.city),
  });

  type FormData = z.infer<typeof schema>;

  const {
    watch,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { name, farmer, city } = watch();
  const saveButtonIsActive = !!farm || (!!name && !!farmer && !!city);

  const inputs = [
    {
      name: "name",
      label: "Fazenda",
      placeholder: "Nome da fazenda",
      defaultValue: farm?.name,
    },
    {
      name: "farmer",
      label: "Fazendeiro",
      placeholder: "Nome do fazendeiro",
      defaultValue: farm?.farmer,
    },
    {
      name: "city",
      label: "Cidade",
      placeholder: "Nome da cidade",
      defaultValue: farm?.city,
    },
  ];

  const handleSubmitForm = async (value: FormData) => {
    if (farm) await updateFarmMutation.mutateAsync({ id, value } as IUpdateFarm);
    else await createFarmMutation.mutateAsync(value as IFarm);
    navigation.goBack();
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
      {inputs.map(({ label, ...rest }, index) => (
        <InputContainer key={index}>
          <Label>{label}</Label>
          <InputForm {...rest} control={control} error={errors[name]} />
        </InputContainer>
      ))}
    </Container>
  );
};
