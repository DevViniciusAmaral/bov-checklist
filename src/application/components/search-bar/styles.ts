import styled from "styled-components/native";

export const Container = styled.View`
  gap: 8px;
  height: 40px;
  padding-left: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.border};
`;
