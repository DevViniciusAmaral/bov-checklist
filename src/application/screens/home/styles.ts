import { FlatListProps } from "react-native";
import styled from "styled-components/native";
import { Button } from "../../components/button";

export const FlatList = styled.FlatList.attrs(
  ({ theme }) =>
    ({
      showsVerticalScrollIndicator: false,
      contentContainerStyle: {
        paddingBottom: 82,
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

export const FloatButton = styled(Button)`
  right: 16px;
  bottom: 16px;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
