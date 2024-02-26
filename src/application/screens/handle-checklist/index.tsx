import React, { useState } from "react";
import {
  Container,
  Footer,
  InputContainer,
  Label,
  SaveButton,
  SaveTextButton,
} from "./styles";
import { Header } from "@/application/components/header";
import { StackRootProps } from "@/application/routes/StackRootProps";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm, InputFormProps } from "@/application/components/input-form";
import { SelectInput } from "@/application/components/select-input";
import { useFarm } from "@/application/hooks/farm";
import { EChecklistType } from "@/infrastructure/services/checklist/enums/EChecklistType";
import { useChecklist } from "@/application/hooks/checklist";
import { useMutation } from "@tanstack/react-query";
import { IChecklist } from "@/infrastructure/services/checklist/models/IChecklist";

interface InputProps extends InputFormProps {
  label?: string;
}

interface UpdateChecklist {
  id: string;
  value: IChecklist;
}

export const HandleChecklist = ({
  route,
  navigation,
}: StackRootProps<"HandleChecklist">) => {
  const id = route.params?.id;
  const { checklists, createChecklist, updateChecklist } = useChecklist();

  const checklist = checklists.find((checklist) => checklist.id === id);
  const screenTitle = `${id ? "Editar" : "Novo"} checklist`;

  const createMutation = useMutation<any, void, IChecklist>({
    mutationKey: ["createChecklist"],
    mutationFn: (value) => createChecklist(value),
  });

  const updateMutation = useMutation<any, void, UpdateChecklist>({
    mutationKey: ["updateChecklist"],
    mutationFn: ({ id, value }) => updateChecklist(id, value),
  });

  const { farms } = useFarm();
  const farmList = farms.map(({ id: value, name: label }) => ({
    label,
    value,
  }));

  const typeChecklist = [
    { label: "BPA", value: EChecklistType.BPA },
    { label: "Antibiótico", value: EChecklistType.ANTIBIOTICO },
    { label: "BPF", value: EChecklistType.BPF },
  ];

  const requiredField = { required_error: "obrigatório" };

  const schema = z.object({
    type: z.string(requiredField).default(""),
    farmId: z.string(requiredField).default(""),
    supervisor: z.string(requiredField).default(""),
    amountMilk: z.coerce.number(requiredField).default(0),
    amountCattle: z.coerce.number(requiredField).default(0),
  });

  type FormData = z.infer<typeof schema>;

  const {
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const inputs: InputProps[] = [
    {
      name: "amountCattle",
      label: "Quantidade de cabeça de gado",
      placeholder: "0",
      keyboardType: "numeric",
    },
    {
      name: "amountMilk",
      label: "Quantidade de leite produzido esse mês",
      placeholder: "0",
      keyboardType: "numeric",
    },
    {
      name: "supervisor",
      label: "Supervisor",
      placeholder: "Nome do supervisor",
    },
  ];

  const handleSubmitForm = async (value: FormData) => {
    console.log(JSON.stringify(value, null, 2));
    if (checklist) {
      await updateMutation.mutateAsync({ id, value } as UpdateChecklist);
    } else await createMutation.mutateAsync(value as IChecklist);
  };

  return (
    <Container
      header={<Header title={screenTitle} goBack={navigation.goBack} />}
      footer={
        <Footer>
          <SaveButton isActive={true} onPress={handleSubmit(handleSubmitForm)}>
            <SaveTextButton>SALVAR</SaveTextButton>
          </SaveButton>
        </Footer>
      }
    >
      <SelectInput
        placeholder="Tipo"
        data={typeChecklist}
        label="Selecione o tipo"
        onChange={({ value }) => setValue("type", value)}
      />

      <SelectInput
        data={farmList}
        placeholder="Fazenda"
        label="Selecione a fazenda"
        onChange={({ value }) => setValue("farmId", value)}
      />

      {inputs.map(({ label, ...rest }, index) => (
        <InputContainer key={index}>
          <Label>{label}</Label>
          <InputForm control={control} {...rest} />
        </InputContainer>
      ))}
    </Container>
  );
};
