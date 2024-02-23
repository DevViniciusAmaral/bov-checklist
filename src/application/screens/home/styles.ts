import { FlatListProps } from "react-native";
import styled from "styled-components/native";

export const FlatList = styled.FlatList.attrs(
  ({ theme }) =>
    ({
      showsVerticalScrollIndicator: false,
      contentContainerStyle: {
        paddingBottom: 16,
        paddingHorizontal: 16,
      },
    } as FlatListProps<any>)
)`
  border-top-width: 2px;
  border-top-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const Divider = styled.View`
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.border};
`;
