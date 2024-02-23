import styled from "styled-components/native";
import { Image } from "../../../../components/base/image";
import { Text } from "../../../../components/base/text";

export const Container = styled.View`
  gap: 24px;
  padding: 16px;
`;

export const HorizontalWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HorizontalContainer = styled.View`
  gap: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ProfileContainer = styled.View`
  gap: 8px;
  padding: 2px;
  padding-right: 16px;
  flex-direction: row;
  align-items: center;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const ImageProfile = styled(Image).attrs({
  imageStyle: { borderRadius: 20 },
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Label = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.placeholder};
`;
