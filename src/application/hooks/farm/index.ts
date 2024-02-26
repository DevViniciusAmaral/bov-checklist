import uuid from "react-native-uuid";
import { farmService } from "@/infrastructure/services/farm";
import { IFarm } from "@/infrastructure/services/farm/models/IFarm";

// HOOKS
import { useFarmStore } from "@/application/stores/farm";
import { useNetInfo } from "@react-native-community/netinfo";

export const useFarm = () => {
  const store = useFarmStore();
  const { isConnected } = useNetInfo();
  // const isConnected = false;

  const farmList = store.farms.filter((farm) => !farm.toDelete);

  const createFarm = async (value: IFarm) => {
    try {
      const id = uuid.v4() as string;
      const farm = { id, ...value, createdAt: new Date().toString() };

      if (isConnected) await farmService.create(farm);
      else farm.toUpload = true;

      store.create(farm);
    } catch (error) {
      console.log(error);
    }
  };

  const syncDeletedFarms = async () => {
    try {
      const toDeleteFarms = store.farms.filter((farm) => farm.toDelete);
      console.log("toDeleteFarms =>", toDeleteFarms.length);
      if (toDeleteFarms.length === 0) return;

      const local = toDeleteFarms.filter((farm) => farm.toUpload);
      if (local.length > 0) local.forEach(({ id }) => store.delete(id));

      const online = toDeleteFarms.filter((farm) => !farm.toUpload);
      await Promise.allSettled(online.map(({ id }) => farmService.delete(id)));
    } catch (error) {
      console.log("Error SynDeletedFarms =>", error);
    }
  };

  const syncUploadedFarms = async () => {
    try {
      const toUploadFarms = store.farms.filter((farm) => farm.toUpload);
      console.log("toUploadFarms =>", toUploadFarms.length);
      if (toUploadFarms.length === 0) return;

      await Promise.allSettled(
        toUploadFarms.map(({ toDelete, toUpdate, toUpload, ...rest }) => {
          return farmService.create({ ...rest });
        })
      );
    } catch (error) {
      console.log("Error syncUploadedFarms =>", error);
    }
  };

  const syncUpdatedFarms = async () => {
    try {
      const toUpdateFarms = store.farms.filter((farm) => farm.toUpdate);
      console.log("toUpdateFarms =>", toUpdateFarms.length);
      if (toUpdateFarms.length === 0) return;

      await Promise.allSettled(
        toUpdateFarms.map(({ toDelete, toUpdate, toUpload, id, ...rest }) => {
          return farmService.update(id, { id, ...rest });
        })
      );
    } catch (error) {
      console.log("Error syncUploadedFarms =>", error);
    }
  };

  const syncFarms = async () => {
    try {
      await syncDeletedFarms();
      await syncUploadedFarms();
      await syncUpdatedFarms();

      const { data: farms } = await farmService.read();

      store.deleteAll();
      farms.forEach((farm) => store.create(farm));
    } catch (error) {
      console.log(error);
    }
  };

  const updateFarm = async (id: string, value: IFarm) => {
    try {
      const farm = store.farms.find((farm) => farm.id === id);

      const updatedFarm = {
        ...farm,
        ...value,
        updatedAt: new Date().toString(),
      };

      if (isConnected) await farmService.update(id, updatedFarm);
      else updatedFarm.toUpdate = true;

      store.update(id, updatedFarm);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFarm = async (id: string) => {
    try {
      const farm = store.farms.find((farm) => farm.id === id);

      if (isConnected) {
        await farmService.delete(id);
        store.delete(id);
      } else store.update(id, { ...farm, toDelete: true });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    farms: farmList,
    createFarm,
    syncFarms,
    updateFarm,
    deleteFarm,
  };
};
