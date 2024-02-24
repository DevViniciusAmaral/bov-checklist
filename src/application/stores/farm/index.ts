import { create } from "zustand";
import { database } from "@/infrastructure/database";
import { persist, createJSONStorage } from "zustand/middleware";
import { IFarm } from "@/infrastructure/services/farm/models/IFarm";

interface IFarmStore {
  farms: IFarm[];
  create: (value: IFarm) => void;
  read: () => IFarm[];
  update: (id: string, value: IFarm) => void;
  delete: (id: string) => void;
  deleteAll: () => void;
}

export const useFarmStore = create<IFarmStore>()(
  persist(
    (set, get) => ({
      farms: [],
      create: (value: IFarm) => set({ farms: [...get().farms, value] }),
      read: () => get().farms,
      update: (id: string, value: IFarm) =>
        set({
          farms: get().farms.map((farm) =>
            farm.id === id ? { ...farm, ...value } : farm
          ),
        }),
      delete: (id: string) =>
        set({ farms: get().farms.filter((farm) => farm.id !== id) }),
      deleteAll: () => set({ farms: [] }),
    }),
    {
      name: "farms",
      storage: createJSONStorage(() => database),
    }
  )
);
