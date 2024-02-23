import React, { useState } from "react";
import { useNetInfo } from "@react-native-community/netinfo";

// COMPONENTS
import { Layout } from "../../components/layout";
import { HeaderHome } from "./components/header";
// import { FlatList } from "react-native";
import { Divider } from "./styles";
import { FlatList } from "./styles";
import { FarmCard } from "./components/farm-card";

export const Home = () => {
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
    </Layout>
  );
};
