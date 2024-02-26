import { FlatList } from "./styles";
import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react-native";
import { Divider, FloatButton } from "./styles";
import { StackRootProps } from "../../routes/StackRootProps";

// HOOKS
import { useTheme } from "styled-components";
import { useFarm } from "@/application/hooks/farm";
import { useModalize } from "react-native-modalize";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNetInfo } from "@react-native-community/netinfo";

// COMPONENTS
import { Layout } from "../../components/layout";
import { HeaderHome } from "./components/header";
import { FarmCard } from "./components/farm-card";
import { AddModal } from "./components/add-modal";
import { useChecklist } from "@/application/hooks/checklist";

export const Home = ({ navigation }: StackRootProps<"Home">) => {
  const theme = useTheme();
  const { isConnected } = useNetInfo();

  const { syncChecklists } = useChecklist();
  const { farms, deleteFarm, syncFarms } = useFarm();

  // useQuery({
  //   queryKey: ["syncFarms"],
  //   queryFn: () => isConnected && syncFarms,
  // });

  const { ref, open, close } = useModalize();

  const [searchValue, setSearchValue] = useState("");

  const deleteFarmMutation = useMutation<any, void, string>({
    mutationKey: ["deleteFarm"],
    mutationFn: (id) => deleteFarm(id),
  });

  const filteredFarms =
    searchValue?.length > 0
      ? farms.filter((farm) =>
          farm.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : farms;

  const handleEditFarm = (id: string) => {
    navigation.navigate("HandleFarm", { id });
  };

  const handleDeleteFarm = async (id: string) => {
    await deleteFarmMutation.mutateAsync(id);
  };

  useEffect(() => {
    syncChecklists();
  }, []);

  return (
    <>
      <Layout
        paddingTopEnabled
        header={
          <HeaderHome
            wifiIsEnabled={isConnected}
            handleSearch={setSearchValue}
            handlePressWifiButton={() => {}}
          />
        }
      >
        <FlatList
          data={filteredFarms}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <FarmCard
              data={item}
              handleEdit={handleEditFarm}
              handleDelete={handleDeleteFarm}
            />
          )}
          ItemSeparatorComponent={() => <Divider />}
        />

        <FloatButton onPress={open}>
          <Plus size={24} color={theme.colors.primary} />
        </FloatButton>
      </Layout>

      <AddModal ref={ref} close={close} />
    </>
  );
};
