import styled from "styled-components/native";

interface Props {
  size: number;
}

export const ImageBackground = styled.ImageBackground<Props>`
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
