import styled from "styled-components/native";

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.placeholder,
}))`
  flex: 1;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
