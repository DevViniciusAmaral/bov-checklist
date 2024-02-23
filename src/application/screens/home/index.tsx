import React, { useState } from "react";
import { useNetInfo } from "@react-native-community/netinfo";

// COMPONENTS
import { Layout } from "../../components/layout";
import { HeaderHome } from "./components/header";

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
      <></>
    </Layout>
  );
};
