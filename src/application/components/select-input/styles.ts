import styled from "styled-components/native";
import { Dropdown } from "react-native-element-dropdown";
import { Text } from "../base/text";

export const Container = styled.View`
  gap: 8px;
`;

export const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const SelectDropdown = styled(Dropdown).attrs(({ theme }) => ({
  placeholderStyle: {
    fontSize: 14,
    color: theme.colors.placeholder,
    fontFamily: theme.fonts.regular,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
  },
}))`
  height: 40px;
  padding: 0px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;
