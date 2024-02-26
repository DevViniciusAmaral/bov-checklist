import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Button } from "../../../../components/button";
import { Calendar, WifiOff } from "lucide-react-native";
import { SearchBar } from "../../../../components/search-bar";
import { SwitchButton } from "../../../../components/switch-button";
import {
  Label,
  Container,
  ImageProfile,
  ProfileContainer,
  HorizontalWrapper,
  HorizontalContainer,
} from "./styles";

interface HeaderHomeProps {
  wifiIsEnabled?: boolean;
  // handleChangeDate: () => void;
  handlePressWifiButton: () => void;
  handleSearch: (value: string) => void;
}

export const HeaderHome = ({
  wifiIsEnabled = true,
  handleSearch,
  // handleChangeDate,
  handlePressWifiButton,
}: HeaderHomeProps) => {
  const theme = useTheme();

  const [switchOptions, setSwitchOptions] = useState([
    { label: "Supervisionado", isSelected: true },
    { label: "Não supervisionado", isSelected: false },
  ]);

  const handleSwitchButton = (option: string) => {
    setSwitchOptions((values) =>
      values.map((value) => ({ ...value, isSelected: value.label === option }))
    );
  };

  const wifiIconColor = wifiIsEnabled
    ? theme.colors.primaryDark
    : theme.colors.alert;

  return (
    <Container>
      <HorizontalWrapper>
        <ProfileContainer>
          <ImageProfile
            size={40}
            uri="https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <Label>Anderson Sousa</Label>
        </ProfileContainer>

        <HorizontalContainer>
          <Button onPress={handlePressWifiButton}>
            <WifiOff size={20} color={wifiIconColor} />
          </Button>

          {/* <Button onPress={handleChangeDate}>
            <Calendar size={20} color={theme.colors.primaryDark} />
          </Button> */}
        </HorizontalContainer>
      </HorizontalWrapper>

      <SearchBar placeholder="Pesquisar" onChangeText={handleSearch} />

      {/* <SwitchButton options={switchOptions} handleChange={handleSwitchButton} /> */}
    </Container>
  );
};
