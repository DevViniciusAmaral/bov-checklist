import styled from "styled-components/native";
import { Button } from "@/application/components/button";

export const Container = styled.View`
  gap: 16px;
  height: 130px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ImageButton = styled(Button)`
  padding: 16px;
  border-width: 1px;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.colors.primaryDark};
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;
