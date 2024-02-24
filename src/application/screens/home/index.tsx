import { FlatList } from "./styles";
import React, { useState } from "react";
import { Plus } from "lucide-react-native";
import { Divider, FloatButton } from "./styles";
import { StackRootProps } from "../../routes/StackRootProps";

// HOOKS
import { useTheme } from "styled-components";
import { useNetInfo } from "@react-native-community/netinfo";

// COMPONENTS
import { Layout } from "../../components/layout";
import { HeaderHome } from "./components/header";
import { FarmCard } from "./components/farm-card";

export const Home = ({ navigation }: StackRootProps<"Home">) => {
  const theme = useTheme();
  const netInfo = useNetInfo();

  const [isConnected, setIsConnected] = useState(netInfo?.isConnected ?? true);

  const [searchValue, setSearchValue] = useState("");

  return (
    <Layout
      paddingTopEnabled
      header={
        <HeaderHome
          wifiIsEnabled={isConnected}
          handleChangeDate={() => {}}
          handleSearch={setSearchValue}
          handlePressWifiButton={() => setIsConnected((value) => !value)}
        />
      }
    >
      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <FarmCard data={item} />}
        ItemSeparatorComponent={() => <Divider />}
      />

      <FloatButton onPress={() => navigation.navigate("HandleFarm")}>
        <Plus size={24} color={theme.colors.primary} />
      </FloatButton>
    </Layout>
  );
};
